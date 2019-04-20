import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certs: [],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
      try {
        const result = await axios.get("http://localhost:3001/api/certificate/");  
        this.setState({
          //certs: result.data.data[0].name,
          certs : result.data.data,
          isLoading: false
        });
      } catch (error) {
        this.setState({
          error,
          isLoading: false
        });
      }
    }

    show(certs) {
      var show = "" ;
      for(var i=0; i<certs.length; i++)
        show = show + certs[i].title + "\n";
      return show;
    }

    render() {
      const { certs, isLoading, error } = this.state;
      var show = this.show(certs);
      if (error) {
        return <h3>{error.message}</h3>;
      }

      if (isLoading) {
        return <h3>Loading ...</h3>;
      }
  
      return (
        <div>
        {
          certs.length > 0 ? show + " ." : <h3>nothing here</h3>
        }  
        </div>
      );
    }
  }

export default App;

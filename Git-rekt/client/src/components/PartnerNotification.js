import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';
const id = '5ca1321efe15fd09f00ef452'; //test for now

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      notifs: [],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
      try {
        const result = await axios.get("http://localhost:3001/api/partner/" + id);  
        this.setState({
          //notifs: result.data.data[0].name,
          notifs : result.data.data.notifications,
          isLoading: false
        });
      } catch (error) {
        this.setState({
          error,
          isLoading: false
        });
      }
    }

    render() {
      const { notifs, isLoading, error } = this.state;
      ///var show = this.show(notifs);
      if (error) {
        return <h3>{error.message}</h3>;
      }

      if (isLoading) {
        return <h3>Loading ...</h3>;
      }
  
      return (
        <div>
        {
          notifs.length > 0 ? notifs + " ." : <h3>nothing here</h3>
        }  
        </div>
      );
    }
  }

export default App;

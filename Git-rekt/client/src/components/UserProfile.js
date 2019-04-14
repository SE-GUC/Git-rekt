import React, { Component } from 'react';
import axios from 'axios';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      email: null,
      githubPortofolio: ["omak fi el 3esha"],
      number: null,
      updatedCV: ["walla taret"],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
      try {
        const result = await axios.get("http://localhost:3001/api/user/5cb38382cacd67376ca4b873");  
        this.setState({
          name: result.data.name,
          age: result.data.age,
          email: result.data.email,
          githubPortofolio: result.data.githubPortofolio,
          number: result.data.number,
          updatedCV: result.data.updatedCV,
          isLoading: false
        });
      } catch (error) {
        this.setState({
          error,
          isLoading: false
        });
      }
    }

    show(githubPortofolio) {
      var show = "" ;
      for(var i=0; i<this.state.githubPortofolio.length; i++)
        show = show + githubPortofolio[i] + "\n"
      return show;
    }

    show2(updatedCV) {
      var show = "" ;
      for(var i=0; i<this.state.updatedCV.length; i++)
        show = show + updatedCV[i] + "\n"
      return show;
    }

    render() {
      const { name, age, email, githubPortofolio, number, updatedCV, isLoading, error } = this.state;
      var show = this.show(githubPortofolio);
      var show2 = this.show2(updatedCV);
      if (error) {
        return <h3>{error.message}</h3>;
      }

      if (isLoading) {
        return <h3>Loading ...</h3>;
      }
  
      return (
        <div>
        
          {name ? "name: "+name+" . ": ""}
          {age ? " age: "+age+" . ": ""} 
          {email ? " email: "+email+" . ": "" }
          {githubPortofolio ? " github: "+show +" . ": ""} 
          {number ? " number: "+number+" . ": ""} 
          {updatedCV ? " CV: "+show2 +" . ": ""} 
        </div>
      );
    }
  }

export default UserProfile;

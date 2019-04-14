import React, { Component } from 'react';
import axios from 'axios';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      email: null,
      github: null,
      number: null,
      CV: null,
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
      try {
        const result = await axios.get("http://localhost:3001/api/user/");  
        this.setState({
          name: result.data.data[0].name,
          age: result.data.data[0].age,
          email: result.data.data[0].email,
          github: result.data.data[0].github,
          number: result.data.data[0].number,
          CV: result.data.data[0].CV,
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
      const { name, age, email, github, number, CV, isLoading, error } = this.state;

      if (error) {
        return <h3>{error.message}</h3>;
      }

      if (isLoading) {
        return <h3>Loading ...</h3>;
      }
  
      return (
        <div>
        
          {name ? name  : "nothing here"}
          {age ? age  : "nothing here"} 
          {email ? email  : "nothing here" }
          {github ? github  : "nothing here"} 
          {number ? number  : "nothing here"} 
          {CV ? CV  : "nothing here"}  
       
        </div>
      );
    }
  }

export default UserProfile;

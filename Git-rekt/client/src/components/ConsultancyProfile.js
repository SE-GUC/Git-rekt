import React, { Component } from 'react';
import axios from 'axios';

class ConsultancyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      comRegNum: null,
      establishedsince: null,
      field: null,
      description: null,
      email: null,
      phoneNumber: null,
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
      try {
        const result = await axios.get("http://localhost:3001/api/consultancy/");  
        this.setState({
          name: result.data.data[0].name,
          comRegNum: result.data.data[0].comRegNum,
          establishedsince: result.data.data[0].establishedsince,
          field: result.data.data[0].field,
          description: result.data.data[0].description,
          email: result.data.data[0].email,
          phoneNumber: result.data.data[0].phoneNumber,
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
      const { name, comRegNum, establishedsince, field, description, email, phoneNumber, isLoading, error } = this.state;

      if (error) {
        return <h3>{error.message}</h3>;
      }

      if (isLoading) {
        return <h3>Loading ...</h3>;
      }
  
      return (
        <div>
          <p>
          {name ? "Name: " + name + " " : "nothing here "}
          {comRegNum ? "comRegNum: " + comRegNum + " " : "nothing here "} 
          {establishedsince ? "establishedSince: " + establishedsince + " " : "nothing here " }
          {field ? "field: " + field + " " : "nothing here "} 
          {description ? "description: " + description + " " : "nothing here "} 
          {email ? "email: " + email + " " : "nothing here "}
          {phoneNumber ? "phonenumber: " + phoneNumber + " " : "nothing here "}  
          </p>
        </div>
      );
    }
  }

export default ConsultancyProfile;

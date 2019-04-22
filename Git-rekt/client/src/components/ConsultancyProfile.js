import React, { Component } from 'react';
import axios from 'axios';
import './button.css'

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
        <div ClassName='button' Style="color:green;text-align: left;">
          <h2 Style="color:red;box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);">INFORMATION</h2>
            <span Style='Color:black;font-weight: bold;'>name:</span>{name ? " " +name: "not provided"}
            <br />
            <span Style='Color:black;font-weight: bold;'>comRegNum:</span>{comRegNum ? "  " +comRegNum: "not provided"}
            <br />
            <span Style='Color:black;font-weight: bold;'>establishedsince:</span>{establishedsince ? "  " +establishedsince: "not provided"}<br />
            <span Style='Color:black;font-weight: bold;'>field:</span>{field ? "  " +field: "not provided"} <br />
            <span Style='Color:black;font-weight: bold;'>description:</span>{description ? "  " +description: "not provided"}<br />
            <span Style='Color:black;font-weight: bold;'>email:</span>{email ? "  " +email: "not provided"}<br/>
            <span Style='Color:black;font-weight: bold;'>phoneNumber:</span>{phoneNumber ? "  " +phoneNumber: "not provided"}
        </div>
      );
    }
  }

export default ConsultancyProfile;

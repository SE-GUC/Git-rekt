import React, { Component } from 'react';
import axios from 'axios';
import './button.css'
import * as jwt_decode from "jwt-decode";
import { conditionalExpression } from '@babel/types';

class PartnerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      email: null,
      notifications: null,
      isLoading: false,
      error: null,
    };
    
  }
  
  async settingPartnerId() { 
    try{
      const tokenInfo = localStorage.getItem('jwtTokenPartner')
      const payload = jwt_decode(tokenInfo)
      const partnerId = payload.id
      console.log("" + partnerId)
      this.setState({id: partnerId+""})
      console.log(""+this.state.id)
      console.log("finished making token")
    }
    catch(error){
      console.log("can not decode token")
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      await this.settingPartnerId()
      console.log("getting partner")
      console.log("" + this.state.id)
      const result = await axios.get(`http://localhost:3001/api/partner/${this.state.id}`);  
      console.log("got partner")
      this.setState({
        name: result.data.data.name,
        email: result.data.data.email,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }
  
  show2(notifications) {
    var show = "" ;
    if(this.state.notifications !== null){
      for(var i=0; i<this.state.notifications.length; i++)
      show = show + notifications[i] + "\n"
      return show;
    }
  }

    render() {
        console.log("gwtting partner profile")
      const { name, email, notifications, isLoading, error } = this.state;
      var show2 = this.show2(notifications);
      if (error) {
        return <h3>{error.message}</h3>;
      }
      console.log(name)
      if (isLoading) {
        return <h3>Loading ...</h3>;
      }
  
      return (
        <div ClassName='button' Style="color:green;text-align: left;">
          <button><a href="http://localhost:3000/UpdatePartner">Update Partner</a></button>
          <button><a href="http://localhost:3000/SubmitTask">Submit Task</a></button>
          <button><a href="http://localhost:3000/">Log out</a></button>
          <br />
          <div Style="text-align: justify;">
          <h2 Style="color:red;box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);">INFORMATION</h2>
            <span Style='Color:black;font-weight: bold;'>name:</span>{name ? " " +name: "not provided"}<br />
            <span Style='Color:black;font-weight: bold;'>email:</span>{email ? "  " +email: "not provided"}<br />
          </div> 
        </div>
      );
    }
  }
  
  export default PartnerProfile;
  
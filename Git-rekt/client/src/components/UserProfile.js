import React, { Component } from 'react';
import axios from 'axios';
import './button.css'
import * as jwt_decode from "jwt-decode";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      age: null,
      email: null,
      githubPortofolio: ["-"],
      number: null,
      updatedCV: ["-"],
      isLoading: false,
      error: null,
    };
  }
  
  async settingUserId() { 
    try{
      const tokenInfo = localStorage.getItem('jwtToken')
      const payload = jwt_decode(tokenInfo)
      const userId = payload.id
      console.log("" + userId)
      this.setState({id: userId+""})
      console.log(""+this.state.id)
      console.log("finished making tokin")
    }
    catch(error){
      console.log("can not decode token")
    }
  }
  
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      await this.settingUserId()
      console.log("getting user")
      console.log("" + this.state.id)
      const result = await axios.get(`http://localhost:3001/api/user/${this.state.id}`);  
      console.log("got user")
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
      <div ClassName='button' Style="color:green;text-align: left;">
      <button ><a href="http://localhost:3000/DisplayCertificates">View Certificates</a></button>
      <button><a href="http://localhost:3000/UpdateUser">Update Profile</a></button>
      <button><a href="http://localhost:3000/UserViewAllAvailableTasks">Apply Task</a></button>
      <button><a href="http://localhost:3000/UserViewAllCertificates">Apply Certificate</a></button>
      <button><a href="http://localhost:3000/UpdateUser">View Consultancy</a></button>
      <button><a href="http://localhost:3000/">Logout</a></button>
      <br />
      <div Style="text-align: justify;">
      <h2 Style="color:red;box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);">INFORMATION</h2>
      <span Style='Color:black;font-weight: bold;'>name:</span>{name ? " " +name: "not provided"}
      <br />
      <span Style='Color:black;font-weight: bold;'>age:</span>{age ? "  " +age: "not provided"}
      <br />
      <span Style='Color:black;font-weight: bold;'>email:</span>{email ? "  " +email: "not provided"}<br />
      <span Style='Color:black;font-weight: bold;'>github:</span>{githubPortofolio ? "  " +show: "not provided"} <br />
      <span Style='Color:black;font-weight: bold;'>number:</span>{number ? "  " +number: "not provided"}<br />
      <span Style='Color:black;font-weight: bold;'>CV:</span>{updatedCV ? "  " +show2: "not provided"}
      </div> 
      </div>
      );
    }
  }
  
  export default UserProfile;
  
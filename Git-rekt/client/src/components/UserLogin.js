import React, { Component } from 'react';
import logo from './LirtenHub.PNG';
import axios from "axios";
import './button.css'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import * as jwt_decode from "jwt-decode";

import setAuthToken  from '../helpers/setAuthToken'
import UserProfile from './UserProfile'


class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      loggingIn: false
    }
	}

  isNonEmpty = () => {
    const em = document.getElementById("inputEmail").value;
    const pw = document.getElementById("password").value;
    if (
      em === "" ||
      pw === ""
    )
      return alert("ERROR: complete your fields");
  };
  getUser = async (email) => {
    this.isNonEmpty();
    
      return await axios.get(`http://localhost:3001/api/user/searchMail/${email}`)
  }

  handleLogin = async (email, password) => {
    const userData = {
      "email": email,
      "password": password
    }
    console.log("handling login")
    try{
      this.login(userData)
      console.log("handled login")
    }
    catch(error){
        console.log("can not sign in")
    }
  }

  login = async (userData) => {
    console.log("attempting")
    await axios.post('http://localhost:3001/api/user/login', userData)
    .then( res => {
      const { token } = res.data
      localStorage.setItem('jwtTokenUser', token)
      setAuthToken(token)
  
    })
    .catch(err => console.log(err))
    const tokenInfo = localStorage.getItem('jwtTokenUser')
    console.log(tokenInfo + "")
    try{
      const payload = jwt_decode(tokenInfo)
      const userId = payload.id
      this.setState({id: userId, loggingIn:true})
      console.log("finished making tokin")
    }
    catch(error){
      console.log("can not decode token")
    }
  };

  render() {
    if(this.state.loggingIn){
      console.log("rerouting")
      return(
        <Redirect to='./UserProfile' />
      )     
    }
    return (
       <div  Style="color:red;box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);">
            <img src={logo} Style="width: 20%;text-align: left;" alt="logo"/>
            <pre>
            Email:
            <input type="text" id="inputEmail" /><br/>
            </pre>
            Password:
            <input type="text" id="password" /><br/>
          <button onClick = 
          {(e)=> {
              e.preventDefault(); 
              this.handleLogin(document.getElementById("inputEmail").value, document.getElementById("password").value);
            }
          } 
          >login </button>
          <button><a href="http://localhost:3000/registerPage">register</a></button>
       </div>
    );
  }
}

export default UserLogin;

import React, { Component } from 'react';
import logo from './LirtenHub.PNG';
import axios from "axios";
import './button.css'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import * as jwt_decode from "jwt-decode";

import setAuthToken  from '../helpers/setAuthToken'
import UserProfile from './UserProfile'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      loggingIn: false
    }
	}

  render() {
    return (
       <div  Style="color:red;box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);">
            <img src={logo} Style="width: 20%;text-align: left;" alt="logo"/><br />
            <button ><a href="http://localhost:3000/UserLogin">User Login</a></button>
            <button><a href="http://localhost:3000/PartnerLogin">Partner Login</a></button>
            <button><a href="http://localhost:3000/ConsultancyProfile">Consultancy Login</a></button>
            <button><a href="http://localhost:3000/">Admin Login</a></button>
       </div>
    );
  }
}

export default Login;
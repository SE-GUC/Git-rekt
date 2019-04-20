import React, { Component } from 'react';
import logo from './LirtenHub.PNG';


class Login extends Component {

  render() {
    return (
       <div className="login">
       <form className="loginForm">
          <label>
            Username:
            <input type="text" name="username" />
          </label>

          <label>
            Password:
            <input type="text" name="password" />
          </label>

          <button onClick = {(e)=> { e.preventDefault(); console.log("No")}} >login </button>
          <button><a href="http://localhost:3000/register">register</a></button>
          </form>

          <header className="login-header">
            <img src={logo} className="logo" alt="logo"/>
          </header>
       </div>
    );
  }
}

export default Login;

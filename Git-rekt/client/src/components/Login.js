import React, { Component } from 'react';
import logo from './LirtenHub.PNG';
import axios from "axios";
import './button.css'


class Login extends Component {
  isNonEmpty = () => {
    const id = document.getElementById("inputID").value;
    const pw = document.getElementById("password").value;
    if (
      id === "" ||
      pw === ""
    )
      return alert("ERROR: complete your fields");
  };
  getUser = async (id) => {
    this.isNonEmpty();
    
      return await axios.get(`http://localhost:3001/api/user/${id}`)
  }

  handleLogin = async (id, password) => {
   
    const userOnDB = await this.getUser(id); 
    console.log(userOnDB.data);
    if(password === userOnDB.data.password){
      alert("logged in");
    }else alert("wrong password");
  }

  render() {
    return (
       <div  Style="color:red;box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);">
            <img src={logo} Style="width: 20%;text-align: left;" alt="logo"/>
            <pre>
            ID      :
            <input type="text" id="inputID" /><br/>
            </pre>
            Password:
            <input type="text" id="password" /><br/>
          <button onClick = 
          {(e)=> {
              e.preventDefault(); 
              this.handleLogin(document.getElementById("inputID").value, document.getElementById("password").value);
            }
          } 
          >login </button>
          <button><a href="http://localhost:3000/registerPage">register</a></button>
       </div>
    );
  }
}

export default Login;

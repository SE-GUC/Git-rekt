import React, { Component } from "react";
import "./RegisterScreen.css";
import axios from "axios";

class RegistrationPage extends Component {
  isNonEmpty = () => {
    const name = document.getElementById("inputFirstName").value;
    const name2 = document.getElementById("inputMiddleName").value;
    const name3 = document.getElementById("inputLastName").value;
    const age = document.getElementById("inputAge").value;
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const githubPortofolio = document.getElementById("inputPortofolio").value;
    const contactInfo = document.getElementById("inputContactInfo").value;
    if (
      name === "" ||
      name2 === "" ||
      name3 === "" ||
      age === "" ||
      email === "" ||
      password === "" ||
      githubPortofolio === "" ||
      contactInfo === ""
    )
      return alert("ERROR: complete your fields");
  };
  handleRegister = async() => {
    //this.isNonEmpty();
    await axios.post("http://localhost:3001/api/user/", {
      name: document.getElementById("inputFirstName").value ,
      age: parseInt(document.getElementById("inputAge").value,10),
      email: document.getElementById("inputEmail").value,
      password: document.getElementById("inputPassword").value,
      githubPortofolio: [document.getElementById("inputPortofolio").value],
      contactInfo: parseInt(document.getElementById("inputContactInfo").value,10)
      
    }).catch(err => console.error(err));
    return alert("Registration complete");
  };

  render() {
    return (
      <div className = "RegisterScreen">
        <h1 className="hder">Register Your Information</h1>
        <input
          type="text"
          id="inputEmail"
          placeholder="EX:myEmail@domain.com "
          autoComplete="off"
        />
        <br />
        <input
          type="password"
          id="inputPassword"
          placeholder="Password"
          autoComplete="off"
        />
        <br />
        <input
          type="text"
          id="inputFirstName"
          placeholder="Name"
          autoComplete="off"
        />
        <br />
        
        <input
          type="text"
          id="inputAge"
          placeholder="Your Age"
          autoComplete="off"
        />
        <br />
        <input
          type="text"
          id="inputContactInfo"
          placeholder="Preferrable Contact Information"
          autoComplete="off"
        />
        <br />
        <input
          type="text"
          id="inputPortofolio"
          placeholder="Portofolio(github) Link"
          autoComplete="off"
        />
        <br />
        <br />
        <button
          onClick={this.handleRegister}
          type="submit"
          id="registerButton"
          Style="border-radius:15px;"
        >
          Register
        </button>
        <label
          id="registerLabel"
          Style="color:red;font-size:12px;display:none;"
        >
          Could not Register your information
        </label>
      </div>
    );
  }
}

export default RegistrationPage;
import React, { Component } from "react";
import "./RegisterScreen.css";
import axios from "axios";

class RegistrationPartnerPage extends Component {
  isNonEmpty = () => {
    const name = document.getElementById("inputFirstName").value;
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const contact_info = document.getElementById("inputcontact_info").value;
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      contact_info === ""
    )
      return alert("ERROR: complete your fields");
  };
  handleRegister = async() => {
    //this.isNonEmpty();
    await axios.post("http://localhost:3001/api/partner/", {
      name: document.getElementById("inputFirstName").value ,
      email: document.getElementById("inputEmail").value,
      password: document.getElementById("inputPassword").value,
      contact_info: document.getElementById("inputcontact_info").value
      
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
          id="inputcontact_info"
          placeholder="Preferrable Contact Information"
          autoComplete="off"
        />
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

export default RegistrationPartnerPage;
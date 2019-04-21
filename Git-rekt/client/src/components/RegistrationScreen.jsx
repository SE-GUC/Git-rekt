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
  handleRegister = async () => {
    this.isNonEmpty();
    await axios.post("http://localhost:3001/api/user/", {
      name:
        document.getElementById("inputFirstName").value +
        " " +
        document.getElementById("inputMiddleName").value +
        " " +
        document.getElementById("inputLastName").value,
      age: document.getElementById("inputAge").value,
      email: document.getElementById("inputEmail").value,
      password: document.getElementById("inputPassword").value,
      githubPortofolio: document.getElementById("inputPortofolio").value,
      contactInfo: document.getElementById("inputContactInfo").value
    });
    alert("Registration complete");
  };

  render() {
    return (
      <div>
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
        <div>
          <input
            Style="float:left;width:15%;"
            type="text"
            id="inputFirstName"
            placeholder="First Name"
            autoComplete="off"
          />
          <input
            Style="float:left;width:20%;"
            type="text"
            id="inputMiddleName"
            placeholder="Middle Name"
            autoComplete="off"
          />
          <input
            Style="float:left;width:15%;"
            type="text"
            id="inputLastName"
            placeholder="Last Name"
            autoComplete="off"
          />
        </div>
        <br />
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

import React, { Component } from "react";
//import "./App.css";
import axios from "axios";
import logo from "./icon.png"; // Tell Webpack this JS file uses this image

class Register extends Component {
  //setting the states
  constructor(props) {
    super(props);
    this.state = {
      //id: 0,
      //message: null,
      //intervalIsSet: false,
      name: null,
      age: 0,
      email: null,
      password: null,
      githubPortofolio: [],
      contactInfo: 0,
      updatedCV: [],
      isLoading: false,
      error: null
    };
    //  this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //               axios.post("http://localhost:3001/api/user", {
  //                 name: this.state.name,
  //                 age: this.state.age,
  //                 email: this.state.email,
  //                 password: this.state.password,
  //                 githubPortofolio: [this.state.githubPortofolio],
  //                 contactInfo: this.state.contactInfo,
  //                 updatedCV: [this.state.updatedCV]
  //               })
  //              }
  // getDataFromDb = () => {
  //   fetch("http://localhost:3001/api/user")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }));
  // };

  //  componentDidMount() {
  //    this.getDataFromDb();
  //    if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 1000);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // // }
  // componentDidMount() {
  //   fetch('http://localhost:3001/api/user')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }
  // //so that processes don't live forever
  // componentWillUnmount() {
  //   if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({ intervalIsSet: null });
  //   }
  // }

  // putDataToDB = (
  //   name,
  //   age,
  //   email,
  //   password,
  //   githubPortofolio,
  //   contactInfo,
  //   updatedCV
  // ) => {
  //   //let currentIds = this.state.data.map(data => data.id);
  //   //let idToBeAdded = 0;
  //   //while (currentIds.includes(idToBeAdded)) {
  //   //++idToBeAdded;
  //   //}

  //   axios.post("http://localhost:3001/api/user", {
  //     // id: idToBeAdded,
  //     name: name,
  //     age: age,
  //     email: email,
  //     password: password,
  //     githubPortofolio: [githubPortofolio],
  //     contactInfo: contactInfo,
  //     updatedCV: [updatedCV]
  //   });
  // };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      // const result = await axios.get("http://localhost:3001/api/user/");
      // this.setState({
      //   certs: result.data.data[0].name,
      //   isLoading: false

      await axios.post("http://localhost:3001/api/user/", {
        name: this.setState.name,
        age: this.setState.age,
        email: this.setState.email,
        password: this.setState.password,
        githubPortofolio: [this.setState.githubPortofolio],
        contactInfo: this.setState.contactInfo,
        updatedCV: [this.setState.updatedCV]
      });

      this.setState({
        crets: null,
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
    return (
      <div className="App">
        {/* <img src={logo} alt="Logo" /> */}
        <h1>
          <background>
            {" "}
            <img src={logo} alt="Logo" />{" "}
          </background>
        </h1>
        <h2>Register</h2>
        <form>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={e => this.setState({ name: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              Age:
              <input
                type="Number"
                name="Age"
                onChange={e => this.setState({ age: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="text"
                name="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="text"
                name="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              GitHub Portofolio:
              <input
                type="text"
                name="githubPortofolio"
                onChange={e =>
                  this.setState({ githubPortofolio: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              Phone Number:
              <input
                type="Number"
                name="contactInfo"
                onChange={e => this.setState({ contactInfo: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              CV:
              <input
                type="text"
                name="updatedCV"
                onChange={e => this.setState({ updatedCV: e.target.value })}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              onClick={
                // axios.post("http://localhost:3001/api/user", {
                //   // id: idToBeAdded,
                //   name: this.state.name,
                //   age: this.state.age,
                //   email: this.state.email,
                //   password: this.state.password,
                //   githubPortofolio: [this.state.githubPortofolio],
                //   contactInfo: this.state.contactInfo,
                //   updatedCV: [this.state.updatedCV]
                // })
                //             this.handleClick()
                //            axios.post("http://localhost:3001/api/user/", {
                //   name: this.setState.name,
                //   age: this.setState.age,
                //   email: this.setState.email,
                //   password: this.setState.password,
                //   githubPortofolio: [this.setState.githubPortofolio],
                //   contactInfo: this.setState.contactInfo,
                //   updatedCV: [this.setState.updatedCV]
                // })
                this.componentDidMount
                //() =>
                // this.putDataToDB(
                //   this.state.name,
                //   this.state.age,
                //   this.state.email,
                //   this.state.password,
                //   this.state.githubPortofolio,
                //   this.state.contactInfo,
                //   this.state.updatedCV
                // )
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;

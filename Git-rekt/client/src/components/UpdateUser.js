import React, { Component } from "react";
import axios from "axios";
//import logo from "./icon.png"; // Tell Webpack this JS file uses this image

class UpdateUser extends Component {
    render() {
        return (
            <div>
                <h2>Update Profile</h2>
                <form>
                    <div>
                        <label>
                            Name:
              <input
                                type="text"
                                name="name"
                                id="n"
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
                                id="a"
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
                                id="e"
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
                                id="p"
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
                                id="g"
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
                                id="c"
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
                                id="u"
                                onChange={e => this.setState({ updatedCV: e.target.value })}
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Update"
                            onClick={(e) => {
                                e.preventDefault();
                                axios.put("http://localhost:3001/api/user/5cb36c450c3dd739b8e4302c",
                                    {
                                        name: document.getElementById('n').value,
                                        age: document.getElementById('a').value,
                                        email: document.getElementById('e').value,
                                        password: document.getElementById('p').value,
                                        githubPortofolio: document.getElementById('g').value,
                                        contactInfo: document.getElementById('c').value,
                                        updatedCV: document.getElementById('u').value,
                                    })
                            }
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default UpdateUser;
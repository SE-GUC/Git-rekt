import React, { Component } from "react";
import axios from "axios";
//import logo from "./icon.png"; // Tell Webpack this JS file uses this image
import * as jwt_decode from "jwt-decode";

class UpdatePartner extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
          isLoading: false,
          error: null,
        }
    }

    async settingPartnerId() { 
        try{
          const tokenInfo = localStorage.getItem('jwtTokenPartner')
          const payload = jwt_decode(tokenInfo)
          const partnerId = payload.id
          console.log("" + partnerId)
          this.setState({id: partnerId+""})
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
          await this.settingPartnerId()
        }
        catch (error) {
        this.setState({
          error,
          isLoading: false
        });
      }
    }


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
                            Contact Info:
              <input
                                type="text"
                                name="ContactInfo"
                                id="c"
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Update"
                            onClick={(e) => {
                                e.preventDefault();
                                axios.put(`http://localhost:3001/api/partner/${this.state.id}`,
                                    {
                                        name: document.getElementById('n').value,
                                        email: document.getElementById('e').value,
                                        password: document.getElementById('p').value,
                                        contact_info: document.getElementById('c').value
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
export default UpdatePartner;
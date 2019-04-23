import React, { Component } from "react";
import axios from "axios";
import * as jwt_decode from "jwt-decode";

class SubmitTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
          posted_on: null,
          description: null,
          status: null,
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
          this.setState({id: partnerId+"", posted_on: Date.now, status: "Pending_Admin_Approval", })
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
          this.setState({isLoading: false})
        }
        catch (error) {
        this.setState({
          error,
          isLoading: false
        });
      }
    }


    render() {
        if(this.state.isLoading){
            return <h3>Loading ...</h3>;
        }
        return (
            <div>
                <h2>Submit Task</h2>
                <form>
                    <div>
                        <label>
                            Description:
              <input
                                type="text"
                                name="name"
                                id="n"
                                onChange={e => this.setState({ description: e.target.value })}
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            onClick={(e) => {
                                e.preventDefault();
                                axios.post(`http://localhost:3001/api/partner/submitTask/${this.state.id}`,
                                    {
                                        posted_on: this.state.posted_on,
                                        posted_by: this.state.id,
                                        description: this.state.description,
                                        status: this.state.status
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
export default SubmitTask;
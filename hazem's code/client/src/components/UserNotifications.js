import React from 'react';
import axios from 'axios';


export class UserNotifications extends React.Component {
    state = {
        requiredUser: {},
        fetched : false
    }

    componentDidMount(id){
        axios.get(`http://localhost:4000/api/user/${id}`)
        .then(res => {this.setState({requiredUser:res.data.data, fetched : true});})
        .catch(err => {console.log(err); this.setState({fetched : false})})
        }

    render() {
        if(this.state.fetched){
            const User = this.state.requiredUser
            return (
                <div>
                <h3>{User.notifications}</h3>
                </div>
            )
        }else{
            return <h1>Couldn't get data due to an error</h1>
        }
    
  }
}

export default UserNotifications

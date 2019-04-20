import React from 'react'
import axios from 'axios'


export default class TaskAttribute extends React.Component {  
  state = {
    requiredUser : {
      name: '',
      age: 0,
      email: '',
      password: '',
      githubportofolio: [],
      contactInfo: 0,
      updatedCV: [],
      registeredOn: 0,
      signed: false,
      rating: 0,
      notifications: [],
      certifications: []
    }
  }
  
  componentDidMount(){    
    axios.get('http://localhost:5000/api/user/5ca131d7fdb0a12b84496d9b')
    .then(res => this.setState({ requiredUser : res.data}))
    .catch(err => console.log(err))
   }

    render() {
    const User = this.state.requiredUser;
    console.log(User)
    const UserNot = User.notifications.map((notif) => (
        <h3>{notif}</h3>
    ))
    
    return(
        <div>
        <h1>Your Notifications:</h1>
        {UserNot}
        </div>
    );
      
      
    }
  }




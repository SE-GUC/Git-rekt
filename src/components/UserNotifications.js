import React from 'react';
import axios from 'axios';
const User = props => (
    <tr>
        <td>{props.requiredUser.name}</td>
        <td>{props.requiredUser.age}</td>
        <td>{props.requiredUser.email}</td>
        <td>{props.requiredUser.password}</td>
        <td>{props.requiredUser.githubPortofolio}</td>
        <td>{props.requiredUser.contactInfo}</td>
        <td>{props.requiredUser.updatedCV}</td>
        <td>{props.requiredUser.registeredOn}</td>
        <td>{props.requiredUser.signed}</td>
        <td>{props.requiredUser.rating}</td>
        <td>{props.requiredUser.notifications}</td>
        <td>{props.requiredUser.certifications}</td>
    </tr>
  )

export class UserNotifications extends React.Component {
    state = {
        requiredUser: []
    }

    componentDidMount(id){
        axios.get("http://localhost:3001/api/user/5ca131d7fdb0a12b84496d9b")
        .then(res => {this.setState({requiredUser:res.data});})
        .catch(err => {console.log(err)})
        }

    render() {
        console.log(this.state.requiredUser)
    return (
        <div>
        <h3>{User.name}</h3>
        <h3>{User.age}</h3>
        <h3>{User.email}</h3>
        <h3>{User.password}</h3>
        <h3>{User.githubPortofolio}</h3>
        <h3>{User.contactInfo}</h3>
        <h3>{User.updatedCV}</h3>
        <h3>{User.registeredOn}</h3>
        <h3>{User.signed}</h3>
        <h3>{User.rating}</h3>
        <h3>{User.notifications}</h3>
        <h3>{User.certifications}</h3>
        </div>
        
      
    )
  }
}

export default UserNotifications
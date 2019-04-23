import React, { Component } from 'react';



import Axios from 'axios';

class DeleteNotifications extends Component {
  state = {
    Admin: {
      name:'',
      email: '',
      uploaded_tasks:[],
      notifications:[],
      certificatonApplication:[]
    }
  }
  async componentDidMount(){
     const getAdmin = await Axios.get('http://localhost:5000/api/admin/5cb370ce1c9d440000650e53')
     this.setState({Admin:getAdmin.data})
     console.log('Admin updated successfully')
     
    }

  deleteNotification = async (notificationBody) => {
    await Axios.delete(`http://localhost:5000/api/notification/DeleteNotification/${this.state.Admin.name}/${notificationBody}`)
    .then(console.log('Notification deleted successfully'))
    .catch(err => console.log(err))
    const arrayNotifications = this.state.Admin.notifications;
    const newNotifications = [];
    for( var j = 0; j < arrayNotifications.length; j++){ 
        if ( arrayNotifications[j] !== notificationBody) {
          newNotifications.push(arrayNotifications[j])
        }
     }
     console.log(newNotifications)
     const newAdmin = {
         name: this.state.Admin.name,
         email: this.state.Admin.email,
         uploaded_tasks: this.state.Admin.uploaded_tasks,
         notifications: newNotifications,
         certificatonApplication: this.state.Admin.certificatonApplication
     }
    await Axios.put(`http://localhost:5000/api/admin/UpdateAdmin/${this.state.Admin.email}`,newAdmin) //check el Update CRUD 3andak 3amla ezay w zabat el inputs
     console.log('Admin updated successfully')
     
  }
    
 


  render() {
  
    const AdminNot = this.state.Admin.notifications.map((notif)=>(
      <h3>{notif} <button onClick = {this.deleteNotification.bind(this,notif)}> delete</button>
      </h3>
      ))
    return (
        <div>
        <h1>Your Notifications: </h1>
      {AdminNot}
    </div>
    );
  }
}



export default DeleteNotifications;
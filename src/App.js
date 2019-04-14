import React, { Component } from 'react';
import './App.css';
import Admin from './Admin';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header';
import UpdateAdmin from './components/pages/UpdateAdmin';
import Notifiaction from './components/pages/NotificationList';
import Certificate from './components/pages/CertificationList';
import TaskList from './components/pages/TaskList';
import Getcontact from './Getcontact'

import Axios from 'axios';

class App extends Component {
  state = {
    Admin: {
      name:'',
      email: '',
      uploaded_tasks:[],
      notifications:[],
      certificatonApplication:[]
    },
    ncotifications:[],
    Consultancy: {
      name:'',
      phonenumber:'',
      email:''

    }
 
  }
  componentDidMount(){
     Axios.get('http://localhost:3001/api/admin/5cb370ce1c9d440000650e53').then(res => this.setState({Admin:res.data})).catch(err => console.log(err))
     
    }
  
addNotification(){
  Axios.get('http://localhost:3001/api/consultancy/5cb371701c9d440000650e54').then(res => this.setState({Consultancy:res.data})).catch(err => console.log(err))
     
  var newNotifiecation=[]
  for(var index=0; index<this.state.Admin.notifications;index++){
    newNotifiecation.push(this.state.Admin.notifications[index])
  }
  console.log(this.state.Admin.uploaded_tasks)
  newNotifiecation.push(this.state.Consultancy.name)
  // newNotifiecation.push(this.state.Consultancy.number)
  // newNotifiecation.push(this.state.Consultancy.email)
  this.setState({notifications :newNotifiecation})
  console.log(this.state.notifications)
}

  deleteNotificattion(notificationBody){
for(var index=0; index<this.state.Admin.notifications.length;index++){
  const adminData={
    
      notificationConten: notificationBody,
      adminId: '5cb370ce1c9d440000650e53'
    
  }
  console.log(adminData)

  Axios.post('http://localhost:3001/api/notification/notification/' ,adminData).then(res=>{
    this.setState({Admin:res.data})
    console.log(res.data)
  })
    
 
}
}

  render() {
  
    const AdminNot = this.state.Admin.notifications.map((notif)=>(
      <h3>{notif} <button onClick = {this.deleteNotificattion.bind(this,notif)}> delete</button>
      <button onClick = {this.addNotification.bind(this,notif)}> add</button>
      </h3>
      ))
      // const AdminCertif = this.state.Admin.certificatonApplication.map((certif)=>(
      //   <h3>{certif}</h3>
      // ))
      const AdminTask= this.state.Admin.uploaded_tasks.map((task)=>(
        <h3>{task}</h3>
      ))
     
      
    return (
      <Router>
      <div className="App">
          <Header />
          <Route exact path="/" render={props=>(
            <React.Fragment>
               <Admin Admin= {this.state.Admin} />
            </React.Fragment>
          )}/>
          <Route exact path="/Update" render ={props=>
            <React.Fragment>
              <UpdateAdmin UpAdmin={this.state.UpAdmin} Admin= {this.state.Admin}/>

            </React.Fragment>
          }/>
          <Route exact path="/Notifications" render ={props=>
            <React.Fragment>
              <Notifiaction delNotif ={this.delNotif} AdminNot={AdminNot}/>  
            </React.Fragment>
          }/>
          <Route exact path="/Tasks" render ={props=>
            <React.Fragment>
               <TaskList AdminTask={AdminTask}/>
            </React.Fragment>
          }/>
          {/* <Route exact path="/Certifications" render ={props=>
            <React.Fragment>
              <Certificate AdminCertif={AdminCertif}/>
            </React.Fragment>
          }/> */}
        <Route exact path="/Getcontact" render ={props=>
            <React.Fragment>
              <Getcontact/>
            </React.Fragment>
          }/>
          
      </div>
      </Router>
    );
  }
}
const btnStyle={
  background: '#ff0000',
  color:'#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius:'50%',
  cursor: 'pointer',
  float:'right'
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Admin from './Admin';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header';
import setAuthToken from './components/helpers/setAuthToken'
import UpdateAdmin from './components/pages/UpdateAdmin';
import Notifiaction from './components/pages/NotificationList';
import Certificate from './components/pages/CertificationList';
import TaskList from './components/pages/TaskList';
import Axios from 'axios';
import NotificationList from './components/pages/NotificationList';
import ApplicantList from './components/pages/ApplicantList';
//import TaskAttribute from './components/TaskAttribute';
import UserNotifications from './components/UserNotifications';
import ApprovingTasks from './components/ApprovingTasks';
//import DeleteNotifications from './components/DeleteNotifications';

if(localStorage.jwtToken){
  setAuthToken(localStorage)
}

class App extends Component {
  state = {
    // Admin:{
    //   name:'',
    //   email:'',
    //   notifications:[],
    //   uploaded_tasks:[],
    //   certificationApplication:[],
    //   id:''
    // }
    Admin: {
      name:'Tony Stark',
      email: 'EarthsStrongestAvenger@gmail.com',
      uploaded_tasks:[{
        approved_by:"pepper",
        posted_by:"rhody",
        description:"war machine upgrade",
        posted_on:"1/1/2018",
        Estimated_effort:"so so",
        Time_taken:"lengthy",
        Level_of_commitment:"very",
        Experience_level:"high",
        Monetary_compensation:"65656",
        Owner:"rhodey",
        Assigned_Consultancy:"banner",
        reviewed:"peter",
        Required_set_of_skills:["mechanical engineering","super smart"],
        task_list:["disassemble the suit","upgrade it","resassemble"],
        applicant_list:["peter","shuri","vision"],
        assigned_users:["banner"],
        status:"pending",
        id:1
      },{
        approved_by:"pepper",
        posted_by:"peter",
        description:"iron spider upgrade",
        posted_on:"1/1/2018",
        Estimated_effort:"so so",
        Time_taken:"lengthy",
        Level_of_commitment:"very",
        Experience_level:"high",
        Monetary_compensation:"65656",
        Owner:"peter",
        Assigned_Consultancy:"ned",
        reviewed:"banner",
        Required_set_of_skills:["mechanical engineering","super smart"],
        task_list:["disassemble the suit","upgrade it","resassemble"],
        applicant_list:["peter","shuri","miles","gwen"],
        assigned_users:["banner"],
        status:"pending",
        id:2
      },
    ],
      notifications:[{
        sent_to:"tony",
        notifies:"hulk clogged the toilet",
        sent_from:"thor",
        time:"5646531",
        id:1
      },
      { 
        sent_to:"tony",
        notifies:"vision is down witht the trojan",
        sent_from:"wanda",
        time:"5646531",
        id:2
      },{
        sent_to:"tony",
        notifies:"black panther coughed up a furball",
        sent_from:"shuri",
        time:"5646531",
        id:3
      },{
        sent_to:"tony",
        notifies:"bucky is stuck to the fridge as a magnet",
        sent_from:"cap",
        time:"5646531",
        id:4
      }],
      certificationApplication:[{
        certificate:"avengers certification",
        applicant:"peter",
        status:"pending approval",
        id:1
      },
      {
        certificate:"avengers certification",
        applicant:"shuri",
        status:"pending approval",
        id:2
      }],
      id:1,
    }
  }
  delNotif = (id) =>{
    this.setState((state) => { 
      let curentState = state.Admin
      let newState = curentState
      newState.notifications = curentState.notifications.filter( notif => notif.id !== id)
      return { Admin:newState }
    })
  }
  UpAdminName = (name)=>{
    this.setState((state) => { 
      let curentState = state.Admin
      let newState = curentState
      newState.name = name
      return { Admin:newState }
    })
  }
  // UpAdminName = (name)=>{
  //   this.setState((state) => { 
  //     Axios.pu('http://localhost:3000/api/admin/5cb6f285b6c0037838a32d95').then(res => this.setState({Admin:res.data})).catch(err => console.log(err))
  //     //return { Admin:newState }
  //   })
  // }

  // UpAdminEmail = (email)=>{
  //   this.setState((state) => { 
  //     let curentState = state.Admin
  //     let newState = curentState
  //     newState.email = email
  //     return { Admin:newState }
  //   })
  // }
  UpAdminEmail = (email)=>{
    this.setState((state) => { 
      let curentState = state.Admin
      let newState = curentState
      newState.email = email
      return { Admin:newState }
    })
  }
  disapprove = (id) =>{
    this.setState((state) => { 
      let curentState = state.Admin
      let newState = curentState
      newState.certificationApplication = curentState.certificationApplication.filter( notif => notif.id !== id)
      let status = newState.certificationApplication
      status.status = "rejected"
      return { Admin:newState }
    })
}
  approve = (id) =>{
    this.setState((state) => { 
        let curentState = state.Admin
        let newState = curentState
        let x = curentState.certificationApplication.filter( notif => notif.id === id)
        let status = x.map((element)=> element.status ="approved")
        status.status = "approved"
        return { Admin:newState }
    })
  }
  fakes = (id,name) =>{
    console.log('---------------'+name+'+++++++++++++++'+id)
    this.setState((state) => { 
      let curentState = state.Admin
      let newState = curentState
      newState.uploaded_tasks = curentState.uploaded_tasks.map( notif => notif)
      return { Admin:newState }
    })
    // this.setState({Admin:[...this.state.Admin.task_list.applicant_list.filter(certif => certif.id !== id)]})  
  }
  hire = (name) =>{
    console.log(name)
    // const user = [...this.state.Admin.task_list.applicant_list.filter(certif => certif.id === id)]
    // this.setState({Admin:[...this.state.Admin.task_list.applicant_list.filter(certif => certif.id !== id)]}) 
    // this.setState({Admin:[...this.state.Admin.task_list.assigned_users.push(user)]})
  }
  getId = (id) =>{
    console.log(id)
    
  }
  // componentWillMount(){
  //   Axios.get('http://localhost:3000/api/admin/5cb6f285b6c0037838a32d95').then(res => this.setState({Admin:res.data})).catch(err => console.log(err))
  //   }
  render() {
    return (
       <Router>
       <div className="App">
            <Header />
          <Route exact path="/" render={props=>(
             <React.Fragment>
              <Admin Admin= {this.state.Admin} />
             </React.Fragment>
           )}/>
          <Route exact path = '/AdminApprovesTask' component = {ApprovingTasks}/>
          <Route exact path="/Update" render ={props=> 
              <React.Fragment>
               <UpdateAdmin UpAdminName={this.UpAdminName} UpAdminEmail={this.UpAdminEmail} Admin= {this.state.Admin}/>
             </React.Fragment>
           }/> 
           <Route exact path="/Notifications" render ={props=>
             <React.Fragment>
                <NotificationList not={this.state.Admin.notifications} delNotif={this.delNotif}/>
             </React.Fragment> 
           }/> 
           <Route exact path="/ApplicantList" render ={props=>
             <React.Fragment>
                <ApplicantList tasks={this.state.Admin.uploaded_tasks}  fakes={this.fakes} hire={this.hire}/>
             </React.Fragment> 
           }/> 
           <Route exact path="/Tasks" render ={props=>
            <React.Fragment>
               <TaskList task={this.state.Admin.uploaded_tasks} getId={this.getId}/>
            </React.Fragment>
          }/>
          <Route exact path="/Certifications" render ={props=>
            <React.Fragment>
              <Certificate certif={this.state.Admin.certificationApplication} disapprove={this.disapprove} approve ={this.approve}/>
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
  padding: '3px 5px',
  borderRadius:'50%',
  cursor: 'pointer',
  float:'right',
}
const approveStyle={
  background: '#00ff00',
  color:'#fff',
  border: 'none',
  padding: '3px 5px',
  borderRadius:'50%',
  marginLeft:'10px',
  cursor: 'pointer',
  float:'right',
}

export default App;

import React from 'react'
import axios from 'axios'

export default class ApprovingTasks extends React.Component {
    state = {
        Admin: {
          name:'',
          email: '',
          password: '',
          notifications: [],
          uploaded_tasks: []
        },
        Task: {
          approved_by: '',
          description: '',
          posted_on: {},
          posted_by: '',
          Estimated_effort: '',
          Time_taken: '',
          Level_of_commitment: '',
          Experience_level: '',
          Monetary_compensation: 0,
          Owner: '',
          Assigned_Consultancy: '',
          reviewed: '',
          Required_set_of_skills: [],
          task_list: [],
          applicant_list: [],
          assigned_users: [],
          status: ''
        },
        Partner:{
            name: '',
            password: '',
            email: '',
            contact_info: '',
            registerd_on: null,
            com_reg_num: 0,
            info: '',
            signed: false,
            rating: 0,
            submitted_tasks: [],
            notifications: [],
            associates: [],
            board_members: [],
            events: [],
            feedback: ''
        },
        Notification:{
          sent_to: '',
          notifies: '',
          sent_from: '',
          time: 0,
        },
        taskFlag : false,
        partnerFlag : false,
        notificationFlag : false
      }

      async componentDidMount(){
        const getAdmin = await axios.get('http://localhost:5000/api/admin/5cb223c01c9d440000a67427')
        this.setState({Admin:getAdmin.data})
        console.log('got the admin')
       }

      approveTask = async (taskName) => {
        const uploadedTasks = this.state.Admin.uploaded_tasks;
        const getTask = await axios.get(`http://localhost:5000/api/task/GetTaskByDescription/${taskName}`)
        this.setState({Task:getTask.data})
        console.log('got the task successfully')
        for(var i = 0 ; i < uploadedTasks.length ; i++){
          console.log(uploadedTasks[i])
          if(uploadedTasks[i] === taskName && this.state.Task[0].status === "PENDING"){
            
            const partnerID = this.state.Task[0].posted_by;
            console.log(partnerID)
             const getPartner = await axios.get(`http://localhost:5000/api/partner/${partnerID}`)
             this.setState({Partner:getPartner.data})
             console.log('got the partner successfully')
             //.catch(err => console.log(err),this.setState({partnerFlag:false}))
            const data={
              sent_to : this.state.Admin.name,
              notifies : this.state.Partner.contact_info,
              sent_from : this.state.Partner.name,
              time : 5
            }
            
             const createNotification = await axios.post('http://localhost:5000/api/notification/',data)
              this.setState({Notification:createNotification.data})
              console.log('posted the notification successfully')
             //.catch(err => console.log(err),this.setState({notificationFlag:false}))
            
            this.state.Admin.notifications.push(data.partnerInfo)
            for( var j = 0; j < uploadedTasks.length; i++){ 
                if ( uploadedTasks[j] === taskName) {
                  uploadedTasks.splice(j, 1); 
                  i--;
                }
             }
          }
            
            
           
        } 
        
       
      }
      disproveTask = async (taskName) => {
          const uploadedTasks = this.state.Admin.uploaded_tasks;
          for( var i = 0; i < uploadedTasks.length; i++){ 
            if ( uploadedTasks[i] === taskName) {
              uploadedTasks.splice(i, 1); 
              i--;
            }
         }
        }
    render() {
        const AdminTask= this.state.Admin.uploaded_tasks.map((task)=>(
            <h3>{task}<button style={approveStyle} onClick = {this.approveTask.bind(this,task)}>O</button><button style={btnStyle} onClick = {this.disproveTask.bind(this,task)}>X</button></h3>
          ))
    return (
      <div>
          <h1>Your Pending Tasks: </h1>
        {AdminTask}
      </div>
    )
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

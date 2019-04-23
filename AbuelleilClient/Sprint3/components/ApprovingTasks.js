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
          _id: {},
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
        }
      }

      async componentDidMount(){
        const getAdmin = await axios.get('http://localhost:5000/api/admin/5cb370ce1c9d440000650e53')
        this.setState({Admin:getAdmin.data})
        console.log('got the admin successfully')
       }

      approveTask = async (taskName) => {
        var uploadedTasks = this.state.Admin.uploaded_tasks;
        const getTask = await axios.get(`http://localhost:5000/api/task/GetTaskByDescription/${taskName}`)
        this.setState({Task:getTask.data})
        
        console.log('got the task successfully')
        for(var i = 0 ; i < uploadedTasks.length ; i++){
          if(uploadedTasks[i] === taskName && this.state.Task[0].status === "PENDING"){
            
            const partnerID = this.state.Task[0].posted_by;
             const getPartner = await axios.get(`http://localhost:5000/api/partner/${partnerID}`)
             this.setState({Partner:getPartner.data})
             console.log('got the partner successfully')
            const data={
              sent_to : this.state.Admin.name,
              notifies : this.state.Partner.contact_info,
              sent_from : this.state.Partner.name,
              time : 5
            }
            
             const createNotification = await axios.post('http://localhost:5000/api/notification/',data)
              this.setState({Notification:createNotification.data})
              console.log('posted the notification successfully')
            this.state.Admin.notifications.push(data.notifies)
            const newUploadedTasks = []
            for( var j = 0; j < uploadedTasks.length; j++){ 
                if ( uploadedTasks[j] !== taskName) {
                  newUploadedTasks.push(uploadedTasks[j])
                }
             }
             uploadedTasks = newUploadedTasks
             const newAdmin = {
               notifications: this.state.Admin.notifications,
               uploaded_tasks: uploadedTasks
             }
             console.log(newAdmin.uploaded_tasks)
            await axios.put(`http://localhost:5000/api/admin/updateAdmin/${this.state.Admin.email}`,newAdmin)
            console.log('Admin updated successfully')
            console.log(this.state.Task)
            const newTask = {
              approved_by: this.state.Admin.name,
              description: this.state.Task.description,
              posted_on: this.state.Task.posted_on,
              posted_by: this.state.Task.posted_by,
              Estimated_effort: this.state.Task.Estimated_effort,
              Time_taken: this.state.Task.Admin,
              Level_of_commitment: this.state.Task.Level_of_commitment,
              Experience_level: this.state.Task.Experience_level,
              Monetary_compensation: this.state.Task.Monetary_compensation,
              Owner: this.state.Task.Owner,
              Assigned_Consultancy: this.state.Task.Assigned_Consultancy,
              reviewed: this.state.Task.reviewed,
              Required_set_of_skills: this.state.Task.Required_set_of_skills,
              task_list: this.state.Task.task_list,
              applicant_list: this.state.Task.applicant_list,
              assigned_users: this.state.Task.assigned_users,
              status: 'APPROVED'
            }
            await axios.put(`http://localhost:5000/api/task/UpdateTaskByDescription/${taskName}`, newTask)
            .then(console.log('This task is now approved'))
          }
            
            
           
        } 
        
       
      }
      disproveTask = async (taskName) => {
        var uploadedTasks = this.state.Admin.uploaded_tasks
        const newUploadedTasks = []
        for( var j = 0; j < uploadedTasks.length; j++){ 
            if ( uploadedTasks[j] !== taskName) {
              newUploadedTasks.push(uploadedTasks[j])
            }
         }
         uploadedTasks = newUploadedTasks
         const newAdmin = {
           uploaded_tasks: uploadedTasks
         }
        await axios.put(`http://localhost:5000/api/admin/updateAdmin/${this.state.Admin.email}`,newAdmin)
        console.log('Admin updated successfully')
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
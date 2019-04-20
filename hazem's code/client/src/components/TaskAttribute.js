import React from 'react'
import axios from 'axios'


export default class TaskAttribute extends React.Component {  
  state = {
    requiredTask : {
      approved_by : '',
      description : '',
      posted_on : '',
      posted_by : '',
      Estimated_effort : '',
      Time_taken : '',
      Level_of_commitment : '',
      Experience_level : '',
      Monetary_compensation : 0,
      Owner : '',
      Assigned_Consultancy : '',
      reviewed : '',
      Required_set_of_skills : [],
      task_list : [],
      applicant_list : [],
      assigned_users : []
    }
  }
  
  componentDidMount(){    
    axios.get('http://localhost:5000/api/task/5ca13a509df21f1a6c4b35b5')
    .then(res => this.setState({ requiredTask : res.data}))
    .catch(err => console.log(err))
    
   }

    render() {
    const Task = this.state.requiredTask;
    console.log(Task);
    return(
      <div>
        <h3>Approved By: {Task.approved_by}</h3>
        <h3>Description: {Task.description}</h3>
        <h3>Posted On: {Task.posted_on}</h3>
        <h3>Posted By: {Task.posted_by}</h3>
        <h3>Estimated Effort: {Task.Estimated_effort}</h3>
        <h3>Time Taken: {Task.Time_taken}</h3>
        <h3>Level Of Commitment: {Task.Level_of_commitment}</h3>
        <h3>Experience Level: {Task.Experience_level}</h3>
        <h3>Monetary Compensation: {Task.Monetary_compensation}</h3>
        <h3>Task Owner: {Task.Owner}</h3>
        <h3>Assigned Consultancy: {Task.Assigned_Consultancy}</h3>
        <h3>Reviewed: {Task.reviewed.toString()}</h3>
        <h3>Required Set Of Skills: {Task.Required_set_of_skills}</h3>
        <h3>Task List: {Task.task_list}</h3>
        <h3>Applicant List: {Task.applicant_list}</h3>
        <h3>Assigned Users: {Task.assigned_users}</h3>
      </div>
    );
      
      
    }
  }




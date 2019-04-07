import React from 'react'
import axios from 'axios'

export default class TaskAttribute extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        requiredTask : {},
        fetched : false
    }
  }

  
  componentDidMount(id){       
    axios.get(`http://localhost:5000/api/task/${id}`)
    .then(res => {this.setState({requiredTask:res.data.data, fetched : true})})
    .catch(err => {console.log(err); this.setState({fetched : false})})
  }
  
    render() {
    if(this.state.fetched){
    const Task = this.state.requiredTask
    return (
      <div>
        <h3>{Task.approved_by}</h3>
        <h3>{Task.description}</h3>
        <h3>{Task.posted_on}</h3>
        <h3>{Task.posted_by}</h3>
        <h3>{Task.Estimated_effort}</h3>
        <h3>{Task.Time_taken}</h3>
        <h3>{Task.Level_of_commitment}</h3>
        <h3>{Task.Experience_level}</h3>
        <h3>{Task.Monetary_compensation}</h3>
        <h3>{Task.Owner}</h3>
        <h3>{Task.Assigned_Consultancy}</h3>
        <h3>{Task.reviewed}</h3>
        <h3>{Task.Required_set_of_skills}</h3>
        <h3>{Task.task_list}</h3>
        <h3>{Task.applicant_list}</h3>
        <h3>{Task.assigned_users}</h3>
      </div>
      );
    }else{
      return <h1>Couldn't get data due to an error</h1>
    }
  }
}



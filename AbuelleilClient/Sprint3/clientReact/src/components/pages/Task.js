import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import ApplicantList from './ApplicantList';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from 'prop-types';


class Task extends Component {

    // componentWillUpdate(){
    //   console.log(this.props.AdminNot)
    //   //Axios.get('http://localhost:3000/api/notification/'+this.props.AdminNot[0]).then(res => this.setState({notification:res.data.data})).catch(err => console.log(err))
    //   }
    // componentDidMount(){
    //   //console.log(this.props.AdminNot)

    //   Axios.get(`http://localhost:3000/api/notification/5cb232ec3182f02f04c61e38`).then(res => this.setState({notification:res.data.data})).catch(err =>console.log(err))
    // }
    
    
      getStyle = () =>{
        return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted'
        }
      }
  render() {    
      const {approved_by,
        posted_by,
        description,
        posted_on,
        Estimated_effort,
        Time_taken,
        Level_of_commitment,
        Experience_level,
        Monetary_compensation,
        Owner,
        Assigned_Consultancy,
        reviewed,
        Required_set_of_skills,
        task_list,
        applicant_list,
        assigned_users,
        status,
        id} =this.props.Tasks
        const skill = Required_set_of_skills.map((skill) =>skill+" | ")
        const list = task_list.map((skill) =>skill+" | ")
        const app = applicant_list.map((skill) =>skill+" | ")
        const assigned = assigned_users.map((skill) =>skill+" | ")

     return(
         <div style={this.getStyle()}>
            <p>
            posted by: {posted_by}<br></br>
            posted on: {posted_on}<br></br>
            description: {description}<br></br>
            Estimated_effort: {Estimated_effort}<br></br>
            Time_taken: {Time_taken}<br></br>
            Level_of_commitment: {Level_of_commitment}<br></br>
            Experience_level: {Experience_level}<br></br>
            Monetary_compensation: {Monetary_compensation}<br></br>
            Owner: {Owner}<br></br>
            Assigned_Consultancy: {Assigned_Consultancy}<br></br>
            reviewed: {reviewed}<br></br>
            Required_set_of_skills: {skill}<br></br>
            task_list: {list}<br></br>
            applicant_list: {app}<br></br>
            assigned_users: {assigned}<br></br>
            status: {status}<br></br>
            id: {id}<br></br>
            <button onClick={this.props.getId.bind(this,id)}><Link to="/ApplicantList">Applicant List</Link></button> 
            {/* <ApplicantList tasks={this.props.Tasks} fakes={this.props.fakes} hire={this.props.hire}/> */}
            {/* <Router>
             <Route exact path="/ApplicantList" render ={props=>
             <React.Fragment>
                <ApplicantList tasks={this.props.Tasks.applicant_list}/>
             </React.Fragment> 
           }/> 
             </Router> */}
          </p>
         </div>
     );
  }
}
// Task.propTypes = {
//     task: PropTypes.object.isRequired
//   }
  const updateBtnStyle = {
    position:'relative',
    marginTop:'28%',
    marginLeft:'94%'
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
const itemStyle ={
    fontColor: '#333',
    textDecoration: 'italic',
    font: 'Helvetica'
}
export default Task;

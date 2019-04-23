import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Task from './Task';

class TaskList extends Component {
  getStyle = () =>{
    return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted'
      }
    }
  // componentDidMount(){
  //   //console.log(this.props.AdminNot)
  //   Axios.get(`http://localhost:3000/api/task/5cb237c5ac8de331b0705c19`).then(res => this.setState({task:res.data})).catch(err =>console.log(err))
  // }
  render() {
    return this.props.task.map((task) => 
    <Task key={task.id} Tasks ={task} getId={this.props.getId}/> 
   ); 
  } 
}

  //   TaskList.propTypes = {
  //     not: PropTypes.array.isRequired
  // }
  const btnStyle={
    background: '#ff0000',
    color:'#fff',
    border: 'none',
    padding: '3px 5px',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right',
  }
const itemStyle ={
fontColor: '#333',
textDecoration: 'italic',
font: 'Helvetica'
}
export default TaskList;

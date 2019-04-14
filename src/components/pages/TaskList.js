import React, { Component } from 'react';
//import Notifiaction from './components/pages/NotificationList';

class TaskList extends Component {
  getStyle = () =>{
    return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted'
      }
    }
  render() {
    return (
      <div style={this.getStyle()}>
      <p>{this.props.AdminTask}</p>
      </div>
      );
    }
  }
const itemStyle ={
fontColor: '#333',
textDecoration: 'italic',
font: 'Helvetica'
}
export default TaskList;

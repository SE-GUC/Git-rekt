import React, { Component } from 'react'
import axios from 'axios'

class ViewTaskItem extends Component {
  getStyle = () => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
    }
  }

  async applyForTask() {
    const body = {
      "user": this.props.User,
      "task": this.props.Task['_id'],
      "description": this.props.Task.description,
      "date": Date.now()
    }
    const post = await axios.post("http://localhost:3001/api/application", body);
  }  

  
  render() {
    const {description} = this.props.Task;
    return (
      <div style = {this.getStyle()}>
        <p>
            {description}
            <button onClick = {() => this.applyForTask()} style = {btnStyle}>Apply</button>  
        </p>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default ViewTaskItem

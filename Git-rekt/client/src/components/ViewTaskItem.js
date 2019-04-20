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
  
  render() {
    const {description} = this.props.Task;
    return (
      <div style = {this.getStyle()}>
        <p>
            {description}
            <button onClick = {this.props.applyForTask.bind(this,this.props.Task['_id'])} style = {btnStyle}>Apply</button>  
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

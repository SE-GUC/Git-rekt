import React, { Component } from 'react';
import ViewTaskItem from './ViewTaskItem'

class ViewTasks extends Component {
  render() {
    return this.props.Tasks.map((Task) => (
        <ViewTaskItem key = {Task['_id']} Task = {Task} UserId = {this.props.UserId} applyForTask = {this.props.applyForTask} />
    ));
  }
}

export default ViewTasks;

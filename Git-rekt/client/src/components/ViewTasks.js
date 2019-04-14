import React, { Component } from 'react';
import ViewTaskItem from './ViewTaskItem'

class ViewTasks extends Component {
  render() {
    return this.props.Tasks.map((Task) => (
        <ViewTaskItem key = {Task['_id']} Task = {Task} User = {this.props.UserId} />
    ));
  }
}

export default ViewTasks;

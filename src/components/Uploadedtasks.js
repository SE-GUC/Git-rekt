import React, { Component } from 'react';
import Uploadedtask from './Uploadedtask';
import PropTypes from 'prop-types';

class Uploadedtasks extends Component {
 
  render() {
    console.log(this.props)
 return this.state.Uploaded_tasks.map((Uploaded_tasks) => 
 (
  <h3>Uploadedtask key= {this.props.Uploadedtasks.id} Uploadedtasks= {Uploadedtasks} </h3> 
  ));
  }
}


// uploadedtasks.PropTypes = {
//   uploadedtask: PropTypes.array.isRequired
// }
export default Uploadedtasks

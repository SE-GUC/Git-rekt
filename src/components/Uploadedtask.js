import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Uploadedtask extends Component {
    render() {
        return (
          <div>
            <h3>{this.props.admin.Uploadedtask }</h3>
          </div>
        );
      }
}
// uploadedtask.PropTypes = {
//     uploadedtask: PropTypes.object.isRequired
//   }
export default Uploadedtask
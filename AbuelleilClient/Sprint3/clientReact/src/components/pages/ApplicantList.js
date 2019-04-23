import React, { Component } from 'react';
import Certification from './Certification';
import PropTypes from 'prop-types';
import Applicant from './Applicant'

class ApplicantList extends Component {
  getStyle = () =>{
    return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted'
      }
    }
  render() {
      return this.props.tasks.map((applicant) => 
      <Applicant app ={applicant.applicant_list} fakes={this.props.fakes} hire={this.props.hire}/> 
      );
    }
  }

const itemStyle ={
fontColor: '#333',
textDecoration: 'italic',
font: 'Helvetica'
}
export default ApplicantList;

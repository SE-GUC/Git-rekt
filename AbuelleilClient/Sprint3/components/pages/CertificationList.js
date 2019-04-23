import React, { Component } from 'react';
import Certification from './Certification';
import PropTypes from 'prop-types';


class CertificationList extends Component {
  getStyle = () =>{
    return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted'
      }
    }
  render() {
    return this.props.certif.map((certif) => 
    <Certification key={certif.id} certificate ={certif} disapprove={this.props.disapprove} approve={this.props.approve} /> 
      );
    }
  }
  // CertificationList.propTypes = {
  //   certif: PropTypes.array.isRequired
  // }
const itemStyle ={
fontColor: '#333',
textDecoration: 'italic',
font: 'Helvetica'
}
export default CertificationList;

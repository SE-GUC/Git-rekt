import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Admin extends Component {
    getStyle = () =>{
        return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted',
        fontFamily: 'Helvetica'
        }
    }
  render() {
    return(
      <div style={this.getStyle()}> 
       <h2>Name: </h2>
        <h3>{this.props.Admin.name}</h3>
        <h2>Email: </h2>
        <h3>{this.props.Admin.email}</h3>
        <Link to="/Update" Linkstyle={updateBtnStyle}><button style={updateBtnStyle}>Update profile</button></Link>
      </div>
    );
  }
}
const updateBtnStyle = {
  position:'relative',
  marginTop:'28%',
  marginLeft:'94%'
}
const itemStyle ={
    fontColor: '#333',
    textDecoration: 'italic',
    fontFamily: 'Helvetica'
}
export default Admin;

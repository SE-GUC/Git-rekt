import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { tsConstructorType } from '@babel/types';
import Getcontact from './Getcontact'

class sendnotiwcontact extends Component {
    getStyle = () =>{
        return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted',
        fontFamily: 'Helvetica'
        } 
    }

    state = {
        notification: {
          sent_to:'',
          notifies: '',
        }
      }

    // Constructor() {
    //         super();
    //         this.state={
    //             con_ID:"",
    //             consaltancys_contact_info_name:"",
    //             consaltancys_contact_info_phoneNumber:"",
    //             consaltancys_contact_info_email:"",
    //         }
    //     }
 
    
    componentDidMount(){
            Axios.post('http://localhost:3001/api/notification').then(res => this.setState({notification:res.data})).catch(err => console.log(err))
            }

  render() {
    return(
        <div style={this.getStyle()}> 
        <h2>sent_to: </h2>
          <h3>{this.props.Getcontact.adminname}</h3>
          <h2>notifies: </h2>
          <h3>{this.props.Consultancy.name}, {this.props.Consultancy.phoneNumber}, {this.props.Consultancy.email}</h3>
          {/* <h2>consaltancys_contact_info_phoneNumber: </h2>
          <h3>{this.props.Consultancy.phoneNumber}</h3>
          <h2>consaltancys_contact_info_email: </h2>
          <h3>{this.props.Consultancy.email}</h3> */}
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
export default sendnotiwcontact;

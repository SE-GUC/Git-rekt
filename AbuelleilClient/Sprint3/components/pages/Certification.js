import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';


class Certification extends Component {

    // componentWillUpdate(){
    //   console.log(this.props.AdminNot)
    //   //Axios.get('http://localhost:3000/api/notification/'+this.props.AdminNot[0]).then(res => this.setState({notification:res.data.data})).catch(err => console.log(err))
    //   }
    // componentDidMount(){
    //   //console.log(this.props.AdminNot)

    //   Axios.get(`http://localhost:3000/api/notification/5cb232ec3182f02f04c61e38`).then(res => this.setState({notification:res.data.data})).catch(err =>console.log(err))
    // }
      getStyle = () =>{
          if(this.props.certificate.status === "approved"){
           return{
            backgroundColor:'#00ff00',
            padding:'10px',
            borderBottom: '1px #ccc dotted'
           }
        }else{
          return {
          backgroundColor:'##f4f4f4',
          padding:'10px',
          borderBottom: '1px #ccc dotted'
       
        }
        }
      }

  render() {     
      const {id,certificate,applicant} =this.props.certificate
     if(this.props.certificate.status === "approved"){
      return(
         <div style={this.getStyle()}>
            <p>
            applicant: {applicant} has applied for the {certificate}
            </p>
         </div>
     );
      }else{
        return(
        <div style={this.getStyle()}>
        <p>
        applicant: {applicant} has applied for the {certificate}
        <button onClick={this.props.disapprove.bind(this, id)} style={btnStyle}>X</button>
        <button onClick={this.props.approve.bind(this, id)} style={approveStyle}>O</button>
        </p>
     </div> 
        );
      }
  }
}
// Certification.propTypes = {
//     certificate: PropTypes.object.isRequired
//   }
  const approveStyle={
    background: '#00ff00',
    color:'#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right'
  }
const btnStyle={
  background: '#ff0000',
  color:'#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius:'50%',
  cursor: 'pointer',
  float:'right'
}
const itemStyle ={
    fontColor: '#333',
    textDecoration: 'italic',
    font: 'Helvetica'
}
export default Certification;

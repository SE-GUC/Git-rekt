import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';


class Applicant extends Component {

    // componentWillUpdate(){
    //   console.log(this.props.AdminNot)
    //   //Axios.get('http://localhost:3000/api/notification/'+this.props.AdminNot[0]).then(res => this.setState({notification:res.data.data})).catch(err => console.log(err))
    //   }
    // componentDidMount(){
    //   //console.log(this.props.AdminNot)

    //   Axios.get(`http://localhost:3000/api/notification/5cb232ec3182f02f04c61e38`).then(res => this.setState({notification:res.data.data})).catch(err =>console.log(err))
    // }
      getStyle = () =>{
        return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted'
        }
      }

  render() {     
      const x = this.props.app.map((applicant)=> <h3><br/>{applicant}
       <button  onClick={this.props.fakes.bind(this, applicant)} style={btnStyle}>X</button>
        <button   onClick={this.props.hire.bind(this, applicant)} style={approveStyle}>O</button></h3>)
        
     return(
         <div style={this.getStyle()}>
            <p>
            {x}
            </p>
         </div>
     );
  }
}
// Notification.propTypes = {
//     not: PropTypes.array.isRequired
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
export default Applicant;

import React, { Component } from 'react';
import Notification from './Notification'
import Axios from 'axios';
import PropTypes from 'prop-types';
import Admin from '../../Admin';

class NotificationList extends Component {

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
     return this.props.not.map((notif) => 
      <Notification key={notif.id} not ={notif} delNotif={this.props.delNotif} /> 
     );
  }
}

// NotificationList.propTypes = {
//   not: PropTypes.array.isRequired
// }
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
export default NotificationList;

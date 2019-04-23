import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';


class Notification extends Component {

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
      const {id, notifies} =this.props.not
     return(
         <div style={this.getStyle()}>
            <p>
            {notifies}
            <button onClick={this.props.delNotif.bind(this, id)} style={btnStyle}>X</button>
            </p>
         </div>
     );
  }
}
// Notification.propTypes = {
//     not: PropTypes.array.isRequired
//   }
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
export default Notification;

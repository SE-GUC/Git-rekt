import React, { Component } from 'react';

class NotificationList extends Component {
    getStyle = () =>{
        return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted'
        }
    }
  render() {
    return (
      <div style={this.getStyle()}>
      <p>
        {this.props.AdminNot}
      </p>
      </div>
    );
  }
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
export default NotificationList;

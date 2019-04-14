// import React, { Component } from 'react';
// //import Notifiaction from './components/pages/NotificationList';

// class AdminPage extends Component {
//     getStyle = () =>{
//         return{
//         backgroundColor:'#f4f4f4',
//         padding:'10px',
//         borderBottom: '1px #ccc dotted'
//         }
//     }
//   render() {
//       console.log(this.props.Admin)
//       const AdminNot = this.props.Admin.notifications.map((notif)=>(
//         <h3>{notif}</h3>
//       ))
//       const AdminCertif = this.props.Admin.certificatonApplication.map((certif)=>(
//         <h3>{certif}</h3>
//       ))
//       const AdminTask= this.props.Admin.uploaded_tasks.map((task)=>(
//         <h3>{task}</h3>
//       ))
//     return (
//       <div style={this.getStyle()}> 
//        <h2>Name: </h2>
//        <h3>{this.props.Admin.name}</h3>
//        <h2>Email: </h2>
//        <h3>{this.props.Admin.email}</h3>
//        <h2>Notifications:</h2>
//        <h3>{AdminNot}</h3>
//        <h2>Certificate:</h2>
//        <h3>{AdminCertif}</h3>
//        <h2>Uploaded Tasks:</h2>
//        <h3>{AdminTask}</h3>
//       </div>
//     );
//   }
// }
// const itemStyle ={
//     fontColor: '#333',
//     textDecoration: 'italic',
//     font: 'Helvetica'
// }
// export default AdminPage;

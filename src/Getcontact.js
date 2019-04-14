import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { tsConstructorType } from '@babel/types';


class Getcontact extends Component {
  
  state={
    adminname: [],
    responseloaded:false
}  

  getStyle = () =>{
        return{
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom: '1px #ccc dotted',
        fontFamily: 'Helvetica'
        } 
    }


 componentDidMount(){
            Axios.get('http://localhost:3001/api/admin/').then(res => this.setState({adminname:res.data,responseloaded:true
          })
          ).catch(err => console.log(err))
          
          }
  

getData(){
var buttons=[]
for(var index=0; index<this.state.adminname.data.length;index++){
  buttons.push(<button> <Link> {this.state.adminname.data[index].name}
    </Link>|
  </button>
  
  )
  buttons.push(<br></br>)
}


 return buttons
 
}
// deleteNotificattion(){
//   <button>'Delete'</button>
// for(var index=0; index<this.state.adminname.data.length;index++){
//   buttons.push(<button> <Link> {this.state.adminname.data[index].notification}
//     </Link>|
//   </button>
//   )
//   buttons.push(<br></br>)
// }
//  return buttons
// }
            
  render(){
  
     if(!this.state.responseloaded){
      return(
        <div style={this.getStyle()}> 
        <h3>loading</h3>
        </div>
      );
     }
     else{
     return(
        <div style={this.getStyle()}> 
          {this.getData()}
       

          {/* <h3>{this.props.Task.approved_by}</h3>
          <h3>{this.props.Task.Assigned_Consultancy}</h3>
          <h2>consaltancys_contact_info_name: </h2>
          <h3>{this.props.Consultancy.name}</h3>
          <h2>consaltancys_contact_info_phoneNumber: </h2>
          <h3>{this.props.Consultancy.phoneNumber}</h3>
          <h2>consaltancys_contact_info_email: </h2>
          <h3>{this.props.Consultancy.email}</h3> */}

          
        </div>
      );
    }
    // const Adminconts= this.state.Admin.adminname.map((adminname)=>(
    //   <h3>{adminname}</h3>
    // ))
    
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
export default Getcontact;

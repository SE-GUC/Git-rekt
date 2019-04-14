import React, { Component } from 'react'
import axios from 'axios';


export class getPartner extends Component {
    constructor(props){
        super(props)
        this.state={
            Name:'',
            password:'',
            email:'',
            contact_info:'',
            registered_on:'',
            com_reg_num:'',
            info:'',
            signed:'',
            rating:'',
            submitted_tasks:'',
            associates:'',
            board_members:'',
            events:'',
            feedback:'',
            notifications:''
    };
    }
    async componentDidMount(){
        const Body=await axios.get('http://localhost:5000/api/partner')
        this.setState({Name:Body.data.Name})
        this.setState({email:Body.data.email})
        this.setState({contact_info:Body.data.contact_info})
        this.setState({registered_on:Body.data.registered_on})
        this.setState({com_reg_num:Body.data.com_reg_num})
        this.setState({info:Body.data.info})
        this.setState({signed:Body.data.signed})
        this.setState({rating:Body.data.rating})
        this.setState({submitted_tasks:Body.data.submitted_tasks})
        this.setState({associates:Body.data.associates})
        this.setState({board_members:Body.data.board_members})
        this.setState({events:Body.data.events})
        this.setState({feedback:Body.data.feedback})
        this.setState({notifications:Body.data.notifications})
    }


    render() {
    return (
    <ul>
          <p>
              {this.state.Name}
          </p>

          <p>
              {this.state.email}
          </p>
          
	      <p>{this.state.email}</p>
        <p>{this.state.contact_info}</p>
        <p>{this.state.registered_on}</p>
        <p>{this.state.com_reg_num}</p>
        <p>{this.state.info}</p>
        <p>{this.state.signed}</p>
        <p>{this.state.rating}</p>
        <p>{this.state.submitted_tasks}</p>
        <p>{this.state.associates}</p>
        <p>{this.state.board_members}</p>
        <p>{this.state.events}</p>
        <p>{this.state.board_members}</p>
        <p>{this.state.feedback}</p>
        <p>{this.state.notifications}</p>
        
    </ul>
)
  }
}

export default getPartner
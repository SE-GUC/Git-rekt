
import React, { Component } from 'react'
import axios from 'axios';

export class deleteUser extends Component {
	
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleChange(event) {
    this.setState({value: event.target.value});
  }
	handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


	
    async componentDidMount(){
        
		//const Body=await axios.get('http://localhost:3001/api/partner')
		const user = await User.findOne({value})
		id=user.id
		axios.delete(id,async (req,res))
    }

	

     render() {
     return (
         <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
		 
		 );
		 
	 }
}	 

export default deleteUser
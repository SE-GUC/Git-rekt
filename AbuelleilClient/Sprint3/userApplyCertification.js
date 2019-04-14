import React, { Component } from 'react'
import axios from 'axios';


/*title,description,prerequisites,issuedBy,type*/


export class userApplyCertification extends Component {
    
    async componentDidMount(){
        const Body=await axios.put('http://localhost:3001/api/partner')
        
    }

	

     render() {
     return (
        <input
            type="text"
            title={this.state.title}
            onChange={this.handleChange1}

            type="text"
            description={this.state.description}
            onChange={this.handleChange2}

            type="text"
            prerequisites={this.state.prerequisites}
            onChange={this.handleChange3}

            type="text"
            issuedBy={this.state.issuedBy}
            onChange={this.handleChange4}
        
            type="text"
            type={this.state.type}
            onChange={this.handleChange5}
        
         />
		 
     );

 }
}

export default userApplyCertification
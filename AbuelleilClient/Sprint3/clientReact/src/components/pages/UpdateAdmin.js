import React, {Component} from 'react'
import {Link} from 'react-router-dom';


export class UpdateAdmin extends Component {
    state ={
        Admin: {
            name:'',
            email: '',
          }
    }
    onSubmit =(e) => {
        e.preventDefault();
        if(this.state.name!==undefined){
        this.props.UpAdminName(this.state.name)
        }
        if(this.state.email!==undefined){
        this.props.UpAdminEmail(this.state.email)
        }
        this.setState({name:''});
        this.setState({email:''});
       // <Link to="/">Home Page</Link>

    }
    onChange = (e) => this.setState({[e.target.name]: 
        e.target.value});
    render() {
        return (
            // style={{display: 'flex'}}
            <form onSubmit={this.onSubmit} >
            <h3>Change Admin Name:</h3>
            <br></br>
                <input
                    type = "text"
                    name ="name"
                    style={{padding: '5px',width:'400px'}}
                    placeholder = "change Admin Name"
                    value={this.state.name}
                    onChange={this.onChange}>
                </input>
                <br></br>
                <br></br>
                <h3>Change Admin Email</h3>
                <br></br>
               <input
                    type = "text"
                    name ="email"
                    style={{padding: '5px',width:'400px'}}
                    placeholder = "change Admin Emaill" 
                    value={this.state.email} 
                    onChange={this.onChange}>
                </input>
                <br></br>
                <br></br>
                <br></br>
                <input 
                    type="submit" 
                    value="submit"
                    className="btn"
                    style={{ padding: '5px'}}>
                </input> 
            </form>
        )
    }
    
}
const updateBtnStyle = {
    position:'static',
    marginTop:'70%'
}
export default UpdateAdmin;
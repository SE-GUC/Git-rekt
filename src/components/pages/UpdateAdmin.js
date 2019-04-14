import React, {Component} from 'react'


export class UpdateAdmin extends Component {
    state ={
        Admin: {
            name:'',
            email: '',
            uploaded_tasks:this.props.Admin.uploaded_tasks,
            notifications: this.props.Admin.notifications,
            certificatonApplication:this.props.Admin.certificatonApplication
          }
    }
    onSubmit =(e) => {
        //e.preventDefualt();
        this.props.UpAdmin(this.state.name)
        this.setState({name:''});
        this.setState({email:''});

    }
    onChange = (e) => this.setState({[e.target.name]: 
        e.target.value});
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type = "text"
                    name ="title"
                    style={{flex:'10', padding: '5px'}}
                    placeholder = "change Admin Name"
                    value={this.state.name} 
                    onChange={this.onChange}>
                </input>
               <input
                    type = "text"
                    name ="title"
                    style={{flex:'10', padding: '5px'}}
                    placeholder = "change Admin Emaill" 
                    value={this.state.email} 
                    onChange={this.onChange}>
                </input>
                <input 
                    type="submit" 
                    value="submit"
                    className="btn"
                    style={{flex:'10', padding: '5px'}}>
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
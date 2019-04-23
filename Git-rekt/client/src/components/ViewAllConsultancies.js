import React, { Component } from 'react'
import axios from 'axios'
import ViewConsultancies from './ViewConsultancies'
import * as jwt_decode from "jwt-decode";

export class ViewAllConsultancies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: props.user['_id'],
            // certifications: props.user.certifications,
            id: null,
            msg: null,
            availableConsultancies: [], 
            isLoading: false,
            error: null
        };
    }

    async setAvailableConsultancies (){
        this.setState({isLoading: true})
        try{
            const getConsultancies = await axios.get("http://localhost:3001/api/consultancy");  
            const allConsultancies = getConsultancies.data.data
            this.setState({availableConsultancies: allConsultancies, msg: "All Consultancies", isLoading:false})
        }catch(error){
            this.setState({
                error,
                isLoading: false  
            });
        }
    }
    
    async settingUserId() { 
        try{
            const tokenInfo = localStorage.getItem('jwtTokenUser')
            const payload = jwt_decode(tokenInfo)
            const userId = payload.id
            console.log("" + userId)
            this.setState({id: userId+""})
            console.log(""+this.state.id)
            console.log("finished making tokin")
        }
        catch(error){
            console.log("can not decode token")
        }
    }
    
    async componentDidMount() {
        this.setState({isLoading: true})
        try{
            await this.settingUserId()
            const user = await axios.get(`http://localhost:3001/api/user/${this.state.id}`);
            const userId = user.data['_id'] 
            this.setState({id: userId, isLoading: false})
            await this.setAvailableConsultancies()
        }
        catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }
    
    render() {
        const {id,  msg,  availableConsultancies, isLoading, error} = this.state;
        if (error) {
            return <h3>{error.message}</h3>;
        }
        
        if (isLoading) {
            return <h3>Loading ...</h3>;
        }
        
        return(
            <div>
            <h1>{msg}</h1>
            <ViewConsultancies Consultancies = {availableConsultancies} UserId = {id} />
            </div>
            );
    }
}

export default ViewAllConsultancies

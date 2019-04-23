import React, { Component } from 'react'
import axios from 'axios'
import ViewTasks from './ViewTasks'
import * as jwt_decode from "jwt-decode";

class UserViewAllAvailableTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: props.user['_id'],
            // certifications: props.user.certifications,
            id: null,
            certifications: null,
            msg: null,
            availableTasks: [], 
            isLoading: false,
            error: null
        };
    }
    
    applyForTask = async (taskId) => {
        console.log("applying")
        this.setState({isLoading: true})
        try{
            const taskData = await axios.get(`http://localhost:3001/api/task/${taskId}`);
            const task = taskData.data
            const body = {
                "user": this.state.id,
                "task": taskId,
                "description": task.description,
                "date": Date.now()
            }
            const postApplication = await axios.post("http://localhost:3001/api/application", body);
            console.log("Posted application")
            const newUser = task.applicant_list
            newUser.push(this.state.id)
            const body2 = {
                "applicant_list": newUser
            } 
            const update = await axios.put(`http://localhost:3001/api/task/${taskId}`, body2)
            console.log("Updated task")
            this.setState({availableTasks: [...this.state.availableTasks.filter(Task => Task['_id'] !== taskId)], msg: "Successfully applied to task", isLoading: false})
            await this.setAvailableTasks()
        }
        catch(error){
            this.setState({
                error,
                isLoading: false
            });
        }  
    }
    
    // async removeTask(taskId) {
    //     console.log("still removing")
    //     //await this.setAvailableTasks()
    //     this.setState({availableTasks: [...this.state.availableTasks.filter(Task => Task['_id'] !== taskId)]})
    // }
    
    async setAvailableTasks () {
        this.setState({isLoading: true})
        try {
            
            console.log("" + this.state.certifications.length)
            console.log(this.state.certifications[0])
            //first we get all tasks available
            const getTasks = await axios.get("http://localhost:3001/api/task");  
            const allTasks = getTasks.data.data
            var pendingTasks = []
            var finalTasks = []
            //then filter to only tasks that are awaiting a user assignment
            var a, b, i, j, k;
            for(a = 0; a < allTasks.length; a++){
                if(allTasks[a].status === "pending_User_Assignment"){
                    pendingTasks.push(allTasks[a])
                }
            }
            
            console.log("" + pendingTasks.length)
            console.log("filtering tasks")
            
            console.log(`${pendingTasks[0].description}`)
            console.log("" + pendingTasks.length)
            //then further filter to tasks with required skill set that matches current user's certification
            for(i = 0; i < pendingTasks.length; i++){
                console.log("Checking task")
                //first check that the user did not apply before
                var notApplied = true;
                for(b = 0; b < pendingTasks[i].applicant_list.length; b++){
                    if(pendingTasks[i].applicant_list[b] === this.state.id){
                        //user already applied 
                        console.log("user already applied")
                        notApplied = false;
                        break;
                    }
                }
                if(notApplied){
                    //for every pending task we assume that 0 required skills are met 
                    var pendingSkills = 0;
                    for(j = 0; j < pendingTasks[i].Required_set_of_skills.length; j++){
                        console.log("Checking skill")
                        for(k = 0; k < this.state.certifications.length; k++){
                            //if a skill is met, increment number of pending skills
                            if(this.state.certifications[k] === pendingTasks[i].Required_set_of_skills[j]){
                                console.log("Skill met")
                                ++pendingSkills;
                                break;
                            }
                        }
                    }
                    //finally if number of pending skills met total is equal to number of required skills then
                    //add current task to props list of available tasks
                    if(pendingSkills === pendingTasks[i].Required_set_of_skills.length){
                        finalTasks.push(pendingTasks[i])
                    }
                    console.log("appended task")
                }
            }
            if(finalTasks.length === 0){
                this.setState({msg: "No tasks to display", isLoading:false}) 
                return;
            }
            this.setState({availableTasks: finalTasks, msg: "Available tasks", isLoading:false})  
            //now the current state of this component holds a list of available tasks to current user to view        
        }
        catch (error) {
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
            const userCert = user.data.certifications  
            this.setState({id: userId, certifications: userCert, isLoading: false})
            await this.setAvailableTasks()
        }
        catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }
    
    render() {
        const {id, certifications, msg,  availableTasks, isLoading, error} = this.state;
        if (error) {
            return <h3>{error.message}</h3>;
        }
        
        if (isLoading) {
            return <h3>Loading ...</h3>;
        }
        
        return(
            <div>
            <h1>{msg}</h1>
            <ViewTasks Tasks = {availableTasks} UserId = {id} applyForTask = {this.applyForTask} />
            </div>
            );
        }
    }
    
    export default UserViewAllAvailableTasks
    
import React, { Component } from 'react'
import axios from 'axios'
import ViewCertifcates from './ViewCertificates'
import * as jwt_decode from "jwt-decode";

export class UserViewAllCertificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: props.user['_id'],
      // certifications: props.user.certifications,
      id: null,
      certifications: null,
      msg: null,
      availableCertificates: [], 
      isLoading: false,
      error: null
    };
  }
  
  applyForCertificate = async (certificateId) => {
    console.log("applying")
    this.setState({isLoading: true})
    try{
      const certificateData = await axios.get(`http://localhost:3001/api/certificate/${certificateId}`);
      const certificate = certificateData.data
      const body = {
        "certificate": certificate['_id'],
        "applicant": this.state.id,
        "status": "Pending_Admin_Approval",
      }
      const postCertificateApplication = await axios.post("http://localhost:3001/api/certificateApplication", body);
      console.log("Posted certificate application")
      this.setState({availableCertificates: [...this.state.availableCertificates.filter(Certificate => Certificate['_id'] !== certificateId)], msg: "Successfully applied to certificate", isLoading: false})
      await this.setAvailableCertificates()
    }
    catch(error){
      this.setState({
        error,
        isLoading: false
      });
    }  
  }
  
  async setAvailableCertificates () {
    this.setState({isLoading: true})
    try {
      
      console.log("" + this.state.certifications.length)
      console.log(this.state.certifications[0])
      //first we get all certificates available
      const getCertificates = await axios.get("http://localhost:3001/api/certificate");  
      const allCertificates = getCertificates.data.data
      var pendingCertificates = []
      var i, j, k;
      //now we filter to only the certificates that user has satisfied its prerequisites
      for(i = 0; i < allCertificates.length; i++){
        var Certs = 0;
        for(j = 0; j < allCertificates[i].prerequisites.length; j++){
          for(k = 0; k < this.state.certifications.length; k++){
            if(this.state.certifications[k] === allCertificates[i].prerequisites[j]){
              console.log("Skill met")
              ++Certs;
              break;
            }
          }
        }
        //finally if number of pending skills met total is equal to number of required skills then
        //add current task to props list of available tasks
        if(Certs === allCertificates[i].prerequisites.length){
          pendingCertificates.push(allCertificates[i])
        }
        console.log("appended Certificate")
      }
      if(pendingCertificates.length === 0){
        this.setState({msg: "No Certificates to display", isLoading:false}) 
        return;
      }
      this.setState({availableCertificates: pendingCertificates, msg: "Available Certificates", isLoading:false})  
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
      await this.setAvailableCertificates()
    }
    catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }
  
  render() {
    const {id, msg, availableCertificates, isLoading, error} = this.state;
    if (error) {
      return <h3>{error.message}</h3>;
    }
    
    if (isLoading) {
      return <h3>Loading ...</h3>;
    }
    
    return(
      <div>
      <h1>{msg}</h1>  
      <ViewCertifcates Certificates = {availableCertificates} UserId = {id} applyForCertificate = {this.applyForCertificate} />
      </div>
      );
    }
  }
  
  export default UserViewAllCertificates
  
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import UserLogin from './components/UserLogin';
import PartnerLogin from './components/PartnerLogin';
import Register from './components/Register';
import UserProfile from './components/UserProfile'
import PartnerProfile from './components/PartnerProfile'
import ReviewCertificates from './components/ReviewCertificates'
import DisplayCertificates from './components/DisplayCertificates'
import PartnerNotifications from './components/PartnerNotification'
import ConsultancyProfile from './components/ConsultancyProfile'
import UserViewAllAvailableTasks from './components/UserViewAllAvailableTasks'
import UpdateUser from './components/UpdateUser'
import UpdatePartner from './components/UpdatePartner'
import SubmitTask from './components/SubmitTask'
import RegistrationPage from './components/RegisterScreen.jsx'
import RegisterPartnerPage from './components/RegisterPartnerScreen.jsx';
import ViewTaskItem from './components/ViewTaskItem'
import ViewTasks from './components/ViewTasks'
import UserViewAllCertificates from './components/UserViewAllCertificates';
import ViewAllConsultancies from './components/ViewAllConsultancies';

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/userLogin" component={UserLogin} />
            <Route exact path="/partnerLogin" component={PartnerLogin} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/registerPage" component={RegistrationPage} />
            <Route exact path="/registerPagePartner" component={RegisterPartnerPage} />
            <Route exact path="/updateUser"component={UpdateUser} />
            <Route exact path="/updatePartner"component={UpdatePartner} />
            <Route exact path="/userProfile" component={UserProfile} />
            <Route exact path="/partnerProfile" component={PartnerProfile} />
            <Route exact path="/reviewCertificates" component={ReviewCertificates} />
            <Route exact path="/displayCertificates" component={DisplayCertificates} />
            <Route exact path="/partnerNotifications" component={PartnerNotifications} />
            <Route exact path="/consultancyProfile" component={ConsultancyProfile} />
            <Route exact path="/UserViewAllAvailableTasks" component={UserViewAllAvailableTasks} />
            <Route exact path="/ViewAllConsultancies" component={ViewAllConsultancies} />
            <Route exact path="/UserViewAllCertificates" component={UserViewAllCertificates} />
            <Route exact path="/SubmitTask" component={SubmitTask} />
          </div>
       </div>
       </Router>
    );
  }
}

export default App;

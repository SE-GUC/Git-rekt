import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile'
import ReviewCertificates from './components/ReviewCertificates'
import DisplayCertificates from './components/DisplayCertificates'
import PartnerNotifications from './components/PartnerNotification'
import ConsultancyProfile from './components/ConsultancyProfile'
import UserViewAllAvailableTasks from './components/UserViewAllAvailableTasks'
import UpdateUser from './components/UpdateUser'
import RegistrationPage from './components/RegisterScreen.jsx'
import ViewTaskItem from './components/ViewTaskItem'
import ViewTasks from './components/ViewTasks'

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/registerPage" component={RegistrationPage} />
            <Route exact path="/updateUser"component={UpdateUser} />
            <Route exact path="/userProfile" component={UserProfile} />
            <Route exact path="/reviewCertificates" component={ReviewCertificates} />
            <Route exact path="/displayCertificates" component={DisplayCertificates} />
            <Route exact path="/partnerNotifications" component={PartnerNotifications} />
            <Route exact path="/consultancyProfile" component={ConsultancyProfile} />
            <Route exact path="/UserViewAllAvailableTasks" component={UserViewAllAvailableTasks} />
          </div>
       </div>
       </Router>
    );
  }
}

export default App;

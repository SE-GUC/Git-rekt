import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile'
import ReviewCertificates from './components/ReviewCertificates'
import DisplayCertificates from './components/DisplayCertificates'
import PartnerNotifications from './components/PartnerNotification'


class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/userProfile" component={UserProfile} />
            <Route exact path="/reviewCertificates" component={ReviewCertificates} />
            <Route exact path="/displayCertificates" component={DisplayCertificates} />
            <Route exact path="/partnerNotifications" component={PartnerNotifications} />
          </div>
       </div>
       </Router>
    );
  }
}

export default App;

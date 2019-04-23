import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import TaskAttribute from './components/TaskAttribute';
import UserNotifications from './components/UserNotifications';
import ApprovingTasks from './components/ApprovingTasks';
import DeleteNotifications from './components/DeleteNotifications';


export default class App extends React.Component{
    
  
   
   render() {
    return (
        <Router>
            <div className="App">
             <Route exact path = '/TaskInfo' component = {TaskAttribute}/>
             <Route exact path = '/YourNotifications' component = {UserNotifications}/>
             <Route exact path = '/AdminApprovesTask' component = {ApprovingTasks}/>
             <Route exact path = '/DeleteNotification' component = {DeleteNotifications}/>
            </div>
          </Router>
         
        
    );
  }
}



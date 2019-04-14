import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import TaskAttribute from './components/TaskAttribute';
import UserNotifications from './components/UserNotifications';
import ApprovingTasks from './components/ApprovingTasks';


export default class App extends React.Component{
    
  
   
   render() {
    return (
        <Router>
            <div className="App">
             <Route exact path = '/TaskInfo' component = {TaskAttribute}/>
             <Route exact path = '/YourNotifications' component = {UserNotifications}/>
             <Route exact path = '/AdminApprovesTask' component = {ApprovingTasks}/>
            </div>
          </Router>
         
        
    );
  }
}



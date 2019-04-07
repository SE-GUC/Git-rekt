import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import TaskAttribute from './components/TaskAttribute';
import UserNotifications from './components/UserNotifications';




class App extends React.Component{
   
    render(){
        return(
        <Router>
        <div>
            
          <Route path='/TaskInfo' exact component={TaskAttribute} />
          <Route path='/YourNotifications' exact component={UserNotifications} />
          
        </div>
        </Router>
        )
    }
}
export default App

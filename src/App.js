import React, { Component } from 'react';
import Uploadedtasks from './components /Uploadedtasks';
// import UserNotifications from './components /UserNotifications';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
const Axios = require('axios'); 

class App extends Component {
  state={
    Uploaded_tasks:[]
    }
componentDidMount(){
  Axios.get(`http://localhost:3001/api/admin/5ca136e5a6837e5660e32063`).
  // then(res=> this.setState.Uploadedtasks).
  then(res => this.setstate({Uploaded_tasks:res.data.data.Uploaded_tasks})).
  catch(err => {console.log(err)})
}
  render() {
    console.log(this.state.Uploaded_tasks)
    return (
      <div className="App">
        <Uploadedtasks Uploadedtasks= {this.state.Uploaded_tasks.Uploaded_tasks}/>
      </div>
    );
    // return(
    //   <Router>
    //   <div>
          
    //     <Route path='/' exact component={UserNotifications} />
    //   </div>
    //   </Router>
    //   );
  }
}




export default App;

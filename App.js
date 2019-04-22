import React, { Component } from 'react';
import Login from './login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
    <Route exact path="" component={Login}/>
          
      </div>
      </Router>
    );
  }
  }


export default App;

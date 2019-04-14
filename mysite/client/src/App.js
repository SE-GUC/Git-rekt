import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header'
import viewConsultant from './components/viewConsultant'

class App extends Component {
  

  // markComplete = (id) => {
  //   this.setState({todos : this.state.todos.map(todo => {
  //     if(todo.id === id){
  //       todo.completed = !todo.completed
  //     }
  //     return todo;
  //   })})
  // }

  // delTodo = (id) => {
  //   this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
            </React.Fragment>
          )} />
          <Route path = "/viewProfile" component={viewConsultant} />
        </div>
      </Router>
    );
  }
}

export default App;

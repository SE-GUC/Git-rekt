import React, { Component } from 'react'
import axios from 'axios'

class ConsultancyApplyForTasks extends Component {


    constructor(props) {
      super(props);
      this.state = {
        user: null,//id of consultancy
        task: null,//id of task
        date: null,
      };
  }  

  
  async componentDidMount() {
    this.setState({ isLoading: true });
      try {
        const result = await axios.post("http://localhost:3001/api/application/");  
        this.setState({
          user: result.data.data[0].user,
          task: result.data.data[0].task,
          date: result.data.data[0].date,
          isLoading: false
        });
      } catch (error) {
        this.setState({
          error,
          isLoading: false
        });
      }
    }


    render() {
      const { user, tast, date, isLoading, error } = this.state;

      if (error) {
        return <h3>{error.message}</h3>;
      }

      if (isLoading) {
        return <h3>Loading ...</h3>;
      }
  
      return (
        <div>
        
          {user ? user  : "empty"}
          {tast ? tast  : "empty"} 
          {date ? date  : "empty" }  

          <button><a href="http://localhost:3000/application">register</a></button>

        </div>
      );
    }
  }


export default ConsultancyApplyForTasks;
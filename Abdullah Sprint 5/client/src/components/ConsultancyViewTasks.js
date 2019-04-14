import React, { Component } from 'react'
import axios from 'axios'

class ConsultancyViewTasks extends Component {


    constructor(props) {
      super(props);
      this.state = {
        description: null,
        Level_of_commitment: null,
        Experience_level: null,
      };
  }  

  
  async componentDidMount() {
    this.setState({ isLoading: true });
      try {
        const result = await axios.get("http://localhost:3001/api/tast/");  
        this.setState({
          description: result.data.data[0].description,
          Level_of_commitment: result.data.data[0].Level_of_commitment,
          Experience_level: result.data.data[0].Experience_level,
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
      const { description, Level_of_commitment, Experience_level, isLoading, error } = this.state;

      if (error) {
        return <h3>{error.message}</h3>;
      }

      if (isLoading) {
        return <h3>Loading ...</h3>;
      }
  
      return (
        <div>
        
          {description ? description  : "empty"}
          {Level_of_commitment ? Level_of_commitment  : "empty"} 
          {Experience_level ? Experience_level  : "empty" }  
        </div>
      );
    }
  }


export default ConsultancyViewTasks;
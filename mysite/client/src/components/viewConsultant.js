import React, { Component } from 'react'

export class viewConsultant extends Component {

  consultantPath = await axios.get('http://localhost:3000/api/consultancy/')
  consultant = consultantPath.data.data

  render() {
    return (
      <div>
        <h1>{"Name: " + consultant.name}</h1>
          <p>
            {"email: " + consultancy.email}
            {"established since: " + consultancy.establishedSince }
            {"description: " + consultancy.description}
          </p>      
      </div>
    )
  }
}

export default viewConsultant

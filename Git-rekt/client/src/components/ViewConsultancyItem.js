import React, { Component } from 'react'

export class ViewConsultancyItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }
  
  render() {
    const {name, comRegNum, establishedSince, field, description, email, phoneNumber} = this.props.Consultancy;
    return (
        <div style = {this.getStyle()}>
        <p>
          {name}<br />
          {comRegNum}<br />
          {establishedSince}<br />
          {field}<br />
          {description}<br />
          {email}<br />
          {phoneNumber}<br />
        </p>
      </div>
    )
  }
}


export default ViewConsultancyItem

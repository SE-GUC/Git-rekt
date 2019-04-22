import React, { Component } from 'react';
import ViewCertificateItem from './ViewCertificateItem'

class ViewCertificates extends Component {
  render() {
    return this.props.Certificates.map((Certificate) => (
        <ViewCertificateItem key = {Certificate['_id']} Certificate = {Certificate} UserId = {this.props.UserId} applyForCertificate = {this.props.applyForCertificate} />
    ));
  }
}

export default ViewCertificates;
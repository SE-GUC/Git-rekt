import React, { Component } from 'react';
import ConsultancyItem from './ConsultancyItem'
import PropTypes from 'prop-types';

class Consultancy extends Component {
  render() {
    return this.props.consultancies.map((consultancy) => (
        <ConsultancyItem key = {consultancy['_id']} consultancyId = {consultancy['_id']} consultancy = {consultancy}  />
    ));
  }
}

//PropTypes
Todos.propTypes = {
    consultancies: PropTypes.array.isRequired
}

export default Consultancy;

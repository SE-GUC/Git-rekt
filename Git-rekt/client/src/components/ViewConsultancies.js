import React, { Component } from 'react'
import ViewConsultancyItem from './ViewConsultancyItem'

export class ViewConsultancies extends Component {
    render() {
        return this.props.Consultancies.map((Consultancy) => (
            <ViewConsultancyItem key = {Consultancy['_id']} Consultancy = {Consultancy} UserId = {this.props.UserId} />
            ));
        }
    }
    
    export default ViewConsultancies
    
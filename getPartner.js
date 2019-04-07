import React, { Component } from 'react'
import axios from 'axios';


export class getPartner extends Component {
    constructor(props){
        super(props)
        this.state={
            Name:'',
            password='',
            email='',
            contact_info='',
            registered_on='',
            com_reg_num='',
            info='',
            signed='',
            rating='',
            submitted_tasks='',
            associates='',
            board_members='',
            events='',
            feedback='',
            notifications=''
    };
    }
  
    render() {
    return (
      <div>

      </div>
    )
  }
}

export default getPartner
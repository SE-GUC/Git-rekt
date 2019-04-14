import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ConsultancyItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
           // textDecoration: this.props.consultancy.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
    const { title} = this.props.todo;
    return (
      <div style = {this.getStyle()}>
        <p>
            <input type="checkbox" onChange = {this.props.markComplete.bind(this, this.props.todoId)}/> {' '}
            {title}
            <button onClick = {this.props.delTodo.bind(this,this.props.todoId)} style = {btnStyle}></button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    todoId: PropTypes.number.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
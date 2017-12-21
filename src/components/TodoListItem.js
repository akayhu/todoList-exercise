import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class TodoListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.lineThrough = this.lineThrough.bind(this);
  // }
  lineThrough(id) {
    const { toggleTodo } = this.props;
    toggleTodo(id);
  }
  render() {
    const { id, text, completed } = this.props.data;
    return (
      <li
        style={{ textDecoration: completed ? 'line-through' : 'none' } }
      >
        <input type="checkbox" onClick={ this.lineThrough.bind(this, id) } />
        { text }
      </li>
    );
  }
}

const action = { toggleTodo };

export default connect(null, action)(TodoListItem);
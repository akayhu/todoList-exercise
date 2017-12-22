import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deltetTodo } from '../actions';

class TodoListItem extends Component {
  lineThrough(id) {
    const { toggleTodo } = this.props;
    toggleTodo(id);
  }
  deltetItem(id) {
    const { deltetTodo } = this.props;
    deltetTodo(id);
  }
  render() {
    const { id, text, completed } = this.props.data;
    return (
      <li
        style={ { textDecoration: completed ? 'line-through' : 'none' } }
      >
        <input 
          type="checkbox"
          defaultChecked={ completed }
          onClick={ this.lineThrough.bind(this, id) }
        />
        { text }
        <button
          onClick={ this.deltetItem.bind(this, id) }
        >
          刪除
        </button>
      </li>
    );
  }
}

const action = { toggleTodo, deltetTodo };

export default connect(null, action)(TodoListItem);

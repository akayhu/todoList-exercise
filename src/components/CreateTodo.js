import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.addTodoList = this.addTodoList.bind(this);
  }
  addTodoList(e) {
    e.preventDefault();
    const { addTodo } = this.props;
    let input = this.refs.todoListInput;
    let inputValue = input.value;
    addTodo(inputValue);
    input.value = '';
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref="todoListInput"
        />
        <button type="submit" onClick={ this.addTodoList }>新增</button>
      </div>
    );
  }
}

const action = { addTodo };

export default connect(null, action)(CreateTodo);

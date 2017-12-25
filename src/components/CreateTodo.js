import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { CreateButton } from './styled';

const inputStyle = {
  'borderRadius': '3px',
  'padding': '6px 3px',
  'background': 'transparent',
  'color': '#000',
  'border': '1px solid #d0d0d0',
  'cursor': 'pointer'
};

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
      <form onSubmit={ this.addTodoList }>
        <input
          style={ inputStyle }
          type="text"
          ref="todoListInput"
        />
        <CreateButton type="submit">新增</CreateButton>
      </form>
    );
  }
}

const action = { addTodo };

export default connect(null, action)(CreateTodo);

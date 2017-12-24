import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../actions';

const Button = styled.button`
  border-radius: 3px;
  padding: 5px 10px;
  margin-left: 10px;
  background: transparent;
  color: #000;
  border: 1px solid #d0d0d0;
  cursor: pointer;
`;

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
      <div>
        <input
          style={ inputStyle }
          type="text"
          ref="todoListInput"
        />
        <Button type="submit" onClick={ this.addTodoList }>新增</Button>
      </div>
    );
  }
}

const action = { addTodo };

export default connect(null, action)(CreateTodo);

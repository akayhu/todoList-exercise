import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/';
import { toggleTodo, deltetTodo } from '../actions';

const Li = styled.li`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-right: 6px;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 5px 10px;
  margin-left: 6px;
  background: red;
  color: #fff;
  border: 1px solid red;
  cursor: pointer;
`

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.lineThrough = this.lineThrough.bind(this);
    this.deltetItem = this.deltetItem.bind(this);
  }
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
      <Li
        style={ { textDecoration: completed ? 'line-through' : 'none' } }
      >
        <Input 
          type="checkbox"
          checked={ completed }
          onClick={ () => { this.lineThrough(id) } }
        />
        { text }
        <Button
          onClick={ () => { this.deltetItem(id) } }
        >
          刪除
        </Button>
      </Li>
    );
  }
}

const action = { toggleTodo, deltetTodo };

export default connect(null, action)(TodoListItem);

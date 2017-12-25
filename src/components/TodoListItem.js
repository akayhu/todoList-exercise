import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deltetTodo } from '../actions';
import { Li, Input, DelButton } from './styled';

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
          readOnly
        />
        { text }
        <DelButton
          onClick={ () => { this.deltetItem(id) } }
        >
          刪除
        </DelButton>
      </Li>
    );
  }
}

const action = { toggleTodo, deltetTodo };

export default connect(null, action)(TodoListItem);

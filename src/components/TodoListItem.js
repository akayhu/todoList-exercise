import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deltetTodo, editTodo } from '../actions';
import { Li, Input, Button, DelButton } from './styled';

const inputStyle = {
  'borderRadius': '3px',
  'padding': '6px 3px',
  'background': 'transparent',
  'color': '#000',
  'border': '1px solid #d0d0d0',
  'cursor': 'pointer'
};

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.lineThrough = this.lineThrough.bind(this);
    this.deltetItem = this.deltetItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.editItemView = this.editItemView.bind(this);
    this.editItemEnd = this.editItemEnd.bind(this);
    this.state = {
      value: '',
      edit: false
    };
  }
  lineThrough(id) {
    const { toggleTodo } = this.props;
    toggleTodo(id);
  }
  deltetItem(id) {
    const { deltetTodo } = this.props;
    deltetTodo(id);
  }
  editItem(event) {
    this.setState({ value: event.target.value });
  }
  editItemEnd(id) {
    const { value } = this.state;
    const { editTodo } = this.props;
    editTodo(id, value);
    this.setState({ edit: false });
  }
  editItemView() {
    this.setState({ edit: true });
  }
  render() {
    const { edit } = this.state;
    const { id, text, completed } = this.props.data;
    return (
      <Li
        style={ { textDecoration: completed ? 'line-through' : 'none' } }
      >
        <Input 
          type="checkbox"
          checked={ completed }
          onChange={ () => { this.lineThrough(id) } }
          readOnly
        />
        {
          edit === false && 
          <span onClick={ this.editItemView }>{ text }</span>
        }
        {
          edit === true &&
          <span>
            <input
              type="text"
              defaultValue={ text }
              style={ inputStyle }
              onChange={ this.editItem }
              autoFocus
            />
            <Button onClick={ () => { this.editItemEnd(id) } }>完成編輯</Button>
          </span>
        }
        <DelButton
          onClick={ () => { this.deltetItem(id) } }
        >
          刪除
        </DelButton>
      </Li>
    );
  }
}

const action = { toggleTodo, deltetTodo, editTodo };

export default connect(null, action)(TodoListItem);

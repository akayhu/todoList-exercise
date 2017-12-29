import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deltetTodo, editTodo } from '../actions';
import { Li, Input, Button, DelButton, EditInput } from './styled';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.lineThrough = this.lineThrough.bind(this);
    this.deltetItem = this.deltetItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.editItemView = this.editItemView.bind(this);
    this.editItemEnd = this.editItemEnd.bind(this);
    this.state = {
      value: this.props.data.text,
      edit: false
    };
  }
  lineThrough(id) {
    this.props.toggleTodo(id);
  }
  deltetItem(id) {
    this.props.deltetTodo(id);
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
  renderEdit(edit, id, text) {
    if(edit) {
      return (
        <span>
          <EditInput
            type="text"
            value={ text }
            onChange={ this.editItem }
          />
          <Button onClick={ () => { this.editItemEnd(id) } }>完成編輯</Button>
        </span>
      )
    } else {
      return (<span onClick={ this.editItemView }>{ text }</span>)
    }
  }
  render() {
    const { edit, value } = this.state;
    const { id, completed } = this.props.data;
    return (
      <Li style={ { textDecoration: completed ? 'line-through' : 'none' } }>
        <Input 
          type="checkbox"
          checked={ completed }
          onChange={ () => { this.lineThrough(id) } }
          readOnly
        />
        { this.renderEdit(edit, id, value) }
        <DelButton onClick={ () => { this.deltetItem(id) } }>刪除</DelButton>
      </Li>
    );
  }
}

const action = { toggleTodo, deltetTodo, editTodo };

export default connect(null, action)(TodoListItem);

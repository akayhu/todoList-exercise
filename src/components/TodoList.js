import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';

const ulStyle = {
  'margin': 0,
  'padding': 0,
  'listStyleType': 'none'
};

class TodoList extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <ul style={ ulStyle }>
        {
          todoList.length > 0 &&
          todoList.map((items, index) => (
            <TodoListItem
              key={ index }
              data={ items }
            />
          ))
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoData
  }
};

export default connect(mapStateToProps)(TodoList);
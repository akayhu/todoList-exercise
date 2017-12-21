import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <ul>
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
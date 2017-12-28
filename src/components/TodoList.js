import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { Ul } from './styled';

class TodoList extends Component {
  renderList(todoList, showFilter) {
    if(todoList.length === 0) return null;

    const renderList = todoList.filter((items, index) => {
      // return showFilter === 'all' ? true : items.completed === showFilter;
      if (showFilter === 'completed' && items.completed) {
        return true;
      } else if (showFilter === 'unCompleted' && !items.completed) {
        return true;
      } else if (showFilter === 'all'){
        return true;
      }
      return false;
    });

    return renderList.map((items, index) => <TodoListItem key={ index } data={ items } />);
  }
  render() {
    const { todoList, showFilter } = this.props;
    return (
      <Ul>
        { this.renderList(todoList, showFilter) }
      </Ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoData,
    showFilter: state.viewFilter
  }
};

export default connect(mapStateToProps)(TodoList);

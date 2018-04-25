import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import { Ul } from './styled';

class TodoList extends Component {
  renderList() {
    const { listData, showFilter, toggleTodoFunc, deltetTodoFunc, editTodoFunc } = this.props;
    if (listData.length === 0) return null;
    const renderListData = listData.filter((items, index) => {
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
    return (
      renderListData.map((items) =>
        <TodoListItem
          key={ items.id }
          data={ items }
          toggleTodoFunc={ toggleTodoFunc }
          deltetTodoFunc={ deltetTodoFunc }
          editTodoFunc={ editTodoFunc }
        />
      )
    );
  }
  render() {
    return (
      <Ul>
        { this.renderList() }
      </Ul>
    );
  }
}

export default TodoList;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { Ul } from './styled';

class TodoList extends Component {
  renderList(todoList, showFilter) {
    if (todoList.length === 0) return null;
    const renderListData = todoList.filter((items, index) => {
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
    return renderListData.map((items) => <TodoListItem key={ items.id } data={ items } />);
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

TodoList.propTypes = {
  todoList: PropTypes.array,
  showFilter: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoData,
    showFilter: state.viewFilter
  }
};

export default connect(mapStateToProps)(TodoList);

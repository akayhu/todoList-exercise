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
    const { todoList, showFilter } = this.props;
    return (
      <ul style={ ulStyle }>
        {
          todoList.length > 0 &&
          todoList.map((items, index) => {
            switch (showFilter) {
              case 'completed':
                return items.completed &&
                  <TodoListItem
                    key={ index }
                    data={ items }
                  />
              case 'unCompleted':
                return !items.completed &&
                  <TodoListItem
                    key={ index }
                    data={ items }
                  />
              default:
                return <TodoListItem
                  key={ index }
                  data={ items }
                />
            }
          })
        }
      </ul>
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

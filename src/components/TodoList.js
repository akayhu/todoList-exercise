import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

class TodoList extends Component {
  render() {
    const { todoList, showFilter } = this.props;
    return (
      <Ul>
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

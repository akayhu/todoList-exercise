import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';
import NavButton from '../components/NavButton';
import { connect } from 'react-redux';
import { addTodo, viewFilter, toggleTodo, deltetTodo, editTodo } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTodoFunc = this.addTodoFunc.bind(this);
    this.chanckFilter = this.chanckFilter.bind(this);
    this.toggleTodoFunc = this.toggleTodoFunc.bind(this);
    this.deltetTodoFunc = this.deltetTodoFunc.bind(this);
    this.editTodoFunc = this.editTodoFunc.bind(this);
  }
  addTodoFunc(inputValue) {
    this.props.addTodo(inputValue);
  }
  chanckFilter(type) {
    this.props.viewFilter(type);
  }
  toggleTodoFunc(id) {
    this.props.toggleTodo(id);
  }
  deltetTodoFunc(id) {
    this.props.deltetTodo(id);
  }
  editTodoFunc(id, value) {
    this.props.editTodo(id, value);
  }
  render() {
    const { todoList, showFilter } = this.props;
    return (
      <div>
        <CreateTodo
          addTodoFunc={ this.addTodoFunc }
        />
        <NavButton
          chanckFilterFunc={ this.chanckFilter }
        />
        <TodoList
          listData={ todoList }
          showFilter={ showFilter }
          toggleTodoFunc={ this.toggleTodoFunc }
          deltetTodoFunc={ this.deltetTodoFunc }
          editTodoFunc={ this.editTodoFunc }
        />
      </div>
    );
  }
}

App.propTypes = {
  addTodo: PropTypes.func,
  viewFilter: PropTypes.func,
  todoList: PropTypes.array,
  showFilter: PropTypes.string,
  toggleTodo: PropTypes.func,
  deltetTodo: PropTypes.func,
  editTodo: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoData,
    showFilter: state.viewFilter
  }
};

const action = { addTodo, viewFilter, toggleTodo, deltetTodo, editTodo };

export default connect(mapStateToProps, action)(App);;

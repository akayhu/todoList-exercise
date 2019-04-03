import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import CreateTodo from '../../components/CreateTodo';
import TodoList from '../../components/TodoList';
import NavButton from '../../components/NavButton';
import { connect } from 'react-redux';
import {
	addTodo,
	viewFilter,
	toggleTodo,
	deltetTodo,
	editTodo
} from '../../actions';

class TodoListMain extends Component {
	addTodoFunc = inputValue => {
		const { addTodo } = this.props;
		addTodo(inputValue);
	}
	chanckFilter = type => {
		const { viewFilter } = this.props;
		viewFilter(type);
	}
	toggleTodoFunc = id => {
		const { toggleTodo } = this.props;
		toggleTodo(id);
	}
	deltetTodoFunc = id => {
		const { deltetTodo } = this.props;
		deltetTodo(id);
	}
	editTodoFunc = (id, value) => {
		const { editTodo } = this.props;
		editTodo(id, value);
	}
	render() {
		const { todoList, showFilter } = this.props;
		return (
			<div className="todoList_main">
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

TodoListMain.propTypes = {
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

const action = {
	addTodo,
	viewFilter,
	toggleTodo,
	deltetTodo,
	editTodo
};

export default connect(mapStateToProps, action)(TodoListMain);

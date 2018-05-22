import { combineReducers } from 'redux';
import todoData from './todoReducer';
import viewFilter from './filterReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const todoApp = combineReducers({
  todoData,
	viewFilter,
	form: reduxFormReducer
});

export default todoApp;

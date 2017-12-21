import { combineReducers } from 'redux';
import todoData from './todoReducer';

const todoApp = combineReducers({
  todoData
});

export default todoApp;

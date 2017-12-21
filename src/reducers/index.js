import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const todoApp = combineReducers({
  todoReducer
});

export default todoApp;

let nextId = 0;

// 新增
const ADD_TODO = 'ADD_TODO';
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  };
};

// 過濾
// const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// export function setVisibilityFilter(filter) {
//   return {
//     type: SET_VISIBILITY_FILTER,
//     filter
//   };
// }

// 畫線
const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
};

// 刪除
const DELETE_TODO = 'DELETE_TODO';
export function deltetTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
};
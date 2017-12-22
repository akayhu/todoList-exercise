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
const VIEW_FILTER = 'VIEW_FILTER';
export function viewFilter(filter) {
  return {
    type: VIEW_FILTER,
    filter
  };
}

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
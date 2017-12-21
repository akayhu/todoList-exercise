let nextId = 0;

const ADD_TODO = 'ADD_TODO';
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextId++,
    text
  };
}

// const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// export function setVisibilityFilter(filter) {
//   return {
//     type: SET_VISIBILITY_FILTER,
//     filter
//   };
// }

// const TOGGLE_TODO = 'TOGGLE_TODO';
// export function toggleTodo(id) {
//   return {
//     type: TOGGLE_TODO,
//     id
//   };
// }
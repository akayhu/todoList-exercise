const todoData = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todoItem =>
        (todoItem.id === action.id) ? { ...todoItem, completed: !todoItem.completed } : todoItem
      );
    case 'DELETE_TODO':
      return state.filter(todoItem => (!(todoItem.id === action.id)));
    default:
      return state;
  }
}

export default todoData;

const initState = {
	state: []
};

const todoData = (state = initState, action) => {
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
      // state.map((todoItem, index) => {
      //   if(todoItem.id === action.id) {
      //     state.splice(index, 1);
      //   }
      // });
      // return state;
      return state.filter(todoItem => (!(todoItem.id === action.id)));
    default:
      return state;
  }
}

export default todoData;

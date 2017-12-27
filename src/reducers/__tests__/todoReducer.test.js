import todoReducer from '../todoReducer';

describe('todoReducer', () => {
  it('todoReducer ADD_TODO', () => {
    const ADD_TODO_action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'test word'
    };
    const ADD_TODO_response = [
      {
        id: 0,
        text: 'test word',
        completed: false
      }
    ];
    expect(todoReducer(undefined, ADD_TODO_action)).toEqual(ADD_TODO_response)
  })
})

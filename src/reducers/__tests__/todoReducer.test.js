import todoReducer from '../todoReducer';

describe('todoReducer', () => {
  it('todoReducer OTHER', () => {
    const OTHER_action = {
      type: 'OTHER'
    };
    const OTHER_response = [];
    expect(todoReducer(undefined, OTHER_action)).toEqual(OTHER_response)
  }),
  it('todoReducer ADD_TODO', () => {
    const ADD_TODO_action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'test word'
    };
    const ADD_TODO_response = [{
      id: 0,
      text: 'test word',
      completed: false
    }];
    expect(todoReducer(undefined, ADD_TODO_action)).toEqual(ADD_TODO_response)
  }),
  it('todoReducer TOGGLE_TODO', () => {
    const DTOGGLE_TODO_state = [{
      id: 0,
      text: 'test word',
      completed: false
    }];
    const TOGGLE_TODO_action = {
      type: 'TOGGLE_TODO',
      id: 0
    };
    const TOGGLE_TODO_response = [{
      id: 0,
      text: 'test word',
      completed: true
    }];
    expect(todoReducer(DTOGGLE_TODO_state, TOGGLE_TODO_action)).toEqual(TOGGLE_TODO_response)
  }),
  it('todoReducer DELETE_TODO', () => {
    const DELETE_TODO_state = [{
      id: 0,
      text: 'test word',
      completed: false
    }];
    const DELETE_TODO_action = {
      type: 'DELETE_TODO',
      id: 0
    };
    const DELETE_TODO_response = [];
    expect(todoReducer(DELETE_TODO_state, DELETE_TODO_action)).toEqual(DELETE_TODO_response)
  }),
  it('todoReducer EDIT_TODO', () => {
    const EDIT_TODO_state = [{
      id: 0,
      text: 'test word',
      completed: false
    }];
    const EDIT_TODO_action = {
      type: 'EDIT_TODO',
      id: 0,
      text: 'edit test word'
    };
    const EDIT_TODO_response = [{
      id: 0,
      text: 'edit test word',
      completed: false
    }];
    expect(todoReducer(EDIT_TODO_state, EDIT_TODO_action)).toEqual(EDIT_TODO_response)
  })
})

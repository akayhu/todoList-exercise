import * as actions from '../index';

describe('addTodoAction', () => {
  it('addTodoAction', () => {
    const text = 'test word';
    const responseDate = {
      type: actions.ADD_TODO,
      id: 0,
      text
    };
    expect(actions.addTodo(text)).toEqual(responseDate)
  }),
  it('viewFilterAction', () => {
    const filter = 'all';
    const responseDate = {
      type: actions.VIEW_FILTER,
      filter
    };
    expect(actions.viewFilter(filter)).toEqual(responseDate)
  }),
  it('toggleTodoAction', () => {
    const id = 0;
    const responseDate = {
      type: actions.TOGGLE_TODO,
      id
    };
    expect(actions.toggleTodo(id)).toEqual(responseDate)
  }),
  it('deltetTodoAction', () => {
    const id = 0;
    const responseDate = {
      type: actions.DELETE_TODO,
      id
    };
    expect(actions.deltetTodo(id)).toEqual(responseDate)
  }),
  it('editTodoAction', () => {
    const id = 0;
    const text = 'edit test';
    const responseDate = {
      type: actions.EDIT_TODO,
      id,
      text
    };
    expect(actions.editTodo(id, text)).toEqual(responseDate)
  })
})

import * as actions from '../index';

describe('actions', () => {

  beforeEach(() => {
    jest.resetModules();
  });

  describe('type: ADD_TODO', () => {
    it('ADD_TODO_action', () => {
      const text = 'test word';
      const responseDate = {
        type: actions.ADD_TODO,
        id: 0,
        text
      };
      expect(actions.addTodo(text)).toEqual(responseDate)
    });
  });

  describe('type: VIEW_FILTER', () => {
    it('VIEW_FILTER_ction', () => {
      const filter = 'all';
      const responseDate = {
        type: actions.VIEW_FILTER,
        filter
      };
      expect(actions.viewFilter(filter)).toEqual(responseDate)
    });
  });

  describe('type: TOGGLE_TODO', () => {
    it('TOGGLE_TODO_action', () => {
      const id = 0;
      const responseDate = {
        type: actions.TOGGLE_TODO,
        id
      };
      expect(actions.toggleTodo(id)).toEqual(responseDate)
    });
  });

  describe('type: DELETE_TODO', () => {
    it('DELETE_TODO_action', () => {
      const id = 0;
      const responseDate = {
        type: actions.DELETE_TODO,
        id
      };
      expect(actions.deltetTodo(id)).toEqual(responseDate)
    });
  });
  
  describe('type: EDIT_TODO', () => {
    it('EDIT_TODO_action', () => {
      const id = 0;
      const text = 'edit test';
      const responseDate = {
        type: actions.EDIT_TODO,
        id,
        text
      };
      expect(actions.editTodo(id, text)).toEqual(responseDate)
    });
  });
  
});

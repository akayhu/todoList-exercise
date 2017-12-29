import filterReducer from '../filterReducer';

describe('filterReducer', () => {

  beforeEach(() => {
    jest.resetModules();
  });

  describe('filterReducer all', () => {
    it('filterReducer all', () => {
      const responseAllDate = 'all';
      expect(filterReducer(undefined, {})).toEqual(responseAllDate)
    });
  });

  describe('filterReducer completed', () => {
    it('filterReducer completed', () => {
      const completedAction = { 
        type: 'VIEW_FILTER',
        filter: 'completed'
      };
      const responseCompletedDate = 'completed';
      expect(filterReducer(undefined, completedAction)).toEqual(responseCompletedDate)
    });
  });
  
  describe('filterReducer unCompleted', () => {
    it('filterReducer unCompleted', () => {
      const unCompletedAction = { 
        type: 'VIEW_FILTER',
        filter: 'unCompleted'
      };
      const responseUnCompletedDate = 'unCompleted';
      expect(filterReducer(undefined, unCompletedAction)).toEqual(responseUnCompletedDate)
    });
  });
  
});

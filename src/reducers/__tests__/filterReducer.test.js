import filterReducer from '../filterReducer';

describe('filterReducer', () => {
  it('filterReducer all', () => {
    const responseAllDate = 'all';
    expect(filterReducer(undefined, {})).toEqual(responseAllDate)
  }),
  it('filterReducer completed', () => {
    const completedAction = { 
      type: 'VIEW_FILTER',
      filter: 'completed'
    };
    const responseCompletedDate = 'completed';
    expect(filterReducer(undefined, completedAction)).toEqual(responseCompletedDate)
  }),
  it('filterReducer unCompleted', () => {
    const unCompletedAction = { 
      type: 'VIEW_FILTER',
      filter: 'unCompleted'
    };
    const responseUnCompletedDate = 'unCompleted';
    expect(filterReducer(undefined, unCompletedAction)).toEqual(responseUnCompletedDate)
  })
})

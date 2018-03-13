let manageBoard = require('../../lib/ManageBoard.js')

describe('getScore function', () => {
  it('should return "10" from a board where the player has a winning layout', () => {
    expect(manageBoard.getScore(['x', 'x', 'x', '3', '4', '5', '6', '7', '8'], 'x', 'y')).toEqual(10);
  });
  it('should return "-10" from a board where the opponent has a winning layout', () => {
    expect(manageBoard.getScore(['y', 'y', 'y', '3', '4', '5', '6', '7', '8'], 'x', 'y')).toEqual(-10);
  });
  it('should return "0" from a board where neither player has a winning layout', () => {
    expect(manageBoard.getScore(['x', 'x', '2', '3', '4', '5', '6', '7', '8'], 'x','y')).toEqual(0);
  });
});

describe('getFreeIndexes function', () => {
  it('should return array of indexes of free spaces from a given board', () => {
    expect(manageBoard.getFreeIndexes(['y', 'x', 'y', 'y', '4', '5', 'x', 'x', '8'], ['x', 'y'])).toEqual([4, 5, 8]);
  });
})

var checkWinner = require('../../lib/CheckWinner.js')

describe('flattenArray function', () => {
  it('should return the correct 1d array from a 2d array', () => {
    expect(checkWinner.flattenArr([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return the correct 1d array from a 1d array', () => {
    expect(checkWinner.flattenArr([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('checkWinningBoard function', () => {
  it('should throw an error if given an array which does not contain a perfect square number of elements', () => {
    expect(() => { checkWinner.checkWinningBoard([[[1, 2, 3]], [[4, 5]]]); } ).toThrow(new Error("Input array total number of elements must be a perfect square"));
  });

  it('should return true for a row', () => {
    expect(checkWinner.checkWinningBoard( ['x', 'x', 'x', '3', '4', '5', '6', '7', '8'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['0', '1', '2', '3', '4', '5', 'x', 'x', 'x'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['x', 'x', 'x', 'x', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', 'x', 'x', 'x', 'x'], 'x')).toBe(true);
  });

  it('should return true for a column', () => {
    expect(checkWinner.checkWinningBoard( ['x', '1', '2', 'x', '4', '5', 'x', '7', '8'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['0', '1', 'x', '3', '4', 'x', '6', '7', 'x'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['x', '1', '2', '3', 'x', '5', '6', '7', 'x', '9', '10', '11', 'x', '13', '14', '15'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['-', '1', '2', 'x', '4', '5', '6', 'x', '8', '9', '10', 'x', '12', '13', '14', 'x'], 'x')).toBe(true);
  });

  it('should return true for a diagonal', () => {
    expect(checkWinner.checkWinningBoard( ['x', '1', '2', '-', 'x', '5', '6', '7', 'x'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['0', '1', 'x', '3', 'x', '5', 'x', '7', '8'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['x', '1', '2', '3', '4', 'x', '6', '7', '8', '9', 'x', '11', '12', '13', '14', 'x'], 'x')).toBe(true);
    expect(checkWinner.checkWinningBoard( ['0', '1', '2', 'x', '4', '5', 'x', '7', '8', 'x', '10', '11', 'x', '13', '14', '15'], 'x')).toBe(true);
  });

  it('should return false when no row, column or diagonal', () => {
    expect(checkWinner.checkWinningBoard( ['x', '1', '2', '3', '4', '5', 'x', '7', '8'], 'x')).toBe(false);
    expect(checkWinner.checkWinningBoard( ['0', '1', '2', '3', '4', '5', '6', '7', '8'], 'x')).toBe(false);
  });

  it('should return false when winning pattern is present for different target value', () => {
    expect(checkWinner.checkWinningBoard( ['x', 'x', 'x', '3', '4', '5', '6', '7', '8'], 'y')).toBe(false);
    expect(checkWinner.checkWinningBoard( ['x', '1', '2', 'x', '4', '5', 'x', '7', '8'], 'y')).toBe(false);
    expect(checkWinner.checkWinningBoard( ['x', '1', '2', '3', 'x', '5', '6', '7', 'x'], 'y')).toBe(false);
  });
})

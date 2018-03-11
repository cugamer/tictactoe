var checkWinner = require('../../lib/jasmine_examples/CheckWinner.js')

describe('flattenArray function', function() {
  it('should return the correct 1d array from a 2d array', function() {
    expect(checkWinner.flattenArr([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  }),
  it('should return the correct 1d array from a 1d array', function() {
    expect(checkWinner.flattenArr([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  })
  // xit(it('should throw an error if given an array greater than 2d', function() {
  //   expect(function() { checkWinner.flattenArr([[[1, 2, 3]], [[4, 5, 6]]]); } ).toThrow(new Error('Input array must be 2d or less'));
  // }))
});

describe('check_winning_board function', function() {
  it('should return true for a row', function() {
    expect(checkWinner.check_winning_board(['x', 'x', 'x', '-', '-', '-', '-', '-', '-'], 'x')).toBe(true);
    expect(checkWinner.check_winning_board(['-', '-', '-', '-', '-', '-', 'x', 'x', 'x'], 'x')).toBe(true);
    expect(checkWinner.check_winning_board(['x', 'x', 'x', 'x', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], 'x')).toBe(true);
    expect(checkWinner.check_winning_board(['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'x', 'x', 'x', 'x'], 'x')).toBe(true);
  }),
  it('should return true for a column', function() {
    expect(checkWinner.check_winning_board( ['x', '-', '-', 'x', '-', '-', 'x', '-', '-'], 'x')).toBe(true);
    expect(checkWinner.check_winning_board( ['-', '-', 'x', '-', '-', 'x', '-', '-', 'x'], 'x')).toBe(true);
    expect(checkWinner.check_winning_board( ['x', '-', '-', '-', 'x', '-', '-', '-', 'x', '-', '-', '-', 'x', '-', '-', '-'], 'x')).toBe(true);
    expect(checkWinner.check_winning_board( ['-', '-', '-', 'x', '-', '-', '-', 'x', '-', '-', '-', 'x', '-', '-', '-', 'x'], 'x')).toBe(true);
  }),
  it('should return true for a diagonal', function() {
    expect(checkWinner.check_winning_board( ['x', '-', '-', '-', 'x', '-', '-', '-', 'x'], 'x')).toBe(true);
  }),
  it('should return false when no row, column or diagonal', function() {
    expect(checkWinner.check_winning_board( ['x', '-', '-', '-', '-', '-', 'x', '-', '-'], 'x')).toBe(false);
    expect(checkWinner.check_winning_board( ['-', '-', '-', '-', '-', '-', '-', '-', '-'], 'x')).toBe(false);
  }),
  it('should return false when winning pattern is present for different target value', function() {
    expect(checkWinner.check_winning_board(['x', 'x', 'x', '-', '-', '-', '-', '-', '-'], 'y')).toBe(false);
    expect(checkWinner.check_winning_board( ['x', '-', '-', 'x', '-', '-', 'x', '-', '-'], 'y')).toBe(false);
    expect(checkWinner.check_winning_board( ['x', '-', '-', '-', 'x', '-', '-', '-', 'x'], 'y')).toBe(false);
  })
})

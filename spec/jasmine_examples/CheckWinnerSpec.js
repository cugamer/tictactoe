var checkWinner = require('../../lib/jasmine_examples/CheckWinner.js')

describe('flatten array function', function() {
  it('should return the correct 1d array from a 2d array', function() {
    expect(checkWinner.flattenArr([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  }),
  it('should return the correct 1d array from a 1d array', function() {
    expect(checkWinner.flattenArr([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  }),
  xit(it('should throw an error if given an array greater than 2d', function() {
    expect(function() { checkWinner.flattenArr([[[1, 2, 3]], [[4, 5, 6]]]); } ).toThrow(new Error('Input array must be 2d or less'));
  }))
});

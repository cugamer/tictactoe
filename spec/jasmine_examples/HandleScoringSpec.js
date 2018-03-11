let handleScoring = require('../../lib/HandleScoring.js')

describe('getScore function', function() {
  it('should return "10" from a board where the player has a winning layout', () => {
    expect(handleScoring.getScore(['x', 'x', 'x', '-', '-', '-', '-', '-', '-'], 'x', 'y')).toEqual(10);
  });
  it('should return "-10" from a board where the opponent has a winning layout', () => {
    expect(handleScoring.getScore(['y', 'y', 'y', '-', '-', '-', '-', '-', '-'], 'x', 'y')).toEqual(-10);
  });
  it('should return "0" from a board where neither player has a winning layout', () => {
    expect(handleScoring.getScore(['x', 'x', '-', '-', '-', '-', '-', '-', '-'], 'x','y')).toEqual(0);
  });
})

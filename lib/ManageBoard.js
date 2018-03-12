let checkWinner = require('./CheckWinner.js');

exports.getScore = function(board, player, opp) {
  if(checkWinner.checkWinningBoard(board, player) == true) {
    return  10;
  } else if(checkWinner.checkWinningBoard(board, opp) == true) {
    return -10;
  } else {
    return 0;
  }
}

exports.getFreeIndexes = function(board, values) {
  return board.reduce(function(accumulator, cv, index) {
      if(!values.includes(cv)) {
        accumulator.push(index);
      }
      return accumulator;
    },
    []
  );
}

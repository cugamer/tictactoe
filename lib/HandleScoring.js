let checkWinner = require('./CheckWinner.js')

exports.getScore = function(board, player, opp) {
  if(checkWinner.checkWinningBoard(board, player) == true) {
    return  10;
  } else if(checkWinner.checkWinningBoard(board, opp) == true) {
    return -10;
  } else {
    return 0;
  }
}

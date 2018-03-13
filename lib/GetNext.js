var manageBoard = require('./ManageBoard.js');
var checkWinner = require('./CheckWinner.js');

exports.getNext = function(newBoard, playerOne, playerTwo){
  miniMax = function(newBoard, player) {
    var availSpots = manageBoard.getFreeIndexes(newBoard, [playerOne, playerTwo]);
    if(checkWinner.checkWinningBoard(newBoard, playerOne)) {
      return { score: -10};
    } else if (checkWinner.checkWinningBoard(newBoard, playerTwo)) {
      return {score: 10};
    } else if (availSpots.length === 0) {
      return { score: 0 };
    }

    var moves = [];

    for(var i = 0; i < availSpots.length; i++) {
      var move = { index: newBoard[availSpots[i]] };

      newBoard[availSpots[i]] = player;
      if(player === playerTwo) {
        var result = miniMax(newBoard, playerOne);
        move.score = result.score;
      } else {
        var result = miniMax(newBoard, playerTwo);
        move.score = result.score;
      }

      newBoard[availSpots[i]] = move.index;
      moves.push(move);
    }

    var bestMove;
    if(player === playerTwo) {
      var bestScore = -100000;
      for(var i = 0; i < moves.length; i++) {
        if(moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      var bestScore = 100000;
      for(var i = 0; i < moves.length; i++) {
        if(moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  }

  return miniMax(newBoard, playerOne)
}

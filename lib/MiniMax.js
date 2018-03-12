var manageBoard = require('./ManageBoard.js');
var checkWinner = require('./CheckWinner.js');

var playerOne = 'x';
var playerTwo = 'o';
var itr = 0;

miniMax = function(newBoard, player) {
  itr++;
  var availSpots = manageBoard.getFreeIndexes(newBoard, ['x', 'o']);
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

    // Base case
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

var arr1 = ['o', '1', 'x',
            'x',  4,   5,
            'x', 'o', 'o']
var arr2 = ['o', 'x',  2,
            'o',  4,   5,
            'x',  7,  'x']
console.log(miniMax(arr1, playerOne));
console.log(miniMax(arr2, playerTwo));

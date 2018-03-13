let miniMax = require('../../lib/GetNext.js')
var checkWinner = require('../../lib/CheckWinner.js')

describe('getNext function', () => {
  it('should never win or loose when going against itself', () => {
    let winner = false;
    for(i = 0; i < 50; i++) {
      let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      board[Math.floor(Math.random() * 9)] = 'x'
      currentPlayer = 'y';
      opponent = 'x';
      var moveCount = 0;
      while(moveCount < 9) {
        moveCount++;
        board[miniMax.getNext(board, currentPlayer, opponent).index] = currentPlayer;
        if(checkWinner.checkWinningBoard(board, currentPlayer)) {
          winner = true;
          break;
        }
        if(currentPlayer === 'x'){
          currentPlayer = 'y';
          opponent = 'x';
        } else {
          currentPlayer = 'x';
          opponent = 'y';
        }
      }
    }
    expect(winner).toBe(false);
  });
});

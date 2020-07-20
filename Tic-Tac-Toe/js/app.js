/***** Modules *****/

// Game board
const board = (() => {
  const gameboard = [, , , , , , , , ];

  // Check for undefined values in array
  const empty = currVal => currVal === undefined;

  function hiddenBoard() {
    return gameboard;
  }

  function hiddenEmpty() {
    return empty;
  }

  return {
    hiddenBoard,
    hiddenEmpty
  };
})();

// Game Flow
const gameFlowController = (() => {
  const {
    hiddenEmpty
  } = board;

  function _empty(arr) {
    arr === undefined;
  }

  const boardArr = board.hiddenBoard();

  function _pushGameboard(elem, index, array) {
    //elem.innerText = board.gameboard[index];
    // How do I choose player1 (X) or player2 (O)
    // player1.boardSplice() || player2.boardSplice()

    // Checks for empty array and nil/nil score
    if (array.every(hiddenEmpty()) && player1.score === 0 && player2.score === 0) {
      player1.boardSplice(index, 'X');
      elem.innerText = array[index];
    } else {
      player2.boardSplice(index, 'O');
      elem.innerText = array[index];
    }
  }

  const squares = document.querySelectorAll('.square');

  // Change Nodelist to array to grab index
  const squaresArr = [...squares];

  squaresArr.forEach(square => {
    square.addEventListener('click', _pushGameboard.bind(square, square, squaresArr.indexOf(square), boardArr))
  });



})();

/***** Factory Functions *****/

// Players
const Player = (piece) => {
  let score = 0;

  const boardArr = board.hiddenBoard();

  // 7 Winning conditions
  if ((boardArr[0] && boardArr[1] && boardArr[2] === 'piece') ||
    (boardArr[3] && boardArr[4] && boardArr[5] === 'piece') ||
    (boardArr[6] && boardArr[7] && boardArr[8] === 'piece') ||
    (boardArr[0] && boardArr[4] && boardArr[8] === 'piece') ||
    (boardArr[2] && boardArr[4] && boardArr[6] === 'piece') ||
    (boardArr[0] && boardArr[3] && boardArr[6] === 'piece') ||
    (boardArr[1] && boardArr[4] && boardArr[7] === 'piece') ||
    (boardArr[2] && boardArr[5] && boardArr[8] === 'piece')) {
    // Modal function pops
    // Player wins!
    score++;
  }

  // Player can splice element in board array
  function boardSplice(index, piece) {
    boardArr.splice(index, 1, piece);
    console.log(piece);
  }

  function pushPlayerChar(elem, piece) {
    if (elem === undefined) {
      elem.innerText = piece;
    }
    // elem.innerText = text;
  }

  return {
    score,
    boardSplice
  };
}

const player1 = Player('X');
const player2 = Player('O');
/*
  Eventlistener on squares listening for a click & adds either X or O value to square
  If X or O value is present don't allow the click to produce a value

  Player 1 = X
  Player 2 = O
  If player 1 clicks on square add X
  If player 2 clicks on square add O


*/
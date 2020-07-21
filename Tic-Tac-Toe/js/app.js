/***** Modules *****/

// Game Board Module
const board = (() => {
  const gameboard = [, , , , , , , , ];

  // Check for undefined values in array
  const empty = currVal => currVal === undefined;

  // Find greatest occurance of string in gameboard
  const mode = array =>
    array.reduce(
      (a, b, i, arr) =>
      (arr.filter(v => v === a).length > arr.filter(v => v === b).length ? a : b),
      null);

  function hiddenBoard() {
    return gameboard;
  }

  function hiddenEmpty() {
    return empty;
  }

  function hiddenMode() {
    return mode;
  }

  return {
    hiddenBoard,
    hiddenEmpty,
    hiddenMode
  };
})();

// Game Flow Module
const gameFlowController = (() => {
  const {
    hiddenEmpty,
    hiddenMode,
    hiddenBoard
  } = board;

  const boardArr = hiddenBoard();
  const mode = hiddenMode();
  const empty = hiddenEmpty();

  function _pushGameboard(elem, index, array) {
    // If array element is not undefined return
    if (array[index] !== undefined) {
      console.log('void')
      return;
    }
    // Checks for empty array and nil/nil score
    if (array.every(empty) && player1.score === 0 && player2.score === 0) {
      player1.boardSplice(index, 'X');
      elem.innerText = array[index];
    } else if (mode(array) === 'X') {
      player2.boardSplice(index, 'O');
      elem.innerText = array[index];
      player2.winningCondition('O');
    } else if (mode(array) === 'O') {
      player1.boardSplice(index, 'X');
      elem.innerText = array[index];
      player1.winningCondition('X');
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

// Player Factory Function
const Player = (piece) => {
  let score = 0;

  const boardArr = board.hiddenBoard();

  function winningCondition(piece) {
    console.log(piece);
    if ((boardArr[0] === piece && boardArr[1] === piece && boardArr[2] === piece) ||
      (boardArr[3] === piece && boardArr[4] === piece && boardArr[5] === piece) ||
      (boardArr[6] === piece && boardArr[7] === piece && boardArr[8] === piece) ||
      (boardArr[0] === piece && boardArr[4] === piece && boardArr[8] === piece) ||
      (boardArr[2] === piece && boardArr[4] === piece && boardArr[6] === piece) ||
      (boardArr[0] === piece && boardArr[3] === piece && boardArr[6] === piece) ||
      (boardArr[1] === piece && boardArr[4] === piece && boardArr[7] === piece) ||
      (boardArr[2] === piece && boardArr[5] === piece && boardArr[8] === piece)) {
      console.log(`you win`);
      // Modal function pops
      // Player wins!
      this.score++;
    } else {
      void(0);
    }
  }
  // 7 Winning conditions

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
    boardSplice,
    winningCondition
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
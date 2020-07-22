/***** Modules *****/

// Game Board Module
const board = (() => {
  const gameboard = [, , , , , , , , ];

  // Check for undefined values in array
  const empty = currVal => currVal === undefined;

  // Check for existence of values in array
  const full = (currVal, i, boardArr) => currVal in boardArr;

  // Find greatest occurance of string in gameboard
  const mode = array =>
    array.reduce(
      (a, b, i, arr) => {
        if (arr.filter(v => v === a).length > arr.filter(v => v === b).length) {
          return a;
        } else if (arr.filter(v => v === a).length < arr.filter(v => v === b).length) {
          return b;
        } else if (arr.filter(v => v === a).length === arr.filter(v => v === b).length) {
          return (a === 'O' ? a : b);
        }
      });

  function hiddenBoard() {
    return gameboard;
  }

  function hiddenEmpty() {
    return empty;
  }

  function hiddenMode() {
    return mode;
  }

  function hiddenFull() {
    return full;
  }

  return {
    hiddenBoard,
    hiddenEmpty,
    hiddenMode,
    hiddenFull
  };
})();

// Game Flow Module
const gameFlowController = (() => {
  const {
    hiddenEmpty,
    hiddenMode,
    hiddenBoard,
    hiddenFull
  } = board;

  const boardArr = hiddenBoard();
  const mode = hiddenMode();
  const empty = hiddenEmpty();
  const full = hiddenFull();

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
    } /* Checks X > O */
    else if (mode(array) === 'X') {
      player2.boardSplice(index, 'O');
      elem.innerText = array[index];
      // player2.winningCondition('O');
    } /* Checks O > X */
    else if (mode(array) === 'O') {
      player1.boardSplice(index, 'X');
      elem.innerText = array[index];
      // player1.winningCondition('X');
    }
    //  else if (mode(array) === 'Equal') {
    //   player1.boardSplice(index, 'X');
    //   elem.innerText = array[index];
    // }

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
  const {
    hiddenBoard,
    hiddenFull
  } = board;

  const boardArr = hiddenBoard();
  const full = hiddenFull();

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
    } else if (boardArr) {
      console.log(`tie`)
    } else {
      void(0);
    }
  }
  // 7 Winning conditions

  // Player can splice element in board array
  function boardSplice(index, piece) {
    boardArr.splice(index, 1, piece);
    // console.log(piece);
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
/***** Modules *****/

// Game board
const board = (() => {
  const gameboard = ['', '', '', '', '', '', '', '', ''];

  function _empty(arr) {
    arr === undefined;
  }

  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    // square.addEventListener('click', _pushPlayerChar.bind(square, square, 'X'));
  });

  function hiddenBoard() {
    return gameboard;
  }

  return {
    hiddenBoard
  };
})();

// Game Flow
const gameFlowController = (() => {

  function _empty(arr) {
    arr === undefined;
  }

  const boardArray = board.hiddenBoard();

  function _pushGameboard(elem, index, array) {
    //elem.innerText = board.gameboard[index];
    // How do I choose player1 (X) or player2 (O)
    // player1.boardSplice() || player2.boardSplice()

    // if (_empty(array) && player1.score === 0 && player2.score === 0) {

    // player1.boardSplice(index, 'X');
    // elem.innerText = boardArray[index];
    console.log(elem, index, array)
    // }
  }

  // Score has to be 0 - 0 && array === undefined
  const squares = document.querySelectorAll('.square');

  const squaresArr = [...squares];

  squaresArr.forEach(square => {
    square.addEventListener('click', _pushGameboard.bind(square, square, squaresArr.indexOf(square), boardArray))
  });



})();

/***** Factory Functions *****/

// Players
const Player = (piece) => {
  let score = 0;
  const {
    hiddenBoard
  } = board;

  // 7 Winning conditions
  if ((hiddenBoard[0] && hiddenBoard[1] && hiddenBoard[2] === 'piece') ||
    (hiddenBoard[3] && hiddenBoard[4] && hiddenBoard[5] === 'piece') ||
    (hiddenBoard[6] && hiddenBoard[7] && hiddenBoard[8] === 'piece') ||
    (hiddenBoard[0] && hiddenBoard[4] && hiddenBoard[8] === 'piece') ||
    (hiddenBoard[2] && hiddenBoard[4] && hiddenBoard[6] === 'piece') ||
    (hiddenBoard[0] && hiddenBoard[3] && hiddenBoard[6] === 'piece') ||
    (hiddenBoard[1] && hiddenBoard[4] && hiddenBoard[7] === 'piece') ||
    (hiddenBoard[2] && hiddenBoard[5] && hiddenBoard[8] === 'piece')) {
    // Modal function pops
    // Player wins!
    score++;
  }

  // Player can splice element in board array
  function boardSplice(index, piece) {
    gameboard.splice(hiddenBoard[index], 1, piece);
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
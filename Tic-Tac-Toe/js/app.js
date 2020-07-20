/***** Modules *****/

// Game board
const board = (() => {
  const gameboard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  function _empty(arr) {
    arr === undefined;
  }

  // function _switchText() {
  //   if (_gameboard.every(_empty)) {
  //     return 'X';
  //   } else if () {
  //
  //   }
  // }


  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    // square.addEventListener('click', _pushPlayerChar.bind(square, square, 'X'));
  });


  return {
    gameboard
  };
})();

// Game Flow
const gameFlowController = (() => {

  function pushGameboard(elem, index, array) {
    //elem.innerText = board.gameboard[index];
  }

  const squares = document.querySelectorAll('.square');
  squares.forEach(pushGameboard);



})();

/***** Factory Functions *****/

// Players
const Player = (piece) => {
  let score = 0;
  const {
    gameboard
  } = board;

  // 7 Winning conditions
  if ((gameboard[0] && gameboard[1] && gameboard[2] === 'piece') ||
    (gameboard[3] && gameboard[4] && gameboard[5] === 'piece') ||
    (gameboard[6] && gameboard[7] && gameboard[8] === 'piece') ||
    (gameboard[0] && gameboard[4] && gameboard[8] === 'piece') ||
    (gameboard[2] && gameboard[4] && gameboard[6] === 'piece') ||
    (gameboard[0] && gameboard[3] && gameboard[6] === 'piece') ||
    (gameboard[1] && gameboard[4] && gameboard[7] === 'piece') ||
    (gameboard[2] && gameboard[5] && gameboard[8] === 'piece')) {
    // Modal function pops
    // Player wins!
    score++;
  }

  // Player can splice element in board array
  function boardSplice(pos, piece) {
    b.splice(gameboard[pos], 1, piece);
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
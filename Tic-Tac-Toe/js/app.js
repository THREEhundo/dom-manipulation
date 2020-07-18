/***** Modules *****/

// Game board
const board = (() => {
  const gameboard = ['0', '1', '2', '3', '4', '5', '6', '7', '8', ];

  function pushPlayerChar(elem, text) {
    return console.log(elem);
    // elem.innerText = text;
  }

  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('click', pushPlayerChar.bind(square, square, 'X'));
  });


  return {
    gameboard
  };
})();

// Game Flow
const displayController = (() => {

  function pushGameboard(elem, index, array) {
    elem.innerText = board.gameboard[index];
  }

  const squares = document.querySelectorAll('.square');
  squares.forEach(pushGameboard);


})();

/***** Factory Functions *****/

// Players
const Player = (piece) => {
  let score = 0;
  const b = board.gameboard;

  // 7 Winning conditions
  if ((b[0] && b[1] && b[2] === 'piece') ||
    (b[3] && b[4] && b[5] === 'piece') ||
    (b[6] && b[7] && b[8] === 'piece') ||
    (b[0] && b[4] && b[8] === 'piece') ||
    (b[2] && b[4] && b[6] === 'piece') ||
    (b[0] && b[3] && b[6] === 'piece') ||
    (b[1] && b[4] && b[7] === 'piece') ||
    (b[2] && b[5] && b[8] === 'piece')) {
    // Modal function pops
    // Player wins!
    score++
  }

  return {
    score
  }
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
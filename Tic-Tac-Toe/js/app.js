/***** Modules *****/

// Game board
const board = (() => {
  const gameboard = ['', 'O', 'X', '', 'X', 'O', 'X', '', '', ];

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
const Player = () => {
  let score = 0;

}
/***** Modules *****/

// Game Board Module
const board = (() => {
  let gameboard = [];

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

  // Reset gameboard
  // const resetGameboard = (gameboard) => gameboard = [, , , , , , , , , ];
  const resetGameboard = () => {
    while (gameboard.length > 0) {
      gameboard.pop();
    }
  }

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
    hiddenFull,
    resetGameboard
  };
})();

// Game Flow Module
const gameFlowController = (() => {
  const {
    hiddenEmpty,
    hiddenMode,
    hiddenBoard,
    hiddenFull,
    resetGameboard
  } = board;

  const boardArr = hiddenBoard();
  const mode = hiddenMode();
  const empty = hiddenEmpty();
  const full = hiddenFull();

  let movesLeft = [null, null, null, null, null, null, null, null, null];

  const pushGameboard = (elem, index, array) => {
    // If array element is not undefined return
    console.log(array);
    if (array[index] !== undefined) {
      return;
    }
    // Checks for empty array and nil/nil score
    // && player1.getScore() === 0 && player2.getScore() === 0
    if (array.every(empty)) {
      movesLeft.pop();
      console.log(movesLeft.length);
      player1.boardSplice(index, 'X');
      elem.innerText = array[index];
    } /* Checks X > O */
    else if (mode(array) === 'X') {
      movesLeft.pop();
      console.log(movesLeft.length);
      player2.boardSplice(index, 'O');
      elem.innerText = 'O';
      if (movesLeft.length < 5 && movesLeft.length > 0) {
        movesLeft.pop();
        console.log(movesLeft.length);
        player2.winningCondition('O');
      } else if (movesLeft.length === 9) {
        // Modal
      }
    } /* Checks O > X */
    else if (mode(array) === 'O') {
      movesLeft.pop();
      console.log(movesLeft.length);
      player1.boardSplice(index, 'X');
      elem.innerText = 'X';
      console.log(`Moves left: ${movesLeft}`);
      if (movesLeft.length < 5 && movesLeft.length > 0) {
        console.log(`if Moves left: ${movesLeft}`);
        movesLeft.pop();
        console.log(movesLeft.length);
        player1.winningCondition('X');
      } else if (movesLeft.length === 9) {
        // Modal
      }
    }
  }

  const resetMovesLeft = () => movesLeft = [null, null, null, null, null, null, null, null, null];

  return {
    pushGameboard,
    resetMovesLeft
  }
})();

// View Module

const view = (() => {
  const {
    pushGameboard,
    resetMovesLeft
  } = gameFlowController;

  const {
    hiddenBoard,
    resetGameboard
  } = board;

  const modal = document.querySelector('.modal');
  const winnerName = document.querySelector('#winner');
  const modalContainer = document.querySelector('.container');
  const playerScore = document.querySelector("#player1score");
  const compScore = document.querySelector('#player2score');
  const winnerScore = document.querySelector('#score');
  const button = document.querySelector('button');
  const boardArr = hiddenBoard();

  // Scoreboard
  const updateScoreboard = (name, score) => {
    if (name === 'Computer') {
      compScore.innerText = score;
    } else {
      playerScore.innerText = score;
    }
  }

  // Modal
  const showWinner = (name, score) => {
    modalContainer.style.display = 'block';
    winnerName.innerText = name;
    winnerScore.innerText = score;
    reset();
    document.onkeydown = evt => {
      if (evt.keyCode === 27) {
        modalContainer.style.display = 'none';
      }
    }
    button.onclick = () => {
      modalContainer.style.display = 'none';
    }

  }

  // Squares
  const squares = document.querySelectorAll('.square');
  // Change Nodelist to array to grab index
  const squaresArr = [...squares];

  squaresArr.forEach(square => {
    square.addEventListener('click', pushGameboard.bind(square, square, squaresArr.indexOf(square), boardArr));
  });

  // Reset
  const reset = () => {
    // reset gameboard & movesLeft
    resetGameboard();
    console.log(hiddenBoard());
    resetMovesLeft();
    squaresArr.forEach(square => square.innerText = '');
  }


  return {
    showWinner,
    updateScoreboard,
    reset
  }
})();

/***** Factory Functions *****/

// Player Factory Function
const Player = (piece, name) => {
  let score = 0;

  const {
    hiddenBoard,
    hiddenFull
  } = board;

  const {
    showWinner,
    updateScoreboard
  } = view;

  const boardArr = hiddenBoard();
  const full = hiddenFull();
  const getName = () => name;
  const getScore = () => score;
  const upScore = () => score++;
  // Squares
  const squares = document.querySelectorAll('.square');
  // Change Nodelist to array to grab index
  const squaresArr = [...squares];

  const winningCondition = piece => {
    console.log(piece);
    if ((squaresArr[0].innerText === piece && squaresArr[1].innerText === piece && squaresArr[2].innerText === piece) ||
      (squaresArr[3].innerText === piece && squaresArr[4].innerText === piece && squaresArr[5].innerText === piece) ||
      (squaresArr[6].innerText === piece && squaresArr[7].innerText === piece && squaresArr[8].innerText === piece) ||
      (squaresArr[0].innerText === piece && squaresArr[4].innerText === piece && squaresArr[8].innerText === piece) ||
      (squaresArr[2].innerText === piece && squaresArr[4].innerText === piece && squaresArr[6].innerText === piece) ||
      (squaresArr[0].innerText === piece && squaresArr[3].innerText === piece && squaresArr[6].innerText === piece) ||
      (squaresArr[1].innerText === piece && squaresArr[4].innerText === piece && squaresArr[7].innerText === piece) ||
      (squaresArr[2].innerText === piece && squaresArr[5].innerText === piece && squaresArr[8].innerText === piece)) {
      console.log(`you win`);
      upScore();
      console.log(score);
      updateScoreboard(getName(), getScore())
      showWinner(getName(), getScore());

    } else {
      void(0);
    }
  }

  // 7 Winning conditions

  // Player can splice element in board array
  function boardSplice(index, piece) {
    boardArr.splice(index, 1, piece);
  }

  return {
    upScore,
    boardSplice,
    winningCondition,
    getName,
    getScore
  };
}

const player1 = Player('X', 'Ninja');
const player2 = Player('O', 'Computer');
/*
  Eventlistener on squares listening for a click & adds either X or O value to square
  If X or O value is present don't allow the click to produce a value

  Player 1 = X
  Player 2 = O
  If player 1 clicks on square add X
  If player 2 clicks on square add O


*/
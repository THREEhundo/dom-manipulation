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
      console.log(gameboard);
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
    if (elem.innerText !== '') {
      return;
    }
    // Checks for empty array
    if (array.every(empty)) {
      movesLeft.pop();
      boardArr.push('X');
      elem.innerText = 'X';
    } /* Checks X > O */
    else if (mode(array) === 'X') {
      movesLeft.pop();
      boardArr.push('O');
      elem.innerText = 'O';
      if (movesLeft.length < 5 && movesLeft.length > 0) {
        player2.winningCondition('O');
      } else if (movesLeft.length === 0) {
        // Modal
        player2.winningCondition('O');
      }
    } /* Checks O > X */
    else if (mode(array) === 'O') {
      movesLeft.pop();
      boardArr.push('X');
      elem.innerText = 'X';
      if (movesLeft.length < 5 && movesLeft.length > 0) {
        player1.winningCondition('X');
      } else if (movesLeft.length === 0) {
        // Modal
        player1.winningCondition('X');
      }
    }
    console.log(array);
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
    } else if (name === 'Ninja') {
      playerScore.innerText = score;
    } else {
      return;
    }
  }

  // Modal
  const showWinner = (name, score) => {
    modalContainer.style.display = 'block';
    winnerName.innerText = name;
    winnerScore.innerText = score;
    document.onkeydown = evt => {
      if (evt.keyCode === 27) {
        modalContainer.style.display = 'none';
        reset();
      }
    }
    button.onclick = () => {
      modalContainer.style.display = 'none';
      reset();
    }

  }

  // toggle show & hide
  const show = (elem) => {
    elem.classList.replace("hide", "show");
  }

  const hide = (elem) => {
    elem.classList.replace("show", "hide");
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
    resetMovesLeft();
    squaresArr.forEach(square => square.innerText = '');
  }


  return {
    showWinner,
    updateScoreboard,
    reset,
    show,
    hide
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
    updateScoreboard,
    show,
    hide
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
    const tieDiv = document.querySelector('.tie');
    const winDiv = document.querySelector('.win');

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
      if (winDiv.classList.contains('hide')) {
        showWinner(getName(), getScore());
        show(winDiv);
        hide(tieDiv);
      }
    } else if (boardArr.length === 9) {
      if (winDiv.classList.contains('show')) {
        showWinner(getName(), getScore());
        show(tieDiv);
        hide(winDiv);
      }
    } else {
      void(0);
    }
  }

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
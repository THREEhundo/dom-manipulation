// /*
// 1. Create a 16 x 16 grid using JS
// 2. Use a container
// 3. Create a grid layout with CSS grid or flexbox
// 4. Add a hover effect to the squares that changes the color.
// 5. Add a button to the top of the screen to clear current grid.
//   i. It should prompt the user to select how many sqaures should be generated.
//   ii. Grid space should be static.
//   iii. Check out prompts.
//   iv. You should be able to populate 64 squares without changing the total pixel count. (Prompt for rows and columns)
// 6. Have the hover effect select a random color. Use opacity to increment value by 10% each time.
// */
// let rgbA = [];
//
// // header
// const header = document.createElement('h1');
// header.id = 'header';
// header.textContent = 'Etch-a-Sketch';
// header.style.textAlign = 'center';
// document.body.appendChild(header);
//
// // outter board
// const board = document.createElement('div');
// board.className = 'board';
// board.style.backgroundImage = "url('images/etch-a-sketch.png')";
// document.body.appendChild(board);
//
// // inner board
// const innerBoard = document.createElement('div');
// innerBoard.className = 'innerBoard';
//
// function shadeChanger() {
//   let opacity = 0;
//   return opacity += 0.1;
// }
// // 16 x 16 div grid is the default
// innerBoardSquares(10, 10);
//
// // function to create boxes for the etch-a-sketch and append them to the innerBoard
// function innerBoardSquares(x, y) {
//   // if there are divs clear the divs before proceeding
//   if (innerBoard.innerHTML) {
//     innerBoard.innerHTML = "";
//   }
//   // x & y have to be less than 9
//   if (x < 9 && y < 9) {
//     for (var i = 0; i < x * y; i++) {
//       let opacity = 0;
//       // create x amount of divs
//       let square = document.createElement('div');
//       square.dataset.darken = 0;
//       // create class for all divs
//       square.classList.add('square');
//
//       // create hover effect for each div
//       square.addEventListener('mouseover', function() {
//         darken;
//         // square.style.cssText = `background: rgba(0, 0, 0, ${shadeChanger()})`
//       });
//       square.addEventListener('click', darken);
//       // edit grid template column and row
//       // append them to innerBoard
//       innerBoard.appendChild(square);
//     }
//   }
//   // innerBoard.style.cssText = `grid-template-columns: repeat(${x}, minmax(20px, 1fr)); grid-template-rows:repeat(${y}, minmax(20px, 1fr));`
//   innerBoard.style.gridTemplateColumns = (`repeat(${x}, 1fr)`);
//   innerBoard.style.gridTemplateRows = (`repeat(${y}, 1fr)`);
// }
//
//
// // changes the shade of each square during mouse enter
// // turn from gray to black
//
// function darken(e) {
//   let previousShade = e.target.style.backgroundColor;
//   // let rgbArray = previousShade.slice(-1);
//   console.log(previousShade);
// }
//
//
// board.appendChild(innerBoard);
//
// let s = document.querySelector('.square');
// // text field and button to customize grid
const board = document.querySelector('#board');
const gridContainer = document.querySelector('#grid');
const controls = document.querySelector('#controls');
let lengthAndWidth = 12;
let rgbA = [0, 0, 0, 0];
let squares = [];

createGrid(lengthAndWidth);

// Create Board
function createGrid(lengthAndWidth) {
  // Create squares with grid
  gridContainer.style.gridTemplateRows = `repeat(${lengthAndWidth}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${lengthAndWidth}, 1fr)`;

  let totalSquares = lengthAndWidth * lengthAndWidth;
  for (var i = 0; i < totalSquares; i++) {
    squares[i] = document.createElement('div');
    squares[i].classList.add('square');
    squares[i].dataset.darkness = 0;
    squares[i].style = 'background-color: rgba(0, 0, 0, 0)';
    squares[i].addEventListener('mouseover', shadeChanger);
    gridContainer.appendChild(squares[i]);
  }
  // Add Event Listener to each square to darken
}
// Clear Board

// Square Adjustor using range slider

// Change Shade Value
function shadeChanger(e) {
  rgbA = darken(e);
  e.target.style = `background-color: rgba(${rgbA})`
}
// Darken Squares
function darken(e) {
  let currentShade = e.target.style.backgroundColor;
  let rgbaString = (currentShade.charAt(3) == 'a') ? currentShade.slice(5, -1) : currentShade.slice(4, -1);
  console.log(currentShade.charAt(0), currentShade.charAt(1), currentShade.charAt(2), currentShade.charAt(3));
  let rgbaArray = rgbaString.split(',')
  console.log(`rgbaArray: ` + rgbaArray);
  let red = rgbaArray[0];
  let green = rgbaArray[1];
  let blue = rgbaArray[2];
  let alpha = rgbaArray[3];
  console.log(`alpha: ` + alpha);
  let currentDarkness = e.target.dataset.darkness;
  console.log(`darkness: ` + currentDarkness);
  if (currentDarkness >= 9) {
    return [0, 0, 0, 1];
  }
  let newAlpha = alphaIncrease(alpha, currentDarkness);
  console.log(`New Alpha: ` + newAlpha);
  return [red, green, blue, newAlpha];
}

function alphaIncrease(alpha, step) {
  let incrementor;
  let newDarknessValue;
  incrementor = (1 - alpha) / (10 - step);
  console.log(`incrementor: ` + incrementor);
  newDarknessValue = +alpha + incrementor;
  console.log(`New Darkness Value: ` + newDarknessValue);
  return newDarknessValue;
}
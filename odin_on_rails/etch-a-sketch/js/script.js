/*
1. Create a 16 x 16 grid using JS
2. Use a container
3. Create a grid layout with CSS grid or flexbox
4. Add a hover effect to the squares that changes the color.
5. Add a button to the top of the screen to clear current grid.
  i. It should prompt the user to select how many sqaures should be generated.
  ii. Grid space should be static.
  iii. Check out prompts.
  iv. You should be able to populate 64 squares without changing the total pixel count. (Prompt for rows and columns)
6. Have the hover effect select a random color. Use opacity to increment value by 10% each time.
*/

// header
const header = document.createElement('h1');
header.id = 'header';
header.textContent = 'Etch-a-Sketch';
header.style.textAlign = 'center';
document.body.appendChild(header);

// outter board
const board = document.createElement('div');
board.className = 'board';
board.style.backgroundImage = "url('images/etch-a-sketch.png')";
document.body.appendChild(board);

// inner board
const innerBoard = document.createElement('div');
innerBoard.className = 'innerBoard';

// function to create boxes for the etch-a-sketch and append them to the innerBoard
function innerBoardSquares(x, y) {
  // if there are divs clear the divs before proceeding
  if (innerBoard.innerHTML) {
    innerBoard.innerHTML = "";
  }
  // x & y have to be less than 9
  if (x < 9 && y < 9) {
    for (var i = 0; i < x * y; i++) {
      // create x amount of divs
      let newDiv = document.createElement('div');
      // create class for all divs
      newDiv.classList.add('square');
      // create hover effect for each div

      // edit grid template column and row
      // append them to innerBoard
      innerBoard.appendChild(newDiv);
      console.log(i);
    }
  }
  innerBoard.style.cssText = `grid-template-columns: repeat(${x}, minmax(50px, 1fr)); grid-template-rows:repeat(${y}, minmax(50px, 1fr));`
  // grid-template-columns: repeat(4, minmax(50px, 1fr));
  // grid-template-rows:repeat(4, minmax(50px, 1fr));
}

// 16 x 16 div grid is the default
innerBoardSquares(3, 4);



board.appendChild(innerBoard);

// text field and button to customize grid
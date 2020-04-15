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

const header = document.createElement('h1');
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
board.appendChild(innerBoard);
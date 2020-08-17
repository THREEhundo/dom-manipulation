# Tic-Tac-Toe

# Functionality

# Process
Figure out which method and variables fit in each module or factory function.
What remains hidden & what remains visible?

Player should keep track of score & moves.
Game board should keep track of the moves being placed on the board.
Game flow should control the methods that go between Player factory functions and game board module.

Problem - X's & O's
Players input either X or O values using splice.
Game board makes use of Player splice method?
Game flow places X's & O's on DOM.
Game board -> Player -> Game flow

Changed board.gameboard into a private variable

Changed squares Nodelist into an array to grab index of each node.
Added method to game board to check if the array element is undefined. (Empty board)
  Problem -> Splice is not correctly inserting X/O string into array
  Solution -> Changed the first argument of the method boardSlice from boardArry[index] to index.

  Problem -> every() method was not working on gameboard.
  Solution -> Inherited hiddenEmpty method that checks to see if individual array element are undefined.

  Problem -> Need to find mode of gameboard array
  Solution -> Added mode method to board module.
              *Just calling the board mode method will return the function. It needs assignment, and then calling to run!*
              Added logic for draw state to always produce 'O' so that 'X' is placed on the board following a draw state.

  Problem -> reduce() did handle draw state.
  Solution -> Replaced >= with > in mode method.

Problem -> Build logic for win condition
Either use 5th turn to check for winning condition or check against all winning conditions every round.

  Problem -> Score would not update on the win condition.
  Solution -> Set score's this to object that it was called on.

  Problem -> Array being called to check for undefined was not correct.
  Solution -> Switched undefined values to Number values.

  Problem -> empty function's this is set to the global scope.
  Solution -> Scrapped empty function and went with a counter variable to check for full board that ends in a tie.

Problem -> Modal pops up upon winning or tying.
  Problem -> a. toggle display none - grid
             b. Link winner name to modal
             c. Link winner score to modal

Problem -> boardgame array would not reset to empty array because the reference to boardgame from the resetGameboard method points to a new boardgame array and not the one already instantiated.
Solution -> changed boardgame from a sparse array to an empty one. Changed winningCondition method to check div innerText for 3 in a row instead of checking array positions.

Problem -> Modal needs to pop on ties.
Solution -> classList.replace() switches between show & hide for the corresponding messages.

Problem -> Create modal to allow player to enter their name.
Solution -> Use modal

Problem -> Create Simple AI
Solution -> filtered all empty divs and set the first empty div to AI's move.
Set the AI's move to random open spot.

Problem -> Implement restart button

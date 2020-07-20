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
  Problem -> reduce() did handle draw state.
  Solution -> Replaced >= with > in mode method.

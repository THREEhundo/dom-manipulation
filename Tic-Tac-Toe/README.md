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

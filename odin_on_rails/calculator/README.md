# Calculator

## Functionality

* Clicking on the buttons & using the number pad will allow you to use all the functions available.
* There are four operators. (Add, Subtract, Multiply, & Divide).
* Escape key/CE button allows you to delete both the history and main view.
* Backspace button/key allows you to delete one digit / operator at a time.
* Allows for multiple operations on a single line and uses PEMDAS.

## Process
I first started off with using a grid for the whole display. On the initial view with placeholder numbers it worked well. Once I put event listeners on the buttons I found that when the equation took up more than one line, the buttons would shrink. I converted both displays to flex and kept the buttons as a grid. This allowed the views to expand while keeping the buttons the same size.

With the JavaScript I tried utilizing three different arrays to store the operator, first, and second variable. I ran into an issue when trying to use more than one operator. I wasn't able to properly put each operator with the correct first and second variables. I had to rework it so that it initially started with one array and broke it down by operations. Being able to compute the math and inputting that answer into the next equation was far simpler with one array.

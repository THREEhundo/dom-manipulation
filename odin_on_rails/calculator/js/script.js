const buttons = document.querySelectorAll('button');
const viewSpan = document.querySelector('#vSpan');
const historySpan = document.querySelector('#hSpan');
const equals = document.querySelector('#equals');
const first = [];
const second = [];
const operation = [];
let answer;
let eventCounter;
// either store individual numbers and operators or store together.

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

buttons.forEach(button => {
  if (button.classList.contains("numbers")) {
    // Numbers
    button.addEventListener('click', function() {
      if (first.length && second.length && operation.length === 0) {
        viewSpan.innerHTML = '';
      }
      viewSpan.innerHTML += this.innerHTML;
      if (operation.length > 0) {
        second.push(this.innerHTML);
        console.log(first, operation, second);
      } else {
        first.push(this.innerHTML);
        console.log(first, operation, second);
        if (eventCounter > 0) {
          first.length = 0;
          viewSpan.innerHTML = '';
          console.log(first);
          viewSpan.innerHTML += this.innerHTML;
          first.push(this.innerHTML);
          console.log(first);
          // if number button has been clicked clear first array & push new number
        }
      }
    });
  } else if (button.dataset.key === '27') {
    // Clear
    button.addEventListener('click', function() {
      viewSpan.innerHTML = '';
      historySpan.innerHTML = '';
      first.length = 0;
      second.length = 0;
      operation.length = 0;
    });
  } else if (button.dataset.key === '8') {
    // Delete
    button.addEventListener('click', function() {
      if (viewSpan.innerHTML !== '') {
        if (second.length > 0) {
          second.pop();
        } else if (operation.length > 0) {
          operation.pop();
        } else {
          first.pop();
          viewSpan.innerHTML = first.join('');
          console.log(first);
        }
      } else {
        return;
      }
    })
  } else if (button.classList.contains('operator')) {
    // Operators
    button.addEventListener('click', function() {
      if (second.length > 0) {
        second.reduce((acc, curr) => acc += curr);
      }
      first.reduce((acc, curr) => acc += curr);
      viewSpan.innerHTML += ` ${button.innerHTML} `;
      operation.push(button.innerHTML);
      console.log(first, operation, second);
    });
  } else if (button.dataset.key === '13') {
    // Equals
    button.addEventListener('click', function(event) {
      // arrays should be shown in historySpan
      historySpan.innerHTML = '';
      historySpan.innerHTML = viewSpan.innerHTML;
      // return single value if second array is empty.
      if (second.length === 0) {
        return;
      }
      // operation function runs
      const firstArg = parseInt(first.reduce((acc, curr) => acc += curr));
      const secondArg = parseInt(second.reduce((acc, curr) => acc += curr));
      // let answer;
      switch (operation[0]) {
        case '÷':
          answer = operate(divide, firstArg, secondArg);
          viewSpan.innerHTML = answer;
          first.length = 0;
          first.push(answer);
          second.length = 0;
          operation.length = 0;
          break;
        case 'x':
          answer = operate(multiply, firstArg, secondArg);
          viewSpan.innerHTML = answer;
          first.length = 0;
          first.push(answer);
          second.length = 0;
          operation.length = 0;
          break;
        case '+':
          console.log(operate(add, firstArg, secondArg));
          answer = operate(add, firstArg, secondArg);
          viewSpan.innerHTML = answer;
          first.length = 0;
          first.push(answer);
          second.length = 0;
          operation.length = 0;
          console.log(first, second, operation);
          break;
        case '-':
          answer = operate(subtract, firstArg, secondArg);
          viewSpan.innerHTML = answer;
          first.length = 0;
          first.push(answer);
          second.length = 0;
          operation.length = 0;
          break;
      }
      console.log(`Event Detail: ${event.detail}`);
      eventCounter = event.detail;
      return console.log(eventCounter);
      // operation output shown in viewSpan

    })
  } else {
    return;
  }
  // button.addEventListener('keydown', )
})


/*
Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/
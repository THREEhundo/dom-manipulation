const buttons = document.querySelectorAll('button');
const viewSpan = document.querySelector('#vSpan');
const historySpan = document.querySelector('#hSpan');
const equals = document.querySelector('#equals');
const num = document.querySelectorAll('.numbers');
const op = document.querySelectorAll('.operator');
const del = document.querySelector('#del');
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

function numEvent() {
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
      console.log(first, 'fired after clearing');
      eventCounter = 0;
      first.push(this.innerHTML);
      viewSpan.innerHTML += this.innerHTML;
      console.log(first);
      // if number button has been clicked clear first array & push new number
    }
  }
}

function clear() {
  viewSpan.innerHTML = '';
  historySpan.innerHTML = '';
  first.length = 0;
  second.length = 0;
  operation.length = 0;
}

function backspace() {
  if (viewSpan.innerHTML !== '') {
    if (second.length > 0) {
      second.pop();
      operation.unshift(' ');
      operation.push(' ');
      const revise = first.concat(operation, second);
      const joinedRevision = revise.join('');
      viewSpan.innerHTML = joinedRevision;
      operation.shift();
      operation.pop();
      console.log(first, operation, second);
    } else if (operation.length > 0) {
      operation.pop();
      viewSpan.innerHTML = first.join('');
    } else {
      // When answer is shown, it needs to be changed to a string.
      if (Number.isInteger(first[0])) {
        const firstString = first.toString();
        first.length = 0;
        for (const s of firstString) {
          first.push(s);
          console.log('Pushing string back in: ', first);
        }
      }
      first.pop();
      viewSpan.innerHTML = first.join('');


      console.log('Last operation', first);
    }
  } else {
    return;
  }
}

function ops() {
  if (second.length > 0) {
    second.reduce((acc, curr) => acc += curr);
  }
  first.reduce((acc, curr) => acc += curr);
  viewSpan.innerHTML += ` ${this.innerHTML} `;
  operation.push(this.innerHTML);
  console.log(first, operation, second);
}

function equal(event) {
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
      if (second[0] === "0") {
        viewSpan.innerHTML = "Error";
        // turn off event handlers for all except CE
        buttons.forEach()
        return;
      }
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
  return eventCounter = event.detail;
}

function removeEvents() {

}

function addEvents(button) {
  if (button.classList.contains("numbers")) {
    // Numbers
    button.addEventListener('click', numEvent);
  } else if (button.dataset.key === '27') {
    // Clear
    button.addEventListener('click', clear);
  } else if (button.dataset.key === '8') {
    // Delete
    button.addEventListener('click', backspace)
  } else if (button.classList.contains('operator')) {
    // Operators
    button.addEventListener('click', ops);
  } else if (button.dataset.key === '13') {
    // Equals
    button.addEventListener('click', equal)
  } else {
    return;
  }
}

buttons.forEach(function(button) {
  addEvents(button);
});


/*
Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/
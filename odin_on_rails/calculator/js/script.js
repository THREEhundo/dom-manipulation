const buttons = document.querySelectorAll('button');
const viewSpan = document.querySelector('#vSpan');
const historySpan = document.querySelector('#hSpan');
const equals = document.querySelector('#equals');
const num = document.querySelectorAll('.numbers');
const op = document.querySelectorAll('.operator');
const del = document.querySelector('#del');
const first = [];
const second = [];
const third = [];
const fourth = [];
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
  if (operation.length === 3) {
    fourth.push(this.innerHTML);
    console.log(first, operation, second, third, fourth);
    console.log(`Fourth Array ${fourth}`);
  } else if (operation.length === 2) {
    third.push(this.innerHTML);
    console.log(first, operation, second, third);
    console.log(`Third Array ${third}`);
  } else if (operation.length === 1) {
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
  third.length = 0;
  fourth.length = 0;
  // check for attribute listener = false
  // If event listeners are removed, reapply
  buttons.forEach(function(button) {
    const attr = button.hasAttribute('listener');
    if (!attr) {
      addEvents(button);
    }
  })
}

function backspace() {
  if (viewSpan.innerHTML !== '') {
    // Copy operation array into clone
    const cloneOperation = operation.slice();
    if (fourth.length > 0) {
      fourth.pop();
      cloneOperation.unshift(' ');
      cloneOperation.push(' ');
      cloneOperation.splice(2, 0, ' ', ' ');
      cloneOperation.splice(5, 0, ' ', ' ');
      const fourthRevision = first.concat(cloneOperation[0], cloneOperation[1], cloneOperation[2], second, cloneOperation[3], cloneOperation[4], cloneOperation[5], third, cloneOperation[6], cloneOperation[7], cloneOperation[8], fourth);
      fourthJoined = fourthRevision.join('');
      viewSpan.innerHTML = fourthJoined;
    } else if (operation.length === 3) {
      operation.pop();
      cloneOperation.pop();
      cloneOperation.unshift(' ');
      cloneOperation.push(' ');
      cloneOperation.splice(2, 0, ' ', ' ');
      viewSpan.innerHTML = first.concat(cloneOperation[0], cloneOperation[1], cloneOperation[2], second, cloneOperation[3], cloneOperation[4], cloneOperation[5], third).join('');
    } else if (third.length > 0) {
      third.pop();
      cloneOperation.unshift(' ');
      cloneOperation.push(' ');
      cloneOperation.splice(2, 0, ' ');
      cloneOperation.splice(3, 0, ' ');
      const thirdRevision = first.concat(cloneOperation[0], cloneOperation[1], cloneOperation[2], second, cloneOperation[3], cloneOperation[4], cloneOperation[5], third);
      const thirdJoined = thirdRevision.join('');
      viewSpan.innerHTML = thirdJoined;
      cloneOperation.splice(3, 3);
    } else if (operation.length === 2) {
      operation.pop();
      cloneOperation.pop();
      cloneOperation.unshift(' ');
      cloneOperation.push(' ');
      viewSpan.innerHTML = first.concat(cloneOperation, second).join('');
    } else if (second.length > 0) {
      if (second.length === 0) {
        cloneOperation.pop();
      }
      second.pop();
      operation.unshift(' ');
      operation.push(' ');
      const revise = first.concat(operation, second);
      const joinedRevision = revise.join('');
      viewSpan.innerHTML = joinedRevision;
      operation.shift();
      operation.pop();
      console.log(first, operation, second);
    } else if (operation.length === 1) {
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
      if (second[0] === "0") {
        viewSpan.innerHTML = "Error";
        // Remove Event Handlers
        console.log('Found the error');
        buttons.forEach(function(button) {
          removeEvents(button);
        });
        return;
      }
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
  return eventCounter = event.detail;
}

function addEvents(button) {
  if (button.classList.contains("numbers")) {
    // Numbers
    button.addEventListener('click', numEvent);
  } else if (button.dataset.key === '27') {
    // Clear
    const attr = button.getAttribute('listener');
    if (attr) {
      return;
    }
    button.addEventListener('click', clear);
  } else if (button.dataset.key === '8') {
    // Delete
    button.addEventListener('click', backspace);
  } else if (button.classList.contains('operator')) {
    // Operators
    button.addEventListener('click', ops);
  } else if (button.dataset.key === '13') {
    // Equals
    button.addEventListener('click', equal);
  } else {
    return;
  }
}

function removeEvents(button) {
  if (button.classList.contains("numbers")) {
    // Numbers
    button.removeEventListener('click', numEvent);
  } else if (button.dataset.key === '8') {
    // Delete
    button.removeEventListener('click', backspace);
  } else if (button.classList.contains('operator')) {
    // Operators
    button.removeEventListener('click', ops);
  } else if (button.dataset.key === '13') {
    // Equals
    button.removeEventListener('click', equal);
  } else {
    return;
  }
  button.removeAttribute('listener');
}

function pemdas() {
  //Multiply and divide first, replace their values in the array and then add and subtract (PEMDAS)

}

// Limit length of digits by using e (9 digits)

//

// Add Event Handlers
buttons.forEach(function(button) {
  addEvents(button);
  button.setAttribute('listener', 'true');
});

/*
Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/
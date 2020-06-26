let viewContent = '';
let historyContent = '';
const view = document.querySelector('#vSpan');
const historyView = document.querySelector('#hSpan');
const buttons = document.querySelectorAll('button');

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function keydownEvents(e) {
  // Prevents enter from inputting focused button
  e.preventDefault();
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if (!button) return;
  // buttonClicked(button);
  const value = button.textContent;
  const decimalButton = document.querySelector('#decimal');

  if (value >= 0) {
    // Allows the clearing of display when a number is immediately pressed after an answer is shown.
    if (typeof viewContent === 'number') {
      viewContent = '';
      decimalButton.disabled = false;
    }
    viewContent += value;
    view.textContent = viewContent;
  } else if (value === 'CE') {
    clear();
  } else if (value === '⌫') {
    backspace();
  } else if (value === '=') {
    decimalButton.disabled = false;
    readView(viewContent);
  } else if (value === '.') {
    if (!decimalButton.disabled) {
      viewContent += value;
      view.textContent = viewContent;
      decimalButton.disabled = true;
    }
  } else {
    // Adds space to either side of operators
    viewContent += ` ${value} `;
    view.textContent = viewContent;
    decimalButton.disabled = false;
  }
}

function numpadDisplay() {
  window.addEventListener('keydown', keydownEvents);
}

function restart(e) {
  e.keyCode === 13 ? clear() : void(0);
}

function enableButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.disabled = false);
  window.removeEventListener('keydown', restart);
  window.addEventListener('keydown', keydownEvents);
}

function disableButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.disabled = true);
  document.querySelector('#clear').disabled = false;
  window.removeEventListener('keydown', keydownEvents);
  window.addEventListener('keydown', restart);
}

function operate(operator, a, b) {
  // Error handling
  if (isNaN(a) || isNaN(b)) {
    viewContent = 'Not a Number';
    historyContent = '';
    disableButtons();
    view.textContent = viewContent;
    historyView.textContent = historyContent;
    return;
  } else if (b === 0 && operator === divide) {
    viewContent = 'Error: Infinity';
    historyContent = '';
    disableButtons();
    view.textContent = viewContent;
    historyView.textContent = historyContent;
    return;
  }
  // Decimal rounding
  let answer = Math.round((operator(a, b)) * 10000) / 10000;
  viewContent = answer;
  answer.toString().includes('.') ? document.querySelector('#decimal').disabled = true : void(0);
  view.textContent = viewContent;
  return answer;
}

function clear() {
  viewContent = '';
  historyContent = '';
  view.textContent = viewContent;
  historyView.textContent = historyContent;
  enableButtons();
}

function backspace() {
  if (viewContent.length > 1) {
    let contentArray = viewContent.split('');
    lastInput = contentArray[contentArray.length - 1];
    if (lastInput === ' ') {
      contentArray.pop();
      contentArray.pop();
      contentArray.pop();
      viewContent = contentArray.join('');
      view.textContent = viewContent;
    } else {
      let a = contentArray.pop();
      if (a === '.') {
        document.querySelector('#decimal').disabled = false;
      }
      viewContent = contentArray.join('');
      view.textContent = viewContent;
    }
  } else {
    viewContent = '';
    view.textContent = viewContent;
  }
}

function oneOperation(arr, operation) {
  // ['1', '+', '1']
  let a = parseFloat(arr[0]);
  let b = parseFloat(arr[arr.length - 1]);
  operate(operation, a, b);
}

function multipleOperations(arr) {
  // Multiply and divide before adding and subtracting. Reduce answers and continue with operations.
  while (arr.length > 1) {
    let test = arr.some(el => el === 'x' || el === '÷');
    let test2 = arr.some(el => el === '+' || el === '-');
    // Multiply & Divide
    while (test) {
      if (arr.includes('x')) {
        let a = parseFloat(arr[arr.indexOf('x') - 1]);
        let b = parseFloat(arr[arr.indexOf('x') + 1]);
        let result = operate(multiply, a, b);

        arr.splice((arr.indexOf('x') - 1), 3, result);
        test = arr.some(el => el === 'x' || el === '÷');
      } else {
        let a = parseFloat(arr[arr.indexOf('÷') - 1]);
        let b = parseFloat(arr[arr.indexOf('÷') + 1]);
        let result = operate(divide, a, b);

        arr.splice((arr.indexOf('÷') - 1), 3, result);
        test = arr.some(el => el === 'x' || el === '÷');
      }
    }
    // Add & Subtract
    while (test2) {
      let additionIndex = arr.indexOf('+');
      let subtractionIndex = arr.indexOf('-');

      if (additionIndex < subtractionIndex && additionIndex !== -1 || subtractionIndex === -1) {
        let a = parseFloat(arr[arr.indexOf('+') - 1]);
        let b = parseFloat(arr[arr.indexOf('+') + 1]);
        let result = operate(add, a, b);

        arr.splice((arr.indexOf('+') - 1), 3, result);
        test2 = arr.some(el => el === '+' || el === '-');
      } else {
        let a = parseFloat(arr[arr.indexOf('-') - 1]);
        let b = parseFloat(arr[arr.indexOf('-') + 1]);
        let result = operate(subtract, a, b);

        arr.splice((arr.indexOf('-') - 1), 3, result);
        test2 = arr.some(el => el === '+' || el === '-');
      }
    }
  }
}

// Transfers view to an array
function readView(str) {
  if (typeof str === 'number') return;
  let contentArray = str.split(' ');
  historyContent = str + ' = ';
  historyView.textContent = historyContent;

  if (contentArray.length < 4) {
    if (contentArray.includes('x')) {
      oneOperation(contentArray, multiply);
    } else if (contentArray.includes('÷')) {
      oneOperation(contentArray, divide);
    } else if (contentArray.includes('+')) {
      oneOperation(contentArray, add);
    } else if (contentArray.includes('-')) {
      oneOperation(contentArray, subtract);
    }
  } else {
    multipleOperations(contentArray);
  }
}

function buttonSettings() {
  const keyCodes = [];
  const buttonValues = [];
  const buttonsArr = [];

  for (let button of buttons.values()) {
    keyCodes.push(button.dataset.key);
    buttonValues.push(button.textContent)
    buttonsArr.push(button);
  }
  buttons.forEach((button, i) => {
    button.addEventListener('click', e => inputToDisplay(e, buttonValues, i));
  });
}

function inputToDisplay(e, buttonValues, i) {
  let buttonSelection = e.target.textContent;
  let value = buttonValues[i];
  const decimalButton = document.querySelector('#decimal');

  if (value >= 0) {
    if (typeof viewContent === 'number') {
      decimalButton.disabled = false;
      viewContent = '';
    }
    viewContent += buttonSelection;
    view.textContent = viewContent;
  } else if (value === 'CE') {
    clear();
  } else if (value === '⌫') {
    backspace();
  } else if (value === '=') {
    decimalButton.disabled = false;
    readView(viewContent);
  } else if (value === '.') {
    if (!decimalButton.disabled) {
      viewContent += buttonSelection;
      view.textContent = viewContent;
      decimalButton.disabled = true;
    }
  } else {
    viewContent += ` ${buttonSelection} `;
    view.textContent = viewContent;
    decimalButton.disabled = false;
  }
}

buttonSettings();
numpadDisplay();
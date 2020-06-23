let viewContent = '';
let historyContent = '';
const view = document.querySelector('#vSpan');
const historyView = document.querySelector('#hSpan');

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

function keydownEvents(e) {
  e.preventDefault();
  const button = document.querySelector(`button[data-key]="${e.keyCode}"`);
  if (!button) return;
  buttonPressed(button);
  const value = button.textContent;
  const decimalButton = document.querySelector('#decimal');

  if (value >= 0) {
    viewContent += value;
    view.textContent = viewContent;
  } else if (value === 'CE') {
    clear();
  } else if (value === '⌫') {
    backspace();
  } else if (value === '=') {
    decimalButton.disabled = false;
    convertDisplay(viewContent);
  } else if (value === '.') {
    if (!decimalButton.disabled) {
      viewContent += value;
      view.textContent = viewContent;
      decimalButton.disabled = true;
    }
  } else {
    viewContent += ` ${value} `;
    view.textContent = viewContent;
    decimalButton.disabled = false;
  }
}

function numpadDisplay() {
  window.addEventListener('keydown', keydownEvents);
}

function restart(e) {
  e.keyCode === 13 ? clearAll() : void(0);
}

function buttonClicked(btn) {
  btn.classList.add('clicked');
  setTimeout(() => {
    btn.classList.remove('clicked')
  }, 100);
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
  window.removeEventListener('keydown', keydownEvents);
  window.addEventListener('keydown', restart);
}

function operate(operator, a, b) {
  // Error handling
  if (isNaN(a) || isNan(b)) {
    viewContent = 'Error';
    historyContent = '';
    disableButtons();
    view.textContent = displayContent;
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

      if (additionIndex < subtractionIndex && additionIndex != -1 || subtractionIndex != -1) {
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

function convertDisplay(str) {
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
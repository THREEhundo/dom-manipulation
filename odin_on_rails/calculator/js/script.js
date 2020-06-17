const buttons = document.querySelectorAll('button');
const viewSpan = document.querySelector('#vSpan');
const historySpan = document.querySelector('#hSpan');
const storedNum = null;
const tempArr = [];
// either store individual numbers and operators or store together.

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

const numDisplay = (b) => {
  console.log(this)
}

// add eventlistners to all buttons

buttons.forEach(button => {
  if (button.classList.contains("numbers")) {
    button.addEventListener('click', function() {
      viewSpan.innerHTML += this.innerHTML;
      tempArr.push(this.innerHTML);
    });
  } else if (button.dataset.key === '27') {
    button.addEventListener('click', function() {
      viewSpan.innerHTML = '';
      historySpan.innerHTML = '';
      tempArr.length = 0;
    });
  } else if (button.dataset.key === '8') {
    button.addEventListener('click', function() {
      if (viewSpan.innerHTML !== '') {
        tempArr.pop();
        viewSpan.innerHTML = tempArr;
      } else {
        return;
      }
    })
  } else if (button.classList.contains('operator')) {
    button.addEventListener('click', function() {
      viewSpan.innerHTML += ` ${button.innerHTML} `;
      tempArr.push(button.innerHTML);
    });
  } else if (button.dataset.key === '13') {
    button.addEventListener('click', function() {
      // tempArr should be shown in historySpan

      const history = tempArr.join(' ');
      historySpan.innerHTML += history;
      // operation function runs
      const operator = tempArr[1];
      const firstArg = parseInt(tempArr[0]);
      const secondArg = parseInt(tempArr[2]);
      console.log(tempArr);
      switch (operator) {
        case '÷':
          viewSpan.innerHTML = operate(divide, firstArg, secondArg);
          break;
        case 'x':
          viewSpan.innerHTML = operate(multiply, firstArg, secondArg);
          break;
        case '+':
          console.log(operate(add, firstArg, secondArg));
          viewSpan.innerHTML = operate(add, firstArg, secondArg);
          break;
        case '-':
          viewSpan.innerHTML = operate(subtract, firstArg, secondArg);
          break;

      }

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
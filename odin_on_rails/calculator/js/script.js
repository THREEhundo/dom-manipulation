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
      console.log(tempArr);
    });
  } else if (button.dataset.key === '27') {
    button.addEventListener('click', function() {
      viewSpan.innerHTML = '';
      historySpan.innerHTML = '';
      tempArr.length = 0;
      console.log(tempArr)
    });
  } else if (button.dataset.key === '8') {
    button.addEventListener('click', function() {
      if (viewSpan.innerHTML !== '') {
        tempArr.pop();
        console.log(tempArr)
        viewSpan.innerHTML = tempArr;
      } else {
        console.log(`nothing to delete`)
        return;
      }
      // if (!viewSpan.innerHTML === '') {
      //   return console.log(`viewspan is active`);
      // } else {
      //   return console.log(`nothing here`);
      // }
    })
  } else {
    return;
  }
  // button.addEventListener('keydown', )
})


/*
Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/
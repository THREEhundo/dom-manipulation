function add(a, b) {
  return c = a + b;
}

function subtract(a, b) {
  return c = a - b;
}

function sum(arr) {
  let redux = arr.reduce(function(acc, curr) {
    if (arr.length === 0) {
      return 0;
    }
    acc += curr;
    return acc;
  }, 0);
  return redux;
}

function multiply(arr) {
  // No initial value due to 0 * num = 0
  let multi = arr.reduce(function(acc, curr) {
    acc *= curr;
    return acc;
  });
  return multi;
}

function power() {

}

function factorial() {

}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}
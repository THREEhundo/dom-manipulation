const fibonacci = function(x) {
  //create a fibonacci array that has x amount of values
  const fib = [];
  // change the first value to the second value
  // change the second value to the previous first value
  // change the change the sum to first and second value
  let sum = 0;
  let first = 1;
  let second = 1;
  for (var i = 0; i < x; i++) {
    if (i === 0) {
      fib.push(first);
    } else {
      //console.log(nextDigit)
      fib.push(
        sum += firstDigit
      )
      firstDigit = sum
      console.log(firstDigit)
    }
  }

  return fib;
}

module.exports = fibonacci
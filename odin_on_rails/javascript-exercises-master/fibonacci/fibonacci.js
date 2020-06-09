const fibonacci = function(x) {
  //create a fibonacci array that has x amount of values
  const fib = [];
  // change the first value to the second value
  // change the second value to the previous first value
  // change the change the sum to first and second value
  let sum = 0;
  let first = 0;
  let second = 1;
  for (var i = 0; i < x; i++) {
    if (i === 0) {
      fib.push(second);
    } else {
      //console.log(nextDigit)
      fib.push(
        sum = first + second
      )
      first = second;
      second = sum;
      console.log(`sum: ${sum},
        first: ${first},
        second: ${second}`);
    }
  }

  return fib[x - 1];
}

module.exports = fibonacci
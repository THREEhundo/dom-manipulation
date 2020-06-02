const palindromes = function(word) {
  // Matches Alphanumeric values
  let alphabetRegex = /\w/g;
  let arr = word
    .toLowerCase()
    .match(alphabetRegex);
  console.log(`arr: ${arr}`)

  let refactoredString = arr.join('');
  console.log(`Refactored String: ${refactoredString}`);

  let reversedString = arr
    .reverse()
    .join('');
  console.log(`Reversed String: ${reversedString}`);
  if (refactoredString === reversedString) {
    return true;
  } else {
    return false;
  }
}
// Use regex to return an array of only alphanumeric character
// turn to lowercase letters
// join array
// reverse array
// join array
// compare lowercased string to reversed string
module.exports = palindromes
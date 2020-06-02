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
// letters are the same backwards and forwards
// ommit spaces and punctuation
module.exports = palindromes
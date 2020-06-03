const palindromes = function(word) {
  const regex = /\w/g;
  const lowerCaseString = word.toLowerCase();
  const wordArray = lowerCaseString.match(regex);
  console.log(`wordArray: ${wordArray}`);
  console.log(lowerCaseString.match(regex));

  const reversedArray = wordArray.reverse();
  console.log(reversedArray);
  if (lowerCaseString.match(regex) === reversedArray) {
    return true;
  } else {
    return false;
  }
}
module.exports = palindromes

// Define parameters you want to keep
// Get a match of those characters
// Reverse array
// Compare both arrays and return true or false
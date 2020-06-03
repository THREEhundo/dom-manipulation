const palindromes = function(word) {
  const parsed = word.toLowerCase().replace(/[^A-Za-z]/g, '');
  return (
    parsed
    .split('')
    .reverse()
    .join('') == parsed
  )
};
module.exports = palindromes

// Define parameters you want to keep
// Get a match of those characters
// Reverse array
// Compare both arrays and return true or false
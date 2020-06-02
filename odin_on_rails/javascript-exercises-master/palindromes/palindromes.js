const palindromes = function(word) {
  let arr = [...word].reverse().join('');
  if (word === arr) {
    return true;
  }
  return false;
}
// letters are the same backwards and forwards
// ommit spaces and punctuation
module.exports = palindromes
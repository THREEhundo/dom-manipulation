const palindromes = function(word) {
  let arr = [...word];
  arr.reverse().join('');
  return arr;
}
// letters are the same backwards and forwards
// ommit spaces and punctuation
module.exports = palindromes
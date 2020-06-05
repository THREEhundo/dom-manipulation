const caesar = function(string, shift) {
  return string
    .split('')
    .map(char => shiftChar(char, shift))
    .join('');

}
const codeReset = code => code < 97 ? 65 : 97;

const mod = (n, m) => (n % m + m) % m;

function shiftChar(char, shift) {
  const code = char.charCodeAt();
  // 65 - 90 && 97-122
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod((code + shift - codeReset(code)), 26) + codeReset(code)
    );
  }
  return char;
}

module.exports = caesar

// Use an array of the alphabet
// split the string into an array
// forEach elem of the array find the same value in either lowerAlpha or upperAlpha
// return the letter that corresponds to the shift value
//
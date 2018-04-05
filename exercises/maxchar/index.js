// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let arr = str.split("");
  let obj = {};
  let max = 0;
  let maxChar = '';
  arr.forEach(el => {
    (obj[el]) ? obj[el]++ : obj[el] = 1;
  })
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

module.exports = maxChar;

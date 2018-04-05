// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n < 0) {
    let arr = n.toString().split("");
    arr.shift();
    arr.reverse();
    arr.unshift("-");
    return Number(arr.join(""));
  }
  return Number(n.toString().split("").reverse().join(""));
}

module.exports = reverseInt;

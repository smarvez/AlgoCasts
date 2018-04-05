// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let arr = [];
  for (let i = 1; i < n; i++){
    arr.push(Array(n-(i-1)).join(" ") + Array(2*i).join("#") + Array(n-(i-1)).join(" "))
  }
  arr.push(Array(2*n).join("#"));
  arr.forEach(el => console.log(el));
}

module.exports = pyramid;

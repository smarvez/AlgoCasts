// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let result = [];
  for (let i = 1; i <= n; i++){
    result.push(Array(i+1).join("#") + Array(n-i+1).join(" "))
  }
  result.forEach(el => console.log(el));
}

module.exports = steps;

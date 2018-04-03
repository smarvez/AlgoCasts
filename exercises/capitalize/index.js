// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(" ");
  let capArr = arr.map(el => {
    let res = el.charAt(0).toUpperCase() + el.substring(1, el.length);
    return res;
  })
  return capArr.join(" ");
}

module.exports = capitalize;

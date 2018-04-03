// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strA = stringA.replace(/[\W_]/g, "").toLowerCase().split("").sort().join("");
  let strB = stringB.replace(/[\W_]/g, "").toLowerCase().split("").sort().join("");
  if (strA !== strB){
    return false;
  }
  return true;
}

module.exports = anagrams;

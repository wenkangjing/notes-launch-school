// Double Char Part 1

// Write a function that takes a string, and returns a new string in which it doubles every character.

/*
Understanding
- input
  - a string

- output
  - a new string
    - double every char

Algorithm
- looping every char in the given string  
  - push char twice to new strint
*/

function repeater(string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    newString += string[i] + string[i];
  }

  return newString;
}


// Examples:

repeater('Hello')     // "HHeelllloo"
repeater("Good job!") // "GGoooodd  jjoobb!!"
repeater('a')     // "aa"
repeater('a ')     // "aa  "
repeater(' b ')     // "  bb  "
repeater('a b a b')     // "  bb  "
repeater('')          // ''


// Hide Solution & Discussion


// Solution

// function repeater(string) {
//   var stringArray = [];
//   for (var i = 0; i < string.length; i++) {
//     stringArray.push(string[i], string[i]);
//   }

//   return stringArray.join('');
// }
// Leading Substrings

// Write a function that returns a list of all substrings of a string that start at the beginning of the original string. It returns the substrings arranged from shortest to longest.

/*

Understanding
- input
  - a string

- output
  - an array
    - all substrings, 0-i, i in [0-string length]
    - from shortest to longest  

Algorithm
- result is []
- looping the string from 0 to end, in each iteration
  - push leading substring to result array
  - slice(0, index + 1)

*/

function substringsAtStart_1(string) {
  let result = [];
  for (var i = 0; i < string.length; i++) {
    let subString = string.slice(0, index + 1);
    result.push(subString);
  }
  console.log(result);
  return result;
}



/*

Algorithm using map
- convert string to char array
- map array to a new array that 
  - slice(0, index + 1)

*/




function substringsAtStart(string) {
  let result = string.split('').map(function (value, index, array) {
    return array.slice(0, index + 1).join('');
  });
  console.log(result);
  return result;
}




// Examples:

substringsAtStart('abc')   // ['a', 'ab', 'abc']
substringsAtStart('a')     // ['a']
substringsAtStart('xyzzy') // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']



// Hide Solution & Discussion
// Solution

// function substringsAtStart(string) {
//   return  string.split('').map(function(char, idx, stringArray) {
//     return stringArray.slice(0, idx + 1).join('');
//   });
// }
// Discussion

// The shape of this problem is that of transformation. The key is to recognize that each element transforms to the string passed starting always from the first character up to but not including the current idx + 1. Recognizing this, the solution uses the Array.prototype.slice method to map the current values of the split string to its respective substring.
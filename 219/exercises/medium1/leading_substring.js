// Leading Substrings

// Write a function that returns a list of all substrings of a string that start at the beginning of the original string. It returns the substrings arranged from shortest to longest.

// Examples:

// substringsAtStart('abc')   // ['a', 'ab', 'abc']
// substringsAtStart('a')     // ['a']
// substringsAtStart('xyzzy') // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']






























// Hide Solution & Discussion
// Solution

// function substringsAtStart(string) {
//   return  string.split('').map(function(char, idx, stringArray) {
//     return stringArray.slice(0, idx + 1).join('');
//   });
// }
// Discussion

// The shape of this problem is that of transformation. The key is to recognize that each element transforms to the string passed starting always from the first character up to but not including the current idx + 1. Recognizing this, the solution uses the Array.prototype.slice method to map the current values of the split string to its respective substring.
// All Substrings

// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the previous exercise:

// Examples:

// substrings('abcde');
// // result
// [ 'a', 'ab', 'abc', 'abcd', 'abcde',
//   'b', 'bc', 'bcd', 'bcde',
//   'c', 'cd', 'cde',
//   'd', 'de',
//   'e' ]






























// Hide Solution & Discussion
// Solution

// function substrings(string) {
//   return string.split('').map(function(char, idx) {
//     return substringsAtStart(string.substring(idx));
//   }).reduce(function(result, array) {
//     return result.concat(array);
//   });
// }

// function substringsAtStart(string) {
//   return string.split('').map(function(char, idx, stringArray) {
//     return stringArray.slice(0, idx + 1).join('');
//   });
// }
// Discussion

// With the help of the substringsAtStart function written earlier, the shape of the problem becomes a combination of transformation and reduction. The solution transforms each substring of the string argument passed starting from the first index (0) to an array using the substringsAtStart function. It reduces the result of the transformation into one array by concatenating each array together.

// If it weren't for the use of the substringsAtStart function, this problem could've easily become much more complicated to wraps our head around.
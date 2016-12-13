/*

Short Long Short

Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Examples:

shortLongShort('abc', 'defgh');   // "abcdefghabc"
shortLongShort('abcde', 'fgh');   // "fghabcdefgh"
shortLongShort('', 'xyz');        // "xyz"


*/

/*

Understanding

- input
  - 2 strings

- output
  - a new concated string
  - in form of short + long + short

- assumption
  - alwasys different length
  - always string

Algorithm
- get the longer and shorter by comparing string length
- concat short longer short

*/

function shortLongShort (str1, str2) {
  var result = '';

  if (str1.length > str2.length) {
    result = str2 + str1 + str2;
  } else {
    result = str1 + str2 + str1;
  }
  //console.log(result);
  return result;
}

// Test Cases

shortLongShort('abc', 'defgh');   // "abcdefghabc"
shortLongShort('abcde', 'fgh');   // "fghabcdefgh"
shortLongShort('', 'xyz');        // "xyz"
shortLongShort('1', '');        // "1"
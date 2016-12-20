// Delete Vowels

// Write a function that takes an array of strings, and returns an array of the same string values without the vowels (a, e, i, o, u).


/*

Understanding
- input
  - an array of strings
    ? []
    ! case insensitive

- output
  - an array of string
    - without vowels

Data Struction
- array
- stirng
  - transform => map
  - removing vowels => filter

Algorithm
- mapping the array of strings, in each iteration
  - return the string with vowels removed

- return the new array

Abstraction
- removeVowels(word)
  - vowels array contains (a, e, i, o, u).
  - convert word to and filtered by wovels, indexOf === -1

 

*/


var VOWELS = ['a', 'e', 'i', 'o', 'u'];

function removeVowels_1(array) {
  return array.map(function (string) {
    return string.split('').filter(function(char) {
      return VOWELS.indexOf(char.toLowerCase()) === -1;
    }).join('');
  });
}

/*
Algorithm using regex

repace /[aeiou]/gi ''
*/


function removeVowels(array) {
  return array.map(function (string) {
    return string.replace(/[aeiou]/gi, '');
  });
}

// Example:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);             // ['bcdfghjklmnpqrstvwyxz']
removeVowels(['green', 'YELLOW', 'black', 'white']);      // ['grn', 'YLLW', 'blck', 'wht']
removeVowels(['ABC', 'AEIOU', 'XYZ']);                    // ['BC', '', 'XYZ']

removeVowels(['AEIOU']); // ['']
removeVowels(['A', '']); // ['', '']
removeVowels([' ']); // [' ']





































// Hide Solution & Discussion
// Approach/Algorithm

// You can look at this exercise as containing two parts. The first the transformation of the array argument into another array. The second part is processing the string and transforming into a string that does not have vowels. Note that the first part is dependent on the result of the second part (nested?).

// Solution

// function removeVowels(stringArray) {
//   var VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   return stringArray.map(function(string) {
//     return string.split('').map(function(char) {
//       if (VOWELS.indexOf(char) >= 0) {
//         return '';
//       } else {
//         return char;
//       }
//     }).join('');
//   });
// }
// Discussion

// The shape of the exercise is transformation. The intention is to process a given set of strings and remove the vowels that are in the string. Given this, the solution uses map to transform each string element in the array. It does the transformation by converting the string into an array of characters. As an array of characters, it then maps each character that is a vowel to an empty string. Once it transforms the characters, it joins it together and returns it as the new value of the string array.

// Further Exploration

// The current solution uses transformation list processing strategy to remove the vowels from the string. If you haven't, reimplement it using a regex based approach instead.
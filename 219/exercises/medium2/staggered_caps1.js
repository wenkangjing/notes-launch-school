// Staggered Caps Part 1

// Write a function that takes a string as an argument, and returns a new string that contains the original value using a staggered capitalization scheme in which it capitalizaes every other character while the making the characters in between lowercased. Don't change characters that are not letters, but count it as characters when switching between upper and lowercase.

// Example:

// staggeredCase('I Love Launch School!')     // 'I LoVe lAuNcH ScHoOl!'
// staggeredCase('ALL_CAPS')                  // 'AlL_CaPs'
// staggeredCase('ignore 77 the 444 numbers') // 'IgNoRe 77 ThE 444 NuMbErS'


































// Hide Solution & Discussion
// Solution

// function staggeredCase(words) {
//   return  words.split('').map(function(char, index) {
//     if (index % 2 === 0) {
//       return char.toUpperCase();
//     } else {
//       return char.toLowerCase();
//     }
//   }).join('');
// }
// Discussion

// The solution uses a transformation processing strategy to convert each character in the words argument to its appropriate case. The String.prototype.toUpperCase() and String.prototype.toLowerCase() methods handles the scenario wherein the character is not alphabetic. In order to determine which case to use, the solution uses the index value which provided by the Array.prototype.map method. Every time the index is even, it converts the character to uppercase; lowercase otherwise. After the transformation, it joins the characters back together using the Array.prototype.join method.
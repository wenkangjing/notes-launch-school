// Swap Case

// Write a function that takes a string as an argument and returns a new string in which lowercase letters replace every uppercase and vice versa. Leave all other characters unchanged.

// Example:

// swapcase('CamelCase')         // 'cAMELcASE'
// swapcase('Tonight on XYZ-TV') // 'tONIGHT ON xyz-tv'




























// Hide Solution & Discussion
// Solution

// function swapcase(words) {
//   return words.split('').map(function(char) {
//     if (char.match(/[a-z]/)) {
//       return char.toUpperCase();
//     } else if (char.match(/[A-Z]/)) {
//       return char.toLowerCase();
//     } else {
//       return char;
//     }
//   }).join('');
// }
// Discussion

// The solution follows a transformation strategy for swapping the case of the string argument. If the character is a lowercase letter (/[a-z]/), it makes it uppercase; if it is uppercase (/[A-Z]/), it make its lowercase. For all other characters, it does nothing. Finally, it joins characters together into a new string and returns that value.
// Sum of Digits

// Write a method that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

// Examples:

// sum(23)          // 5
// sum(496)         // 19
// sum(123456789)   // 45






























// Hide Solution & Discussion
// Solution

// function sum(number) {
//   return number.toString().split('').map(function(numString) {
//     return parseInt(numString, 10);
//   }).reduce(function(total, num) {
//     return total + num;
//   });
// }
// Discussion

// The solution uses a series of list processing techniques - Array.prototype.map() and Array.prototype.reduce() - to get the sum of the digits. To use the list processing techniques, the solution converts the numerical argument number to a string and splits using an empty string as a delimiter to get each character. The resulting array of numerical strings are then mapped back to integers and then consequently added up together using the Array.prototype.reduce() method.
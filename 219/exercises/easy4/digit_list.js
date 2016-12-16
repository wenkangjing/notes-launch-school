// Digits List

// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

// Examples:

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

























// Hide Solution & Discussion
// Solution

// function digitList(number) {
//   var numberStringArray = number.toString().split('');
//   var numberArray = [];
//   for (var i = 0; i < numberStringArray.length; i++) {
//     numberArray.push(parseInt(numberStringArray[i]));
//   }

//   return numberArray;
// }
// Discussion

// The solution leverages the String.prototype.split() method to get a string version of the digits list by converting the number argument to a string. It then gets an array of numbers by converting the string version of the digits list to an integer and pushing it to a new array, numberArray. The numberArray is then returned.

// Further Exploration

// A more concise approach would be use the Array.prototype.map() method. Refactor the current solution to make use of it if you haven't.
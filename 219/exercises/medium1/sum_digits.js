// Sum of Digits

// Write a method that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.



/*
Understanding
- input
  - positive integer [1~]

- output
  - a number
    - sum of digits  

- rule
  - no array (wrong understanding)
  - using array
  

Algorithm without array
- convert to a string
- looping from 0 - string.length - 1, in each iteration
  - parse to int 
  - sum = sum + the digit
- return sum


*/

function sum_1(number) {
  let string = String(number);
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum = sum + parseInt(string[i], 10);
  }
  return sum;
}



/*
Algorithm using array
- convert to string, split to digits array
- reduce to sum

*/


function sum(number) {
  let sum = String(number).split('').reduce(function(a, b) {
    return a + parseInt(b);
  }, 0);
  console.log(sum);
  return sum;
}

// Examples:

sum(23)          // 5
sum(496)         // 19
sum(123456789)   // 45
sum(0)          // 0
sum(110)          // 2






























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
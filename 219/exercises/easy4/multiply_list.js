// Multiply Lists

// Write a function that takes two Array arguments, in which each Array contains a list of numbers, and returns a new Array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

// Examples:

// multiplyList([3, 5, 7], [9, 10, 11]) // [27, 50, 77]





















// Hide Solution & Discussion
// Solution

// function multiplyList(numbers1, numbers2) {
//   var result = [];
//   for (var i = 0; i < numbers1.length; i++) {
//     result.push(numbers1[i] * numbers2[i]);
//   }

//   return result;
// }
// Discussion

// Given that both arguments will be of the same length, the solution uses a for loop to iterate over the values at their respective indices. At every iteration it pushes the product of multiplying the values at the current index of the arrays to a result array. After the iteration it returns the result array.
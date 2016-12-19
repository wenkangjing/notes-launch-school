// Sum of Sums

// Write a function that takes an Array of numbers and then returns the sum of the sums of each leading subsequence for that Array. You may assume that the Array always contains at least one number.

// Examples:

// sumOfSums([3, 5, 2])       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
// sumOfSums([1, 5, 7, 3])    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
// sumOfSums([4])             // 4
// sumOfSums([1, 2, 3, 4, 5]) // 35





























// Hide Solution & Discussion
// Solution

// function sumOfSums(numbers) {
//   return numbers.map(function(number, idx) {
//     return numbers.slice(0, idx + 1).reduce(function(sum, value) {
//       return sum + value;
//     });
//   }).reduce(function(sum, value) {
//     return sum + value;
//   });
// }
// Discussion

// The solution can be bit tricky to look at. Let's break it down from a list processing approach so it is easier to make sense off.

// The first part of the problem transforms the current array of numbers can to the expanded form with each element containing the set of elements equal to its idx + 1.
// Following this it folds the values so that the sum of the elements will be the value stored.
// For the last part, it folds again the sum values stored.
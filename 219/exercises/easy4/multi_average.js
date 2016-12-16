// Multiplicative Average

// Write a function that takes an Array of integers as input, multiplies all of the numbers together, divides the result by the number of entries in the Array, and then prints the result rounded to 3 decimal places.

// Examples

// showMultiplicativeAverage([3, 5])                 // 7.500
// showMultiplicativeAverage([2, 5, 7, 11, 13, 17])  // 28361.667














// Hide Solution & Discussion
// Solution

// function showMultiplicativeAverage(numbers) {
//   var product = 1;
//   for (var i = 0; i < numbers.length; i++) {
//     product *= numbers[i];
//   }

//   return (product / numbers.length).toFixed(3);
// }
// Discussion

// The solution iterates over all the elements in the array. At every iteration, it multiplies the product variables' value by the value at the current index. After looping it divides the product by the length of the numbers argument passed.
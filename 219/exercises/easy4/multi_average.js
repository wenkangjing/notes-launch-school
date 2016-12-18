// Multiplicative Average

// Write a function that takes an Array of integers as input, multiplies all of the numbers together, divides the result by the number of entries in the Array, and then prints the result rounded to 3 decimal places.


/*

Understanding
- input
  - an array  
    - integers

- ouput
  - a number rounded to 3 decimal places
    
- question
  ? non-empty array? y

Algorithm
- reduce the given array to a number of  multiplies of all elements
- divided by length and round to 3

*/



function showMultiplicativeAverage(integers) {
  let multiplies = integers.reduce(function (a, b) {
    return a * b;
  }, 1);

  return (multiplies / integers.length).toFixed(3);
}




// Examples

showMultiplicativeAverage([1]);
showMultiplicativeAverage([0]);
showMultiplicativeAverage([0, 1, 2,]); //0   
showMultiplicativeAverage([3, 5]);                 // 7.500
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);  // 28361.667

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
// Array Average

// Write a function that takes one argument, an array containing integers, and returns the average of all numbers in the array. 
//The array will never be empty and the numbers will always be positive integers.

/*

Understanding
- input
  - a number array
    - not empty
    - positive integers

- output
  - a number
    - average of all numbers
    ? integer  - floor

Algorithm
- reduce array to sum
  - floor of sum / length


*/


function average(integers) {
  let sum = integers.reduce(function (a, b) {
    return a + b;
  });

  let result = Math.floor(sum / integers.length);
  console.log(result); 
  return result;
}





// Examples:
average([1, 5, 87, 45, 8, 8])    // 25
average([9, 47, 23, 95, 16, 52]) // 40
average([1])    // 1
average([1, 2, 1])    // 1
average([0])    // 0
average([0, 99])    // 49




// Hide Solution & Discussion
// Solution

// function average(numbers) {
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return Math.floor(sum / numbers.length);
// }
// Discussion

// The solutions uses a for loop to iterate over the numbers array. At every iteration it increments the sum variable by the value at the current index. After the loop, it returns the floored result of the sum divided by the length of the numbers array argument.
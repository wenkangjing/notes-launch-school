// Running Totals

// Write a function that takes an array of numbers, and returns an array with the same number of elements with each elements value being running total from the original array.



/*

Understanding
- input 
  - an array of numbers

- an new array
  - same element count as original
  - newArray[newIndex] = original[0...newIndex]

Algorithm
- loop original array, in each iteration
  - get the running array by slice (0, index)
  - reduce to sum 
  - push sum to new array

*/


function runningTotal_1(numbers) {
  let newArray = [];
  numbers.forEach(function(num, index) {
    // index + 1 to ensure include all
    let subArray = numbers.slice(0, index + 1); 
    let sum = subArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    newArray.push(sum);
  });

  console.log(newArray);
  return newArray;
}

// Discussion

// The solution makes use of an array and a number variable. The array, resultArray, stores the values of the running total while sum keeps track of the value as we move through each item in the original array passed. At every iteration, it updates the value of sum by adding in the value at the current index of the array.

// Further Exploration

// Can you rewrite the solution using the Array.prototype.map() function? What types of problems do you think are well suited for using the Array.prototype.map() function?

/*
Algorithm
- loop array, in each iteration
  - add current to sum
  - push sum to the new array
*/
function runningTotal_2(numbers) {
  let newArray = [];
  let sum = 0;
  numbers.forEach(function (current) {
    sum += current;
    newArray.push(sum);
  });
  console.log(newArray);
  return newArray;
}

/*
using map
*/

function runningTotal(numbers) {
  let sum = 0;
  let newArray = numbers.map(function (current) {
    return sum += current;
  });
  
  console.log(newArray);
  return newArray;
}

// Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
runningTotal([0,0,0,0,0]);            // [0,0,0,0,0]
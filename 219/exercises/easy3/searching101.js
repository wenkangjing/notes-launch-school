// Searching 101

// Write a program that solicits 6 numbers from the user, then prints a message that describes whether or not the 6th number appears amongst the first 5 numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].
// ---

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].



/*
Understanding

- input
  - 6 numbers: 
  - prompt from to user

- output
  - 6th in number 1 to 5

- assuming 
  - all valid numbers

Algorithm
- loop  6 times to
  - prompt to get number from unser
  - push to array

- compare 6th 
  - indexOf() is not 5

*/


let numbers = [];

numbers.push(parseInt(prompt('Enter the 1st number:'), 10));
numbers.push(parseInt(prompt('Enter the 2nd number:'), 10));
numbers.push(parseInt(prompt('Enter the 3rd number:'), 10));
numbers.push(parseInt(prompt('Enter the 4th number:'), 10));
numbers.push(parseInt(prompt('Enter the 5th number:'), 10));

let lastNumber = parseInt(prompt('Enter the last number:'), 10);

if (numbers.indexOf(lastNumber) >= 0) {
  console.log('The number ' + lastNumber + ' appears in [' + numbers + '].');
} else {
  console.log('The number ' + lastNumber + ' does not appear in [' + numbers + '].');
}


// Discussion

// The solution asks the user consecutively for a number and pushes it into the numbers array declared at the top. The solution uses Array methods. Notice, in particular, the use of the Array.prototype.indexOf() method to test whether a number is included in the set of numbers. Be sure to check out the documentation to have a better understanding of the methods used and are available.

// Further Exploration

// What if the problem was not looking for a specific number but a number that satisfies a condition, for instance is there a number > 25? Will the current solution still work? Why or why not? Think about this first before scrolling down:

// Possible solution:

// function isIncluded(arr, val) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > val) {
//       return true;
//     }
//   }

//   return false;
// }


// Explore the Array.prototype.some() function and see how you can convert the possible solution given to make use of that method instead.

numbers.some(function(n) {
  return lastNumber === n;
});
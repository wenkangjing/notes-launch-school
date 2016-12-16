// Combining Arrays

// Write a function that takes two Arrays as arguments, and returns an Array that contains the union of the values from the two. There should be no duplication of values in the returned Array, even if there are duplicates in the original Arrays. You may assume that the arguments will be Arrays only.

// Example

// union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]



























// Hide Solution & Discussion
// Solution

// function union() {
//   var newArray = [];
//   for (var i = 0; i < arguments.length; i++) {
//     for (var j = 0; j < arguments[i].length; j++) {
//       if (newArray.indexOf(arguments[i][j]) < 0) {
//         newArray.push(arguments[i][j])
//       }
//     }
//   }

//   return newArray;
// }
// Discussion

// The solution leverages the arguments object available for all functions. It uses two loops to up come with the union of the arrays passed. It stores the values of the combined arrays in the newArray variable. The outer loop iterates over all of the array arguments. The inner loop iterates over each element in the current array. At every iteration in the inner loop, it checks the value of the array against the values that are in the newArray variable. If the value isn't there yet, then it adds it. If the value is already present (a duplicate) then the inner loop will proceed to the next iteration (if any). After the outer loop iterates over all the array arguments passed, it returns the newArray variable.

// Further Exploration

// The current solution implemented works for two or more arrays. If yours doesn't, refactor it to make it work as such.
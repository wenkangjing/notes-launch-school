// Combining Arrays

// Write a function that takes two Arrays as arguments, and returns an Array that contains the union of the values from the two. There should be no duplication of values in the returned Array, even if there are duplicates in the original Arrays. You may assume that the arguments will be Arrays only.


/*

Understanding
- input
  - 2 arrays

- ouput
  - a new array
    - contains union value
    - no duplication

- question

- exceptions


Algorithm
- an object to store result: value as key, always true if exist 
- iterating 2 arrays one by one
  - push to object
- return object.keys

*/


function union_1(array1, array2) {
  let result = {};

  array1.forEach(function (element) {
    result[element] = result[element] || true; 
  })

  array2.forEach(function (element) {
    result[element] = result[element] || true; 
  })

  console.log(Object.keys(result));
  return Object.keys(result);
}

/*

Algorithm works for more than 2 arrays
  - assume all arguments are array
*/

function union() {
  let result = {};

  for (var i = 0; i < arguments.length; i++) {
    arguments[i].forEach(function (element) {
      result[element] = result[element] || true; 
    })
  }

  console.log(Object.keys(result));
  return Object.keys(result);
}



// Example

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
union([2, 3], [3, 2, 9]); // [2, 3, 9]
union([2], [2]); // [2]
union([1, 2], [1, 2]); // [1, 2]]
union([1, 2, 3], [1, 2]); // [1, 2, 3]]
union([1, 2, 3], [1, 2], [3, 4]); // [1, 2, 3]]


































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
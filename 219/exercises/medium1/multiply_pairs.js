// Multiply All Pairs

// Write a function that takes two Array arguments in which each Array contains a list of numbers, and returns a new Array that contains the product of every pair of numbers that between the elements of the two Arrays. Sort the results in increasing value.

// You may assume that neither argument is an empty Array.



/*

Understanding
- input
  - 2 array
    - each contains a list of numbers
    ? integers or float
    - non empty array

- output
  - a new array
    - product of all pairs of number

Algorithm
- conbime 2 array into one by nested forEach => product
- sort the product 

*/


function multiplyAllPairs(leftArray, rightArray) {
  let products = [];
  leftArray.forEach(function(leftItem) {
    rightArray.forEach(function (rightItem) {
      products.push(leftItem * rightItem);
    })
  });

  products.sort(function (a, b) {
    return a > b; // should be a - b, asc
  });

  return products;
}


// Examples:
multiplyAllPairs([1], [1]) // [1]
multiplyAllPairs([5, 2], [3]) // [6, 15]
multiplyAllPairs([2, 4], [4, 3, 1, 2]) // [2, 4, 4, 6, 8, 8, 12, 16] // 8, 6, 2, 4, 16, 12, 4, 8 => 2, 4, 4, 6, 8, 8, 12, 16


// Hide Solution & Discussion
// Solution

// function multiplyAllPairs(array1, array2) {
//   var result = [];
//   array1.forEach(function(element1) {
//     array2.forEach(function(element2) {
//       result.push(element1 * element2);
//     });
//   });

//   return result.sort(function(a, b) {
//     return a - b;
//   });
// }
// Discussion

// The solution uses the iteration list processing strategy since it wants to do something with each element in the array and it wants to update the value of the result array with it. Nested forEach loops get all the possible pairs. At the inner forEach loop it multiplies the outer element1 with the inner element2 and consequently pushes the product to the result array.

// After the iteration, it returns the values from highest to lowest using the Array.prototype.sort() method.
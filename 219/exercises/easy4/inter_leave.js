// Combine Two Lists

// Write a function that combines two Arrays passed as arguments, and returns a new Array that contains all elements from both Array arguments, with the elements taken in alternation. // 交替

// You may assume that both input Arrays are non-empty, and that they have the same number of elements.


/*

Understanding
- input
  - 2 arrays
    - non-empty
    - same length

- ouput
  - a new array

- question

- exceptions

- text cases

Algorithm
- iterating arrays first and second, index is i
  - push first[i]
  - push second[i]

- return new array
*/

function interleave (first, second) {
  let alternativeArray = [];

  for (var i = 0; i < first.length; i++) {
    alternativeArray.push(first[i]);
    alternativeArray.push(second[i]);
  }

  console.log(alternativeArray);
  return alternativeArray;

}




// Example:

interleave([1, 2, 3], ['a', 'b', 'c']); // [1, 'a', 2, 'b', 3, 'c']
interleave(['a','b'], ['x', 'y']);
interleave(['one'], ['1']);  





// Hide Solution & Discussion
// Solution

// function interleave(array1, array2) {
//   var newArray = [];
//   for (var i = 0; i < array1.length; i++) {
//     newArray.push(array1[i], array2[i]);
//   }

//   return newArray;
// }
// Discussion

// The solution iterates n number of times; where n is the value of the length of either array1 or array2. At every iteration it pushes the values of array1 and array2 to the newArray variable sequentially. It only uses one push call since Array.prototype.push() can take in n number of arguments.
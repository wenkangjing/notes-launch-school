// Halvsies

// Write a function that takes an Array as an argument, and returns two Arrays that contain the first half and second half of the original Array, respectively. If the original array contains an odd number of elements, place the middle element in the first half Array.

/*

Understanding
- input
  - an array number/string/anything

- output
  - a array contains 2 arrays
    - first half
    - second half

- rules
  - even length, balanced     
  - odd length, first + middle, second 


Algorithm
- separate index = ceil of (length / 2)

- frst half = slice 0 - separate index
- second half = slice(separate index)


*/

function halvsies (array) {
  let divider =Math.ceil(array.length / 2);
  let first = array.slice(0, divider); // exclusive divider
  let second = array.slice(divider); // till end
  
  return [first, second];
}



// Examples:

console.log(halvsies([1, 2, 3, 4]));    // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));             // [[5], []]
console.log(halvsies([]));              // [[], []]



// Hide Solution & Discussion
// Solution

// function halvsies(array) {
//   var half = Math.ceil(array.length / 2);
//   var firstHalf = array.slice(0, half);
//   var secondHalf = array.slice(half);

//   return [firstHalf, secondHalf];
// }
// Discussion

// The basic task is to split the array argument into two pieces; A first and second half. The solution gets the size of the first by dividing the array argument's length by two. If it is odd in length, then the Math.ceil() method will account for it, making the first half larger than the second by 1. It creates the second half based on the size of the first half. It uses the Array.prototype.slice() method to create both halves. Finally, it returns the halvsies arrays composed of the firstHalf and secondHalf as elements.
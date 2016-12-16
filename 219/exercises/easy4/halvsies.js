// Halvsies

// Write a function that takes an Array as an argument, and returns two Arrays that contain the first half and second half of the original Array, respectively. If the original array contains an odd number of elements, place the middle element in the first half Array.

// Examples:

// halvsies([1, 2, 3, 4])    // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]) // [[1, 5, 2], [4, 3]]
// halvsies([5])             // [[5], []]
// halvsies([])              // [[], []]



















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
/*
Write a function named arraysEqual that takes two Arrays as arguments. 
The function returns true if the Arrays contain the same values, false if they do not.

Test the function with Arrays that contain Numbers, Strings, and Boolean values. 
Don't worry about handling Arrays that contain other Arrays or Objects.

*/


// length
// element
function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;
}





console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false
/*
In the exercises below, we ask you to write functions that work with Arrays. You may use Array's index access ([]), the length property, and any Array Methods you need.





*/

/*
1. Write a function that returns the first element of an array passed in as an argument.

*/

function firstElementOf(arr) {
  return arr[0];
}

console.log(firstElementOf(['U', 'S', 'A'])); // Returns "U"

/*
2. Write a function that returns the last element of an array passed in as an argument.
*/
function lastElementOf(arr) {
  return arr[arr.length - 1];
}

console.log(lastElementOf(['U', 'S', 'A'])); // Returns "A"

/*
3. Write a function that accepts two arguments, an array and an integer index position, and returns the element at the given index. What happens if the index is greater than the length of the array? What happens if it is a negative integer?
*/
function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(nthElementOf(digits, 3)); // Returns 16
console.log(nthElementOf(digits, 8)); // What does this return?
console.log(nthElementOf(digits, -1)); // What does this return?

/*
4. Can we insert data into an array at a negative index? If so, why is this possible?

*/

digits[-1] = -42;
nthElementOf(digits, -1);
digits[-1];
digits['-1']; // Note that we are using a string here
/*
Yes, we can do this since all arrays are objects in JavaScript. You will learn more about this in the next lesson, but for now, try these statements on the digits array you used above and examine the return values.

property array is object, key value pair

*/



/*
5. Write a function that accepts 
 an array as the first argument and 
an integer element, count, as the second. 
It should return a new array that contains the first count elements of the array.

*/

// should use build-in function 
function firstNOf_1(arr, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3)); // Returns [4, 8, 15]



/*
6. Write a function like the previous one, except this time return the last count elements as a new array.

*/
function lastNOf(arr, count) {
  // If end is omitted, slice extracts through the end of the sequence (arr.length).
  return arr.slice(arr.length - count, arr.length);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3)); // Returns [16, 23, 42]


/*
Using the function from the previous exercise, 
What happens if you pass a count greater than the length of the array? 
How can you fix the function so it returns a new instance of the entire array when count is greater than the array length?


*/

// As a negative index, begin indicates an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
// If begin is undefined, slice begins from index 0.

function lastNOfEx(arr, count) {
  // If end is omitted, slice extracts through the end of the sequence (arr.length).
  var start = arr.length - count;
  if (start < 0 ) {
    start = 0;
  }
  return arr.slice(start, arr.length);
}

/*
When you pass a count greater than the array length, the arithmetic in the function becomes a negative value. slice interprets a negative value as a position relative to the end of the array. So, if we pass a count of 9 with our digits array, lastNOf calls slice with an argument of -3. slice thus returns the final three elements of digits.

To change this behavior, we can calculate the starting position, then adjust it to 0 if it is negative. We can pass the resulting value to slice, which returns a new copy of the array when the value is 0.


*/




/*
8.Write a function that accepts two arrays as arguments and 
returns an array with the first element from the first array and the last element from the second array.


*/


function endsOf(beginningArr, endingArr) {
  var newArray = [];
  newArray.push(beginningArr[0]);
  newArray.push(endingArr[endingArr.length - 1]);
  return newArray;
}

console.log(endsOf([4, 8, 15], [16, 23, 42])); // Returns [4, 42]
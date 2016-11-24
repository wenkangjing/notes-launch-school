/*
With arrays, you can access the first element's value with [0], but how do you access the last value? Write a function named lastInArray that returns the value of the last element in the array provided by the function's argument. You may use the length property and the [] operator, but do not use any other methods or properties.
*/
function lastInArray(array) {
  return array[array.length - 1];
}

console.log(lastInArray([1, 2, 3, 4]));

/*
Create a function named rollCall that takes an array of first names as an argument and logs all the names to the console, one name per line. You should log the names in the same sequence they appear in the array. Use a for loop to process the array.
*/


function rollCall(names) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
} 

var names = ['Jamie', 'Tim', 'Joe'];
rollCall(names);

/*
Create a function that returns the contents of the array it receives as an argument, but with the values in reversed order. Your function should use a for loop that iterates over the elements in the array from the end of the array to the beginning, and pushes each element's value to a new result array. Be sure to start your loop with the element whose index is one less than the input array's length.
*/

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

/*
4. Create a function that finds the first instance of a value in an array and returns the index position of the value, or -1 if the value is not in the array. The function should take two arguments: the value to search for, and the array to search. Use the break keyword to exit the loop immediately When you find the first instance of the value. If you don't find the value, make sure you don't use the final index value as your return value.

for (var i = 0; i < array.length; i++) {
  // if match is found
  break;
}

*/


function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf([1,2,3,4,5], 2));
console.log(indexOf([1,2,3,4,5], 'a'));

/*
function firstIndex(val, arr) {
var position = -1;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === val) {
    position = i;
    break;
  }
}

return position;
}

console.log(firstIndex(2, [1, 2, 3]));
console.log(firstIndex(9, [1, 2, 3]));
*/


/*

Write a function that returns a string of all the values in an array with no intervening content. For example, your function should return '1a4' if the argument is [1, 'a', 4]. Use a for loop to process the array elements in sequence, and coerce each value in the array to a String before concatenating it to the result string.

*/

// assume: not nested array
function toString_1(array) {
  var string = '';
  for (var i = 0; i< array.length; i++) {
    string += array[i];
  }
  return string;
}

function arrayToString_1(arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      continue;
    }
    str += arr[i].toString();
  }

  return str;
}

function arrayToString_1(arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    str += String(arr[i]);
  }

  return str;
}

console.log(arrayToString([1, 2, 3]));
console.log(arrayToString([1, 3, 'abc', undefined]));
console.log(arrayToString([1, 2, 3, NaN]));
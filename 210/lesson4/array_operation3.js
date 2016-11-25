/*

Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.


*/

function slice(array, start, end) {
  var newArray = [];
  for (var i = 0; i < end - start; i++) {
    newArray[i] = array[start + i];
  }
  return newArray;
}

slice([1, 2, 3, 4, 5], 0, 2);                         // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);     // [ 'b', 'c' ]

/*
Write a function named splice that accepts three arguments: 
an Array, 
a start index, 
and the number of values to remove. 
The function should remove values from the original Array, starting with the first index and removing the specified number of values. 
The method should return the removed values in a new Array.
*/

// no good
function splice_1(array, start, count) {

  var removedValues = slice(array, start, start + count);
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    if (i < start || i > start + count - 1) {
      array[j] = array[i];
      j++;
    }
  }
  array.length = array.length - removedValues.length;

  return removedValues;
}


function splice_2(array, start, count) {
  var removedValues = [];
  // no chagnes on elements that index < start 
  for (var i = start; i < array.length; i++) {
    if (i < start + count) {
      removedValues.push(array[i])
    } else {
      array[i - count] = array[i]; // bigger than end should move left count steps
    }
  }
  array.length = array.length - count;

  return removedValues;
}


function splice(array, begin, number) {
  var removedValues = [];
  for (var i = begin; i < array.length; i++) {
    if (i < begin + number) {
      removedValues.push(array[i]);
    }

    array[i] = array[i + number]; // append undefined 
  }

  array.length = array.length - number;
  return removedValues;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));        // [ 3, 4, 5, 6, 7 ]
count;   

/*

Write a function named concat that accepts two Array arguments. 
The function should return a new Array that contains the values from each of the original Arrays.

*/


function concat_1(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    newArray[i] = array1[i];
  }
  for (var j = 0; j < array2.length; j++) {
    newArray[j + array1.length] = array2[j]
  }
  return newArray;
}


function concat(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
  }
  for (var j = 0; j < array2.length; j++) {
    newArray.push(array2[j]);
  }
  return newArray;
}
console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

/*
Write a function named join that accepts two arguments: an Array and a String. 
The function should coerce each value in the Array to a String, 
and then join those values together using the second argument as a separator.

You can call the toString() method on any JavaScript value to get its String representation.
*/


function join_1(array, string) {
  var result = '';

  for (var i = 0; i < array.length - 1; i++) {
    result += array[i].toString() + string;
  }
  result += array[array.length - 1].toString();
  return result;
}

function join(array, separator) {
  var result = '';
  for (var i = 0; i < array.length; i++){
    // similary to li + li {mergin-left}, 
    // igore the first, and add before the rest iteration other than 0
    if (i > 0) {
      result += separator; 
    }
    
    if ( array[i] !== undefined && array[i] !== null) {
      result += array[i].toString();
    } 
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
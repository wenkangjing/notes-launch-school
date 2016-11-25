/*
Write a function named push that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array and return the new length of the Array.

var count = [1, 2, 3];
push(count, 4);   // 4
count;            // [ 1, 2, 3, 4 ]

*/

// forgot to return new length, read description carefully, please
function push(array, value) {
  array[array.length] = value;
  return array.length;
}

// test
// var count = [1, 2, 3];
// push(count, 4);   // 4
// console.log(count);            // [ 1, 2, 3, 4 ]


/*
2. Write a function named pop that accepts one argument: an Array. The function should remove the last element from the array and return it.

var count = [1, 2, 3];
pop(count);           // 3
count;                // [ 1, 2 ]

*/

// forgot the return value again
function pop(array) {
  var value = array[array.length - 1];
  array.length--; 
  return value;
}


// var count = [1, 2, 3];
// pop(count);           // 3
// console.log(count);                // [ 1, 2 ]


/*
Write a function named unshift that accepts two arguments: an Array and a value. The function should insert the value at the beginning of the Array and return the new length of the array. You will need a for loop for this exercise.

var count = [1, 2, 3];
unshift(count, 0);        // 4
count;                    // [ 0, 1, 2, 3 ]

*/

// insert to index 0
// return new len
// pushFirst
function unshift_1(array, value) {
  var newLength = array.length + 1;
  for (var i = newLength - 1; i >= 1; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return newLength;
}

function unshift(array, value) {
  for (var i = array.length; i >= 1; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  return array.length;
}

// var count = [1, 2, 3];
// unshift(count, 0);        // 4
// console.log(count);                    // [ 0, 1, 2, 3 ]

// unshift(count, -1);        // 5
// console.log(count);                    // [ -1, 0, 1, 2, 3 ]


/*
4 Write a function named shift that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]


*/

// popFirst
function shift_1(array) {
  var value = array[0];
  for (var i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array.length--;
  return value;
}

function shift(array) {
  var first = array[0];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1]; // apend the last one to undefined
  }

  array.length = array.length - 1;
  return first;
}

var count = [1, 2, 3];
shift(count);           // 1
console.log(count);                  // [ 2, 3 ]
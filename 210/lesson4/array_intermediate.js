// 1. 
// Write a function that returns a new array of the elements in odd positions of an array parameter.

function oddElementsOf(arr) {
  var oddElements = [];
  for (var i = 1; i < arr.length; i = i + 2) {
    oddElements.push(arr[i]);
  }
  return oddElements;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits)); // Returns [8, 16, 42]


//2
// Write a function that accepts two arrays and 
// returns a new array whose 
// even positions are from the first array and 
// odd positions are from the second array. 
//Assume both arrays are equal length.

function combinedArray(even, odd) {
  if (even.length !== odd.length) {
    console.log('ERROR: un equal arrays');
    return;
  }
  
  var newArray = [];
  for (var i = 0; i < even.length; i++) {
    newArray.push(even[i]);
    newArray.push(odd[i]);
  }
  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters)); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]


// 3. Write a function that returns a new array that 
//contains a combination of the existing array elements as-is 
//and the array elements in reverse order.

// find a proper function, don't loop yourself
// reverse is in place

function mirroredArray(array) {
  return array.concat(array.slice().reverse());
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(mirroredArray(digits));

// The reason this doesn't work is because the reverse method is called first, which mutates the value of the arr variable. Then you are combining the reversed array with itself, giving you two reversed arrays instead of one as-is and one reversed. The simple solution to this is to first create a copy of the array, then reverse it. The simplest means of creating an array copy is to use the slice method.



// 4. Write a function that accepts an array and a string. 
//The function should return a string of the array elements joined together with the string used to join the elements together. 
//An array ["a", "b", "c] and a string "+" should return "a+b+c". 
//If no joining string is passed, use an empty string. In solving this exercise, do not use the built-in Array.prototype.join method.


function joinArray_1(arr, joiner) {
  var newArray = '';
  for (var i = 0; i < arr.length; i++) {
    if (i > 0 && joiner !== undefined) {
      newArray += joiner.toString();
    }
    newArray += arr[i].toString();
  }
  return newArray;
}

function joinArray(arr, joiner) {
  var joinedArray = arr[0].toString();
  for (var i = 1; i < arr.length; i++) {
    joinedArray += joiner + arr[i].toString();
  }
  
  return arr.join(joiner || '');
}
console.log(joinArray(['a', 'b', 'c'], '+')); // Returns "a+b+c"
console.log(joinArray([1, 4, 1, 5, 9, 2, 7])); // Returns "1415927"



// 5.

// 6.

// 7. 
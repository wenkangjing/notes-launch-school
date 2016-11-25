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



// 5. Using the array sort method, create a function that accepts 
// an array of numbers and 
//returns a new array of the numbers sorted 
//in descending order.
function compare(a, b) {
  return b - a;
}

function sortDescending_1(arr) {
  var sorted = arr.slice();
  sorted.sort(compare);
  return sorted;
}


// inline annoyous function
function sortDescending(arr) {
  var arrCopy = arr.slice();
  arrCopy.sort(function (a, b) { 
    return b - a; 
  });
  return arrCopy;
}

console.log(sortDescending([23, 4, 16, 42, 8, 15])); // Returns [42, 23, 16, 15, 8, 4]



// 6. Write a function that
// accepts an array of arrays and 
// returns a new array containing the sums of each of the sub arrays.


// misunderstand the description
function matrixSums_1(arr) {
  var arrPlain = [];
  for (var i = 0; i < arr.length; i++) {
     arrPlain = arrPlain.concat(arr[i]);
  }
  return arrPlain;
}

//We are going to create an empty array first to collect the final result. Then we have to iterate over the parent array, knowing that each element is an array itself which we need to iterate through to get the sum. Once we get the sum of an inner array, we're going to push it into the final result array. In the end, we'll have an array of sums that we can return.

function matrixSums(arr) {
  var arrPlain = [];
  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    arrPlain.push(sum);
  }
  return arrPlain;
}


console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]])); // Returns [15, 60, 12]

/*
function matrixSums(arr) {
  var sums = [];
  var currentSum;

  for (var i = 0, outerLen = arr.length; i < outerLen; i++) {
    currentSum = 0;
    for (var j = 0, innerLen = arr[i].length; j < innerLen; j++) {
      currentSum += arr[i][j];
    }

    sums.push(currentSum);
  }

  return sums;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]); // Returns [15, 60, 12]

*/

// 7. Write a function that takes an array and 
// returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // Returns [1, 2, 4, 3, 5]

// in-place remove dup??
//
// Array Copy 1
//

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// The value logged for myOtherArray at line 5 is the same as that of the value of myArray. This is because the value stored with the variable myArray is the reference to the location of the values and not the values itself. As such, when the program pops a value from myArray, myOtherArray mirrors the change.

// For line 8, the value of myOtherArray did not change because the value of the reference stored in line 7 is different. Performing a reassignment operation changes the value of the reference stored. As a result of line 7, myArray and myOtherArray now have different (reference) values stored and the change becomes local to myArray only.


//
// Array Copy 2
// Implement two(2) alternative ways of copying just the values and not the reference.
//

function deepCopy1(src, dest) {
  dest = Object.assign([], src);
}

function deepCopy2(src, dest) {
  src.forEach(function(current) {
    dest.push(src);
  });
}

function deepCopy3(src, dest) {
  dest = src.slice();
}

// The first alternative makes use of a loop to iterate over the array to get the values at the respective indices and pushes this value to myOtherArray. The second, and more concise, alternative is to leverage the Array.prototype.slice() method that returns a new array object and consequently a new reference value.

//
// Array Concat
// write a function that returns a new array composed of the first array argument and the second array or value argument. Take note of the following specifications when writing your own concat function.
// 

function concat(array1, secondArgument) {
  var newArray = array1.slice();
  if (Array.isArray(secondArgument)) {
    secondArgument.forEach(function(current) {
      newArray.push(current);
    });
  } else {
    newArray.push(secondArgument);
  }
  return newArray;
}

concat([1, 2, 3], [4, 5, 6]);            // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                       // [1, 2, 3]
concat([2, 3], ['two', 'three']);        // [2, 3, "two", "three"]
concat([2, 3], 'four');                  // [2, 3, "four"]

var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);     // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                                // [2, 3, { a: 'two', b: 3 }]

// The solution makes use of two loops to join together the two arrays. The first loop builds the base array, newArray, from array1. The second loop adds the secondArgument to the base array at every iteration. The tricky part is determining whether the second argument is an array or not. To check for this, the solution makes use of the Array.isArray() method to determine if it is. If it is, then the content it iterates over it so that it adds to the base array; if it isn't it adds it directly to the end of the existing array.

// In the second loop, the index used when adding an element is the current length of the array. Using this as the index always adds the new element immediately after the current last element.

// The Built-in Method

// In this exercise the solution implements a simple version of JavaScript's built-in array method. The built-in concat method is not limited to concatenating together two arrays and it can be called directly from any JavaScript array.

//
// Array Concat 2
// In this exercise you are going to extend on the functionality by allowing concatenation of 2 or more arrays.

function concat2(array) {
  var newArray = array.slice();

   for (var i = 1, outLength = arguments.length; i < outLength; i++) {
    if (Array.isArray(arguments[i])) {
      arguments[i].forEach(function(current) {
        newArray.push(current);
      });
    } else {
      newArray.push(arguments[i]);
    }
  }
  return newArray;
}


concat2([1, 2 ,3], [4, 5, 6], [7, 8, 9]);           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
concat2([1, 2], "a", ["one", "two"]);               // [ 1, 2, "a", "one", "two" ]
concat2([1, 2], ["three"], 4);                      // [ 1, 2, "three", 4 ]

// The main difference with this solution is the addition of another loop. The loop iterates over the arguments passed using the argument object that is available to all functions. The iteration starts with index 1 since index 0 is the base array by which all other arguments (arrays and/or values) passed gets concatenated to.

//
// Array Pop and Push
// implement your own version of two array methods: Array.prototype.pop() and Array.prototype.push(). pop removes the last element in an array and returns it. If the array is empty when it calls pop, it returns undefined. push, on the other hand, adds one or more elements to the end of an array and returns the new length.

function pop_1(array) {
  var result;
  if (array.length > 0) {
    result = array[array.length - 1];
    array[array.length - 1] = undefined;
    array.length = array.length - 1;
  }
  return result;
}

function pop(array) {
  var result = array[array.length - 1];
  array.splice(array.length - 1);
}

function push (array) {
  for (var i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i]; 
  }
  return array.length;
}

var array = [1, 2, 3]
pop(array);                   // 3
console.log(array)            // [1, 2]
pop([]);                      // undefined
pop([1, 2, ['a', 'b', 'c']]); // [ 'a', 'b', 'c' ]

var array = [1, 2, 3]
push(array, 4, 5, 6);         // 6
console.log(array)            // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);     // 3
push([], 1);                  // 1
push([]);                     // 0


//
// Array and String Reverse
// re-implement the Array.prototype.reverse() method. This implementation differs from the built-in, in that it can take either a string or an array as an argument and consequently it returns a new string or array.
//


function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else if (typeof inputForReversal === 'string') {
    return reverseString(inputForReversal);
  } else {
    return undefined;
  }
}

// should abstract 2 functions

function reverseArray(array) {
  var reversed = [];

  for (var i = array.length - 1; i >= 0 ; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reversString_1(string) {
  var reversed = '';
  for (var i = string.length - 1; i >= 0 ; i--) {
    reversed += string[i]
  }
  return reversed;
}

function reverseString(inputForReversal) {
  stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}

reverse('Hello');          // elloH
reverse('a')               // a
reverse([1, 2, 3, 4]);     // [4, 3, 2, 1]
reverse([]);               // []

// The first step in solving this exercise is identifying the input. Once identified, the next step is to do the reversal base on the input type.

// The solution uses separate functions to reverse the input; one for each with the one for strings leveraging the one for arrays. The function for array reversal declares and consequently returns a variable that is incrementally built using a loop that iterates over all the characters/elements of the string/array starting from the end. The function for the string starts of splitting it into characters, then calling the array reversal function and then joining the characters at the end.

// The Built-in Method

//The function implemented for this exercise is similar to the built-in Array.prototype.reverse() method. The main difference is that the built-in method reverses arrays in place and that it is called directly from the array object.



//
// Array Shift and Unshift
// Let's build our version of Array.prototype.shift() and Array.prototype.unshift() methods that manipulates the contents of an array starting from the first index. 
// The shift function removes the first element of an array and returns a new array. 
//The unshift function adds one or more elements to the start of an array and returns a new array. Both shfit and unshift leave the original array as is.

// Return undefined if the array passed to shift has length 0.

function shift(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  return newArray;
}

function unshift(array) {
  var newArray = [];

  for (var i = 1; i < arguments.length; i++) {
    newArray[newArray.length] = arguments[i];
  }
  
  array.forEach(function(e) {
    newArray.push(e);
  });

  return newArray;
}


shift([1, 2, 3]);                // [2, 3]
shift([]);                       // undefined
shift([[1, 2, 3], 4 ,5]);        // [4, 5]

unshift([1, 2, 3], 5, 6);        // [5, 6, 1, 2, 3]
unshift([1, 2, 3]);              // [1, 2, 3]
unshift([4, 5], [1, 2 ,3]);      // [[1, 2, 3], 4, 5]

var testArray = [1, 2, 3];
shift(testArray);                // [2, 3]
testArray;                       // [1, 2, 3]
unshift(testArray, 5);           // [5, 1, 2, 3]
testArray;                       // [1, 2, 3]

// For the shift function, the solution uses a loop and a temporary array. The loop incrementally builds the temporary array. The key for this is to loop through all of the elements except the first.

//Like the shift function, unshift also only needs a loop and a temporary array. The loop is still used to incrementally build an array but this time the first element will be the zero or more elements passed. Each element of the old array gets added to the temporary array.

//The Built-in Method

//Compared to the built-in Array.prototype.shift() and Array.prototye.unshift() methods, the function built does not mutate the arrays. Additionally, the return value for the built-in unshift is the new length of the array. The built-in methods can also be called directly from the array objects.

//
// Array Slice and Splice
// 


function slice(array, begin, end) {
  var sliced = [];

  // if (begin < 0) {
  //   begin = array.length + begin;
  //   if (begin < 0) {
  //     begin = 0;
  //   }    
  // }

  // if (begin === undefined) {
  //   begin = 0;
  // }
  // if (end === undefined) {
  //   end = array.length;
  // }

  // undefined
  if (!begin) { 
    begin = 0;
  }

  // out of boundary
  if (begin < 0 && Math.abs(begin) > array.length) {
    begin = 0;
  }

  // negative but within boundary
  if (begin < 0) {
    begin = array.length + begin;
  }

  // 
  if (end === undefined || end > array.length) {
    end = array.length;
  }

  if (end < 0) {
    end = array.length + end;
  }

  for (var i = begin; i < end; i++) {
    sliced.push(array[i]);
  }

  return sliced;
}

slice([1, 2, 3]);                 // [1, 2, 3]
slice([1, 2, 3], 0);              // [1, 2, 3]
slice([1, 2, 3], 1);              // [2, 3]
slice([1, 2, 3], -1);             // [3]
slice([1, 2, 3], -2);             // [2, 3]
slice([1, 2, 3], -6);             // [1, 2, 3]
slice([1, 2, 3], 1, 2);           // [2]
slice([1, 2, 3], 2, 0);           // []



function splice(array, start, deleteCount) {
  var spliced = [];

  if (start > array.length) {
    start = array.length;
  }
  if (start < 0) {
    start = array.length + start;
    if (start < 0) {
      start = 0;
    }
  }

  var end = start + deleteCount;
  if (deleteCount > array.length - start || deleteCount === undefined) {
    end = array.length;
  } 

  for (var i = 0; i < start; i++) {
      spliced.push(array[i]);
  }

  for (var i = 3; i < arguments.length; i++) {
    spliced.push(arguments[i]);
  }

  for (var i = end; i < array.length; i++) {
      spliced.push(array[i]);
  }

  return spliced;
}

splice([1, 2, 3], 0);                      // []
splice([1, 2, 3], 1, 2);                   // [1]
splice([1, 2, 3], -1, 1);                  // [1, 2]
splice([1, 2, 3], 1);                      // [1]
splice([1, 2, 3], -1);                     // [1, 2]
splice([1, 2, 3], 1, 3);                   // [1]
splice([1, 2, 3], 1, 1, 'two')             // [1, "two", 3]
splice([1, 2, 3], 1, 2, 'two', 'three')    // [1, "two", "three"]
splice([1, 2, 3], 1, 0);                   // [1, 2, 3]
splice([1, 2, 3], 0, 1);                   // [2, 3]



// The slice function is straight forward. The solution loops through the elements of the original array starting from the beginning index up to but not including the ending index and assigns those values to a new array. The thing to handle for the slice functions are the values to use depending on the arguments passed to begin and end. The series of conditionals follow the description that given.

//The splice function is bit more difficult to follow because there are two things happening; deleting and adding elements. However, if you dissect this function you can think of it as having the following parts:

//1 slice from 0 to start
//2 Optional items to add. These come from the arguments object starting from index 3
//3 slice from start + deleteCount - 1 to end of array

//The resulting array is incrementally built from the result of the three. With these parts, the thing to take note again would be the values of start and deleteCount depending on the arguments passed. There are two conditionals put in place to handle the value for start and deleteCount.

//The Built-in Method

//We've implemented functions that are similar to the built-in methods of Array.prototype.slice() and Array.prototype.splice(). The main difference is that both methods mutate the array. The built-in splice method also returns an array of the deleted elements and not the original array less the deleted and added elements. Both built-in methods are called directly from the array objects.

//
// Oddities
//

// The oddities function returns an Array that contains every other element of an Array that passed as an argument. The values in the returned list are those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array. Below is a sample run of the program that uses the output as part of a comparison. Can you explain the results of the comparison?

function oddities(array) {
  var oddElements = [];
  for (var i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }
  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6]   // false
oddities(['abc', 'def']) === ['def']      // false

// The result for the comparison will always be false unless it is the actual objects that are compared. Recall that Arrays are Objects and that the only way for the === comparison operator to return true for array comparison is if its the exact same objects or a comparison is done between the contents of the array and not the array itself.

//
// Array Comparison
//

// In the arrays lesson, we implemented a version of comparing arrays that had an implicit assumption that elements are in the same indices when compared. In this exercise, the objective is to implement the same function but this time it compares the values of the arrays from any index (i.e. [1, 2, 3] === [3, 2 ,1] will return true).


// loop array1, if found in array2, remove it from array2 and continue search
// return false if not found
function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  var index;
  for (var i = 0; i < array1.length; i++) {
    index = array2.indexOf(array1[i]);
    if (index >= 0) {
      array2.splice(index, 1) // this mutate array2, side effects
    } else {
      return false;
    }
  }

  return true;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a'])       // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false

///
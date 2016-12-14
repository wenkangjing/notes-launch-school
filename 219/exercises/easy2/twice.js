// Double Doubles

// A double number is an even length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, 7676 are all double numbers. 444, 334433, and 107 are not.

// Write a function that returns 2 times the number provided as an argument, unless the argument is a double number; return double numbers as-is.


/*
Understanding
- input
  - a number, positive, 0, negative
- output
  - if not double number
    2 * given number
  - else
    -  the number itself

Algorithm
  - if is double nubmer
    return number
  - else 
    return 2 * number

Abstraction
  - isDoubleNumber(number)
    - false if length is odd
    - separate into 2 parts
      - left: 0 - length/2
      - right: length/2 - end   
    - iterating 2 parts
      - char is equal in each iteration
      - any not equal char found, return false
*/

function twice(number) {
  return isDoubleNumber(number) ? number : 2 * number;
}

function isDoubleNumber(number) {
  let string = String(number);
  
  if (string.length % 2 === 1) {
    return false;
  }

  let left = string.slice(0, string.length / 2);
  let right = string.slice(string.length / 2);

  if (left.length !== right.length) {
    return false;
  }

  // not needed, in JS, strings are compared by value
  // for (let i = 0; i < left.length; i++) {
  //   if (left[i] !== right[i]) {
  //     return false;
  //   }
  // }

  return left === right;
}

// Examples:
console.log(twice(37));                 // 74
console.log(twice(44));                 // 44
console.log(twice(334433));             // 668866
console.log(twice(444));                // 888
console.log(twice(107));                // 214
console.log(twice(103103));             // 103103
console.log(twice(3333));               // 3333
console.log(twice(7676));               // 7676


// Solution

// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

// function isDoubleNumber(number) {
//   var stringNumber = number.toString();
//   var center = stringNumber.length / 2;
//   var leftNumber = stringNumber.substring(0, center)
//   var rightNumber = stringNumber.substring(center);
//   return leftNumber === rightNumber;
// }


// Discussion

// The challenging part for this problem is determining how to compare the left-hand side numbers with the right-hand side numbers. The trick is not to compare them as numbers but as strings.

// Given this, the solution does the following via the isDoubleNumber function:

// Gets the left and right-hand side substrings by getting the middle index of the stringNumber.
// Returns the result of comparing the left and right-hand side.
// If the length of stringNumber is odd, it is not a double number.
// If the length of stringNumber is even, there is a chance that it is a double number
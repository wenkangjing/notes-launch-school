// Stringy Strings

// Write a function that takes one argument, a positive integer, and returns a string of alternating 1s and 0s, always starting with 1. The length of the string should match the given integer.

/*
Understanding
- input 
  - positive integer
- output
  - a string, 101010...10
  - start with 1
  - length is the given number

Algorithm
- loop from 0 to length - 1
  - odd index: append 1
  - even index: append 0
  => append index % 2 (optional)

*/

function stringy_1(number) {
  let string = '';
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      string += '1';
    } else {
      string += '0';
    }
  }
  console.log(string);
  return string;
}

function stringy(number) {
  let string = '';
  for (var i = 0; i < number; i++) {
    string += String((i + 1) % 2); 
  }
  return string;
}



// Examples:

stringy(6) // '101010'
stringy(9) // '101010101'
stringy(4) // '1010'
stringy(7) // '1010101'
stringy(1) // '1'
stringy(2) // '10'
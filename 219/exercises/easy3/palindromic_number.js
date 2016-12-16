// Palindromic Number

// Write a function that returns true if its integer argument is palindromic, false otherwise. A palindromic number reads the same forwards and backwards.


/*
Understanding
- input
  - number

- output 
  - ture/false if the number is palindromic

Data Structure
- string
- array

Algorithm
- convert to string, reverse by array
- compare to the original

*/




function isPalindromicNumber (number) {
  let original = String(number);
  let reversed = original.split('').reverse().join('');

  return original === reversed;
}



// Examples:

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(0));            // true
console.log(isPalindromicNumber(001));            // true



// Discussion

// The hardest part of this exercise is recognizing that the easiest way to tell if a number is palindromic is to convert it to a string first, then checking whether that string is palindromic. Realizing this, the solution first just uses the isPalindrome function written earlier.

// Further Exploration

// Suppose the number passed begins with one or more 0s. Will the solution still work? Why or why not? Is there any way to address this?
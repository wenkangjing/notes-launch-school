// Uppercase Check

// Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase, false otherwise. Ignore characters that are not alphabetic.



/*

Understanding
- input
  - a string
    - ''
    - alphabetic
    - numberic

- output
  - boolean
    - all alphabetic chars are uppercase1
    - ignore non-alphabetic chars
    - ignore ''

Data Structure
  - string
    - toUpperCase()

Algorithm
- compare given string and the reuslt of toUpperCase()
  - toUpperCase ignores the non-alphabetic chars and returns the original ones.

*/



function isUppercase_1(string) {
  return (string.toUpperCase() === string);
}


/*
Algorithm using regex
- match /[a-z]/g
  -  no match
*/
function isUppercase(string) {
  // return string.match(/[a-z]/g) === null;
  return !string.match(/[a-z]/g);

}

// Examples:

isUppercase('t');          // false
isUppercase('T');          // true
isUppercase('Four Score'); // false
isUppercase('FOUR SCORE'); // true
isUppercase('4SCORE!');    // true
isUppercase('');           // true
isUppercase('4');           // true
isUppercase(' ');           // true



// Hide Solution & Discussion
// Solution

// function isUppercase(string) {
//   return !string.match(/[a-z]/g);
// }
// Discussion

// This is one of the problems wherein you can take advantage of regex to process strings. The solution use a regex pattern to determine if there are any lowercase letters in the string argument. It then uses ! to reverse the truthy/falsy value of it which will return as false if there any lowercase letters.
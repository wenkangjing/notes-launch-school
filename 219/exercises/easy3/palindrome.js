// Palindromic Strings Part 1

// Write a function that returns true if the string passed as an argument is a palindrome, false otherwise. A palindrome reads the same forwards and backwards. For this problem the case matters and all characters matter.

// Examples:

// isPalindrome('madam')                    // true
// isPalindrome('Madam')                    // false (case matters)
// isPalindrome('madam i\'m adam')          // false (all characters matter)
// isPalindrome('356653')                   // true


/*
Understanding
- input
  - a string
  - odd/even length

- output
  - ture/false whether or not the atring is palindrome
*/  



/*
Algorithm //using array

- separate to left and right Part
  - subLength floor of (length -1) /2 
  - left:  0 - subLength
  - right: reversed string 0 - subLength

- return left === right

*/

function isPalindrome_1(string) {
  let subLength = Math.floor(string.length / 2);
  let left = string.substr(0, subLength);
  
  let reversed  = string.split('').reverse().join('');
  let right = reversed.substr(0, subLength);

  return (left === right);
}



/*
Algorithm //iterating string

- loop string from 2 end, lIndex=0, rIndex=length - 1
   - string[lindex] === string[rIndex]
   - lIndex++ and rIndex
   - until lIndex >=rIndex
*/


function isPalindrome(string) {
  let lIndex = 0;
  let rIndex = string.length - 1;

  while (lIndex <= rIndex) {
    if (string[lIndex] !== string[rIndex]) {
      return false;
    }
    lIndex++;
    rIndex--;
  }

  return true;
}


// Test cases
console.log(isPalindrome('m'));                        // true
console.log(isPalindrome('mm'));                        // true
console.log(isPalindrome('madam'));                    // true
console.log(isPalindrome('Madam'));                    // false (case matters)
console.log(isPalindrome('madam i\'m adam'));          // false (all characters matter)
console.log(isPalindrome('356653'));                   // true


// Hide Solution & Discussion
// Solution

// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }
// Discussion

// The solution leverages the Array.prototype.reverse() and Array.prototype.join() methods of the Array object by converting the string input into an array using the String.prototype.split() function.

// With the use of those methods, the solution is straightforward.


///////////////////////////////////////////////////////

// Palindromic Strings Part 2

// Write another function that returns true if the string passed as an argument is a palindrome, false otherwise. This time, however, your function should be case-insensitive, and it should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

// isRealPalindrome('madam')               // true
// isRealPalindrome('Madam')               // true (case does not matter)
// isRealPalindrome('Madam, I\'m Adam')    // true (only alphanumerics matter)
// isRealPalindrome('356653')              // true
// isRealPalindrome('356a653')             // true
// isRealPalindrome('123ab321')            // false


/*
case-insensitive: toLowerCase()
ignore non-alphanumeric chars, 
  - non a-z
  - not 0-9 
  - repalce(/[^a-z0-9]/ig)
*/


// Hide Solution & Discussion
// Solution

// function isRealPalindrome(string) {
//   string = removeNonLetterNumbers(string.toLowerCase());
//   return isPalindrome(string);
// }

// function removeNonLetterNumbers(string) {
//   var result = '';
//   for (var i = 0; i < string.length; i++) {
//     if (isLetter(string[i]) || isNumber(string[i])) {
//       result += string[i];
//     }
//   }

//   return result;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isNumber(char) {
//   return char >= '0' && char <= '9';
// }
// Discussion

// The first part of the solution makes all characters lower cased. The second uses the removeNonLetterNumbers function to replace any characters that are not alphanumeric using 2 helper functions that checks for either a letter or number respectively. The solution relies on this to clean up the characters that are not subject to comparison. It then uses the isPalindrome function from the earlier exercise.

// Recall that strings are compared based on standard lexicographical ordering, using Unicode values.
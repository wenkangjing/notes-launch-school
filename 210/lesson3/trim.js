/*

Trimming Spaces

Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

Example

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
You may use the square brackets ([]) to access characters by index (as shown below) and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

'hello'[0];     // "h"
'hello'[4];     // "o"

*/


// concat a output string
// loop arg if empty skip and continue loop
// do not remove internal space

function trim(str) {
  var left = 0
  var right = str.length - 1;
  var output = '';

  // trim left
  while(true) {
    if (str[left] === ' ') {
      left++;
      continue;
    } else {
      break;
    }
  }

  // trim right
  while(true) {
    if (str[right] === ' ') {
      right--;
      continue;
    } else {
      break;
    }
  }

  for(var i = left; i <= right; i++) {
    output += str[i];
  }

  return output;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""


// in place trim, does JS pass by reference?




/*
It's possible to craft an algorithm that eliminates the spaces in one pass. However, it's simpler to divide the solution into two steps: trim spaces on the left, and then trim spaces on the right. You can create one function for each operation, and call those two functions in your main function. This approach avoids special handling for interior spaces; that would require very careful tracking.

Let's examine the logic for trimming spaces on the left:

Declare a variable that indicates when you're in "copy mode"; initialize it to false.
Loop through each character of the string starting from the left.
With each iteration:
If the character is a space and copy mode is false, perform the next iteration.
If the character is not a space, set the copy mode to true.
Concatenate the character to the new string.
Perform the next iteration.
The same logic applies to trimming spaces on the right. This time, though, iterate through the string backwards, beginning with the last character. When in copy mode, copy characters to the beginning of the new string.

Keep in mind that string primitives in JavaScript are immutable values, so your solution must first create a new, empty string, then gradually build on that string with each copy operation. In the end, return the new string. Don't try to modify or mutate the original string.

function trim(string) {
  var trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);

  return trimmed;
}

function trimLeft(string) {
  var newString = '';
  var copyMode = false;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString += string[i];
    }
  }

  return newString;
}

function trimRight(string) {
  var newString = '';
  var copyMode = false;

  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString = string[i] + newString;
    }
  }

  return newString;
}

*/
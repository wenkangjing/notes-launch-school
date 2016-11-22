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
    console.log(str[i]);
    output[i - left] = str[i];
  }

  return output;
}



// in place trim, does JS pass by reference?
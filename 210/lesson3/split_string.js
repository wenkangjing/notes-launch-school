/* 
Splitting a String

Write a function that takes two arguments:

a string to be split
a delimiter string
The functions logs the split strings to the console as shown below:

Examples

function splitString(string, delimiter) {
  // ...
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello


*/


//


//a string to be split
//a delimiter string, not a char, should not be included in split strings
// return an array after split
// return unchanged string if delimiter not found
// 
//

// loop str, concat a new substring from i to index of delimiter
// i skip delimiter length
function splitString_1(str, delimiter) {
  if (typeof delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
    
  var result = [];
  var i = 0; // main loop to iterating the given string
  var subString = '';
  var stop = 0;

  while(i < str.length) {
    substring = '';
    stop = str.indexOf(delimiter, i);
    if (stop === -1) {
      stop = str.length;
    }
    for(var j = i; j < stop; j++) {
      substring += str[j];
    } 
    result.push(substring);

    i = j + delimiter.length; // i should continue after j but skip delimiter
  }

  if (result.length === 0)
    result.push(str);
    
  return result;
}

function splitString(string, delimiter) {
  if (typeof delimiter === 'undefined') {
    console.log('ERROR: No delimiter');
    return;
  }

  var tempString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      tempString += string[i];
    }
  }

  if (tempString) {
    console.log(tempString);
  }
}

/*

There are two keys to this problem:

Find the next delimiter in the original string.
Keep track of which characters you must display each time you find a delimiter.
One approach is to iterate through the characters and check whether it is a delimiter. If it is not, incrementally build a temporary string until you find a delimiter. Each time you find a delimiter, log the temporary string and then clear it. If you reach the end of the string without finding another delimiter, log the temporary string if it is not empty.

Note that one example fails to provide a delimiter. You can test for this situation with:

if (typeof delimiter === 'undefined') {
  // handle missing delimiter here
}

*/
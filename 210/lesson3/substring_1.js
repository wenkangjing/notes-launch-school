/*

Write a function that returns a substring of a string based on a starting index and length.

Examples

function substr(string, start, length) {
  // ...
}

var string = 'hello world';

substr(string, 2, 4);     // "llo "
substr(string, -3, 2);    // "rl"
substr(string, 8, 20);    // "rld"
substr(string, 0, -20);   // ""
substr(string, 0, 0);     // ""
The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.
The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.
You may use the square brackets ([]


*/



// valid start and length
// concat a new string from start till length
function substr(string, start, length) {
  
  var strlen = string.length; 
  start = (start > 0) ? start : strlen + start;
  var conut = Math.min(length, strlen); 

  var newString = '';

  for (var i = start; i < strlen && i < start + length; i++) {
    newString += string[i];
  }

  return newString;
}

var string = 'hello world';

console.log(substr(string, 2, 4));   
console.log(substr(string, -3, 2));  
console.log(substr(string, 8, 20));  
console.log(substr(string, 0, -20)); 
console.log(substr(string, 0, 0));   


/*
Logic and Structure
Sometimes, you must meet many different requirements. It can be overwhelming to try to craft the perfect solution all at once. Instead, start with a less ambitious goal, and just focus on the base requirement. Once you have a working solution, refine it to meet the other requirements, one requirement at a time.

The base requirement for this exercise is to retrieve a length-character substring from string, starting with the character at position index. For example, substr('hello world', 2, 5) should return 'llo w'. First, develop a working solution for this part of the problem; then, refine your solution to handle the special cases that don't already work.
Solution
function substr(string, start, length) {
  var newString = '';
  var index;

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = 0; i < length; i++) {
    index = start + i;

    if (string[index] === undefined) {
      break;
    }

    newString += string[index];
  }

  return newString;
}
The Built-in Method
Our function is similar to JavaScript's built-in string method substr method, which you can call from any JavaScript string:

var string = 'hello world';

string.substr(2, 4);     // "llo "
string.substr(-3, 2);    // "rl"
string.substr(8, 20);    // "rld"
string.substr(1);        // "ello world" - goes to the end of the word if the second arg is omitted
string.substr(0, -20);   // ""
string.substr(0, 0);     // ""


*/
/*

Substring (2)

This exercise is similar to the previous one. This time, though, both arguments are indices of the provided string. The following rules apply:

If both start and end are positive integers, start is less than end, and both are within the boundary of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).
If the value of start is greater than end, swap the values of the two, then return the substring as described above.
If start is equal to end, return an empty string.
If end is omitted, the end variable inside the function isundefined. Return the substring starting at position start up through (and including) the end of the string.
If either start or end is less than 0 or NaN, treat it as 0.
If either start or end is greater than the length of the string, treat it as equal to the string length.
Examples

function substring(string, start, end) {
  // ...
}

var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"



*/


// start and end both within the boundary
// start > end. swap
// start or end > length, length
// start invalid, 0 - end
// end invalid, start - end
// start = end, ""


// end first character not to include in the returned substring.
function substring(string, start, end) {
  var len = string.length;

  // or equivilent 
  //if (end === undefined)
  if (typeof end === 'undefined') 
    end = len;

  // fix invalid number
  if (isNaN(start) || start < 0) { 
    start = 0;
  }

  if (isNaN(end) || end < 0) {
    end = 0;
  }

  if (start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  if (start > len) {
    start = len;
  }

  if (end > len) {
    end = len;
  }

  var newString = '';
  for (var i = start; i < end; i++) {
    newString += string[i];
  }
  console.log(newString);
  
  return newString;
}


var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"


/*

Logic and Structure
Use the same approach as the previous exercise: address the base requirement first, then refine it as needed for the special case requirements.
Hint: How Do I Swap the Value of Two Variables?
To swap of the value of two variables, you need a temporary variable and a three way re-assignment. For example:

var a = 1;
var b = 2;
var temp;

temp = a;
a = b;
b = temp;

// a is now 2 and b is 1
Solution
function substring(string, start, end) {
  var newString = '';
  var temp;

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  for (var i = start; i < end; i++) {
    newString += string[i];
  }

  return newString;
}

The Built-in Method
Our function is similar to JavaScript's built-in string method substring which you can call from any JavaScript string:

var string = 'hello world';

string.substring(2, 4);    // "ll"
string.substring(4, 2);    // "ll"

string.substring(0, -1);   // ""
string.substring(-1, 0);   // ""

string.substring(8, 20);   // "rld"
string.substring(20, 8);   // "rld"

string.substring(2);       // "llo world"
Note that substring and substr are different methods.


*/
/*
Repeating Strings

Implement a function that takes a string and a number times as arguments. The function should return the string repeated times number of times. If times is not a number, return undefined. If it is a negative number, return undefined also. If times is 0, return an empty string. You may ignore the possibility that times is a number that isn't an integer.

function repeat(string, times) {
  // ...
}

repeat('abc', 1);    // "abc"
repeat('abc', 2);    // "abcabc"
repeat('abc', -1);   // undefined
repeat('abc', 0);    // ""
repeat('abc', 'a');  // undefined
You may concatenate strings, but you may not use any other properties or methods from JavaScript's built-in String class.

*/


function repeat_1(str, times) {
  if (typeof times === undefined) {
    return undefined;
  }

  // NaN is not equal, use isNaN instead
  if (isNaN(Number(times))) {
    return undefined;
  }

  if (Number(times) < 0) {
    return undefined;
  }  

  // can be removed cause for loop will return empty string anyway
  if (Number(times) === 0) {
    return '';
  }

  var result = '';
  for (var i = 0; i < Number(times); i++) {
    result += str
  }

  return result;
}

function repeat(str, times) {
  var repeat = '';

  if (isNaN(times) || times < 0) {
    return undefined;
  }

  for (var i = 0; i < times; i++) {
    repeat += str;
  }

  return repeat;

}



console.log(repeat('abc', 1));
console.log(repeat('abc', 2));
console.log(repeat('abc', -1));
console.log(repeat('abc', 0));
console.log(repeat('abc', 'a'));



/**

In your function, you should check for the special cases: that is, check whether times is a negative number or not a number, and return undefined if it is either. If you have a number greater than or equal to 0, start with an empty string, and use a loop to concatenate string to the result times times. Return the result.
Hint: How to tell if an input is not a number?
You may use JavaScript's isNaN function to help with this:

isNaN('a');       // true
isNaN(3);         // false

Our function is similar to JavaScript's built-in string method string method repeat which you can call with any JavaScript string:

// String.prototype.repeat(times);
// 'abcd'.repeat(times);

'abcd'.repeat(3);      // abcdabcdabcd
'abcd'.repeat('a');    // ""
'abcd'.repeat(1.6);    // "abcd"
'abcd'.repeat(1/0);    // RangeError
The built-in method is more powerful. It handles floating point times parameters and ensures that times is a 31-bit integer for optimization

Note: String.prototype.repeat() is new with ES6. It is not available in earlier versions.
*/
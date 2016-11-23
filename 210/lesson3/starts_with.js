/*
Implement a function that determines whether a string begins with another string. If it does, the function should return true, false otherwise.

Examples

function startsWith(string, searchString) {
  // ...
}

var str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');       // true
startsWith(str, 'We put');   // true
startsWith(str, '');         // true
startsWith(str, 'put');      // false

var longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

*/



// loop i in string (it is not needed)
// loop j in searchString (use this to ensure iterate every char in searchString, not string)
// if every char is same till end of searchString -> true
// if any char is not equal, return false;
function startsWith_1(string, searchString) {
  for (var i = 0; i < string.length; i++) { // stupit, loop searchString instead
    // terminating statement
    if (i === searchString.length) {
      return true;
    } 

    if (string[i] !== searchString[i]) {
      return false;
    } 
  }

  return false;
}

function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }
  return true;
}


var str = 'We put comprehension and mastery above all else';


console.log(startsWith(str, 'We'));       // true
console.log(startsWith(str, 'We put'));   // true
console.log(startsWith(str, ''));         // true
console.log(startsWith(str, 'put'));      // false


var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false



/*
Logic and Structure
The general logic for this problem is to iterate over the two strings simultaneously, and compare them character-by-character. If, at any point the characters don't match, return false. If you reach the end of searchString and all characters match, return true.
Solution
function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}
After you've written a solution like this, make sure you check the edge cases: the empty string and a longer search string. Here, we have both edge cases covered. If the search string is empty, there's no iteration and the function returns true. If we have a longer search string, line 3 eventually tries to access a character beyond the end of string. In JavaScript, this returns undefined, which makes the function return false. The function then returns false.

'abc'[3];      // undefined
The Built-in Method
Our function is similar to JavaScript's built-in string method startsWith, which you can call from any JavaScript string. The built-in method takes an optional second argument to begin the comparison with a different index.

var str = 'We put comprehension and mastery above all else';

str.startsWith('We');       // true
str.startsWith('We put');   // true
str.startsWith('put');      // false
str.startsWith('Put');      // false
str.startsWith('put', 3);   // true

*/
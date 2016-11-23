/*

Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for these operations. For example:

var string = 'A'
asciiNumeric = string.charCodeAt(0);                 // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);          // "a", converted to lower case
Examples

function toLowerCase(string) {
  // ...
}

toLowerCase('ALPHABET');      // "alphabet"
toLowerCase('123');           // "123"
toLowerCase('abcDEF');        // "abcdef"


*/


function toLowerCase(string) {
  var result = '';
  
  for (var i = 0; i < string.length; i++) {
    var ascNumber = string.charCodeAt(i); 
    
    // could be 'A' or 'Z', more human readable
    if (ascNumber >= 'A' && ascNumber <= 'Z') {
    //if (ascNumber >= 65 && ascNumber <=90 ) { // upper to lower 
      result +=String.fromCharCode(ascNumber + 32);
    } else { // keep the rest other than upper
        result += string[i];
    }
  }

  return result;
}


console.log(toLowerCase('ALPHABET'));  
console.log(toLowerCase('123'));       
console.log(toLowerCase('abcDEF'));    



/*

Logic and Structure
To solve this exercise, iterate over the characters in the string. If the character is an uppercase letter, convert it to the lowercase equivalent, then append it to your result string. If the character is not an uppercase letter, just append it your result. Note that JavaScript strings are immutable, so don't try to mutate the original string. Instead, build a new string via concatenation.
Solution
function toLowerCase(string) {
  var CONVERSION_OFFSET = 32;
  var newString = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (charCode >= 'A' && charCode <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}
The Built-in Method
Our function is similar to JavaScript's built-in string method toLowerCase method, which you can call from any JavaScript string:

'miXedCase1Word'.toLowerCase();         // returns mixedcase1word"
You've probably already guessed that there's also a built-in toUpperCase method:

'miXedCase1Word'.toUpperCase();         // returns "MIXEDCASE1WORD"



*/
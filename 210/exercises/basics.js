// 1. Prefer string concat over backward slash
var paragraph_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';


var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed" +
  'ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim ' + 
  'dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum ' + 
  'ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar ' + 
  'diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum ' +
  'hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);


// 2. falsy

console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!0);
console.log(!!NaN);
console.log(!!'');


// string assignment
// JavaScript strings are primitive and thus immutable.

var name = 'Bob';
var saveName = name;
name = 'Alice';
console.log(name, saveName);

var name = 'Bob';
var saveName = name;
name.toUpperCase(); // should assign back to name
console.log(name, saveName);

// Arithmetic Integer
// always to explicit primitive type coercions, parseInt, Number(), String()
// always parseInt with explicit radix  

//var number1 = parseInt(prompt('Enter the first number:'), 10);

// Counting the Number of Characters

function countCharacters(string) {
  // JS regexp no quote needed 
  var newString = string.replace(/ /g, '');
  console.log(newString);
  return newString.length;
}

console.log(countCharacters('walk'));
console.log(countCharacters('walk, don\'t run'));



// Convert String to a Number
// do not use built-in
// store string<>digit in a key-value pairs
var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  var value = 0;
  for (var i = 0; i < string.length; i++) {
    value = 10 * value + DIGITS[string[i]];
  }
  return value
}

stringToInteger('4321');          // 4321
stringToInteger('570');           // 570


// Convert String to a Signed Number
// string.slice()
function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  };
}

stringToSignedInteger('-570');
stringToSignedInteger('+2450'); 

// Convert a Number to a String



function integerToString(number) {
  var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var result = '';
  var reminder = 0;

  while(number > 0 ) {
    reminder = number % 10;
    number = Math.floor(number / 10);
    result = DIGITS[reminder] + result; 
  }
  return result;
}

integerToString(4321);    // "4321"
integerToString(0);       // "0"
integerToString(5000);    // "5000"


// Convert a Signed Number to a String

function signedIntegerToString(number) {
  if (number >= 0) {
    return integerToString(number);
  } else {
    return '-' + integerToString(-number);
  }
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
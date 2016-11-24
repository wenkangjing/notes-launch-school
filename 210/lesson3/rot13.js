/*

Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

For each character in the original String:

If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. So a becomes n. If you reach the end of the alphabet, return to the beginning. So o becomes b.
Letter transformations preserve case. A becomes N while a becomes n.
Don't modify characters that are not letters.
Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
It's worth noting that rot13 applied twice results in the original string:

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.
This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.

*/

//
// Thought
// only rot chars inside A-Z or a-z
// either rot in A-Z or a-z, 2 ranges
// lengh of index m to n is n - m + 1
//

function rot13Asc(asc, ascStart) {
  var newAsc = asc + 13;
  if (newAsc > ascStart + 26 - 1) {
    newAsc = newAsc - 26;
  }
  return newAsc;
}

function rot13(str) {
  if (str === undefined) {
    console.log('ERROR: undefined string');
    return;
  }
    
  var newString = '';

  for (var i = 0; i < str.length; i++) {
    var oldAsc = str.charCodeAt(i);

    if (str[i] >= 'A' && str[i] <= 'Z') {
      newString += String.fromCharCode(rot13Asc(oldAsc, 65));
    } else if (str[i] >= 'a' && str[i] <= 'z') {
      newString += String.fromCharCode(rot13Asc(oldAsc, 97));
    } else {
      newString += str[i];
    }
  }  
  return newString;  
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

var test1 = 'abcdefghijklmnopqrstuvwxyz';
console.log(rot13(test1));
console.log(rot13(rot13(test1)));

console.log(rot13(test1.toUpperCase()));
console.log(rot13(rot13(test1.toUpperCase())));

var test2 = 'this is a %$ 257 -djie& ~0xFF44'; 
console.log(rot13(test2));
console.log(rot13(rot13(test2)));

console.log(rot13(''));
console.log(rot13(Number.NaN));
console.log(rot13());

/*
// idea is map 65-90 and 97-122 to an array 0-25, then % 26 to get the shiftedIndex
// easy to understand 

function rot13(text) {
  var transformed = '';

  for (i = 0; i < text.length; i++) {
    transformed += rot13Character(text[i]);
  }

  return transformed;
}

function rot13Character(char) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = false;
  var initialIndex = alphabet.indexOf(char);
  var char, initialIndex, shiftedIndex, transformed;

  // no match might mean that we are dealing with an uppercase letter
  if (initialIndex === -1) {
    initialIndex = alphabet.indexOf(char.toLowerCase());
    upperCase = true;
  }

  // if there is still no match, it's not a character between a-z.
  if (initialIndex === -1) {
    return char;
  }

  shiftedIndex = (initialIndex + 13 ) % 26;
  transformed = alphabet[shiftedIndex];

  if (upperCase) {
    transformed = transformed.toUpperCase();
  }

  return transformed;
}
*/
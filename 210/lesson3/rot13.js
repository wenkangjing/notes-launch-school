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

function rot13Asc(asc, ascStart, range) {
  var newAsc = asc + 13;
  if (newAsc > ascStart + range - 1) {
    newAsc = newAsc - range;
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
      newString += String.fromCharCode(rot13Asc(oldAsc, 65, 26));
    } else if (str[i] >= 'a' && str[i] <= 'z') {
      newString += String.fromCharCode(rot13Asc(oldAsc, 97, 26));
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


// Swap Case

// Write a function that takes a string as an argument and returns a new string in which lowercase letters replace every uppercase and vice versa. Leave all other characters unchanged.


/*
Understanding
- input
  - a string

- output
  - a new string  
    - lower -> uppercase
    - uppercase -> lower
    - other as is

Data Structure
  - transform -> map


Algorithm
- converting string to array and mapping to a new array then join back, at each iteration
  - char in a-z, return char.toUpperCase
  - char in A-Z, return char.toLowerCase
  - other return original
- join the new array to string 

   
*/



function swapcase_1(string) {
  return string.split("").map(function (char) {
    if (char >= 'a' && char <= 'z') { // or match(/[a-z]/)
      return char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') { // match (/A-Z/)
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}


/*
Algorithm using string.replace(regex, function)
*/
function swapcase(string) {
  return string.replace(/[a-z]/gi, function(char){
    if (char >= 'a' && char <= 'z') { // or match(/[a-z]/)
      return char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') { // match (/A-Z/)
      return char.toLowerCase();
    } else {
      return char;
    }
  });
}


// Example:

swapcase('CamelCase');         // 'cAMELcASE'
swapcase('Tonight on XYZ-TV'); // 'tONIGHT ON xyz-tv'
swapcase(''); // ''
swapcase('!'); // '!'
swapcase('123go'); // '123GO'
swapcase('ab CD!'); // 'AB cd!'



// Hide Solution & Discussion
// Solution

// function swapcase(words) {
//   return words.split('').map(function(char) {
//     if (char.match(/[a-z]/)) {
//       return char.toUpperCase();
//     } else if (char.match(/[A-Z]/)) {
//       return char.toLowerCase();
//     } else {
//       return char;
//     }
//   }).join('');
// }
// Discussion

// The solution follows a transformation strategy for swapping the case of the string argument. If the character is a lowercase letter (/[a-z]/), it makes it uppercase; if it is uppercase (/[A-Z]/), it make its lowercase. For all other characters, it does nothing. Finally, it joins characters together into a new string and returns that value.
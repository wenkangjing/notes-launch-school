// Get The Middle Character

// Write a function that takes a non-empty string argument, and returns the middle character or characters of the argument. If the argument has an odd length, you should return exactly one character. If the argument has an even length, you should return exactly two characters.

/*
Understanding
- input
  - a stirng
    - non empty

- output
  - a character
    - middle one (odd)
    - middle two (even)


Algorithm
- left middle = floor of length / 2 - 1       
- right middle = ceil of length / 2 - 1
- if left == right, return string[middlei]
- else return string[left] + string[right]       
*/


function centerOf_1(string) {
  let leftMiddle = Math.floor((string.length - 1) / 2);
  let rightMiddle = Math.ceil((string.length - 1) / 2);

  if (leftMiddle === rightMiddle) {
    return string[leftMiddle];
  } else {
    return string[leftMiddle] + string[rightMiddle];
  }
}



// use substr
function centerOf(string) {
  let startIndex = Math.floor((string.length - 1) / 2);
  if (string.length % 2 === 0) {
    return string.substr(startIndex, 2);
  } else {
    return string[startIndex];
  }
}

// Examples:

console.log(centerOf('I love ruby'));    // 'e'
console.log(centerOf('Launch School'));  // ' '
console.log(centerOf('Launch'));         // 'un'
console.log(centerOf('Launchschool'));   // 'hs'
console.log(centerOf('x'));              // 'x'



/*
Hide Solution & Discussion

Solution

function centerOf(string) {
  if (string.length % 2 == 1) {
    return string[Math.floor(string.length / 2)];
  } else {
    return string.substr(string.length / 2 - 1, 2);
  }
}
Discussion

The tricky part for this exercise is the difference between the character number and the index number. For instance, in the string I Love ruby, the third index is o and the third character is l. Notice that the in order to get the correct character from the string, it has to get the character at index value characterNumber - 1. This distinction comes into play when returning the middle character depending on whether it is an odd or even length string.

For the odd length string, it is the result of the integer division of the length by 2. With JavaScript, this is the floored result of the string length divided by 2. If the string length is even, it subtracts 1 from the result of dividing it by two so that it gets the appropriate character as the starting point. From the appropriate starting point, it gets two characters (inclusive of the starting character). It does this using the String.prototype.substr() method.
*/
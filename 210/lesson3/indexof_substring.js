/* 
Index of Substring

Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

The indexOf() function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

The lastIndexOf() function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified by secondString.

Examples

function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');      // 5
indexOf('Blue Whale', 'Whale');    // 5
indexOf('Blue Whale', 'Blute');    // -1
indexOf('Blue Whale', 'leB');      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
*/


function indexOf_1(str1, str2) {
  var i = 0;
  var j = 0;
  while (i < str1.length) {
    if (str1[i] === str2[j]) {
      if (j === str2.length - 1) {
        return i - j;
      }
      i++;
      j++;
    } else {
      i++;
      j = 0; // must reset to 0
    }
  }
  return -1;
}

function lastIndexOf_1(str1, str2) {
  var i = str1.length - 1;
  var j = str2.length - 1;
  while (i >= 0) {
    if (str1[i] === str2[j]) {
      if (j === 0) {
        return i;
      }
      i--;
      j--;
    } else {
      j = str2.length - 1; // if unequal found, must reset j to initial value, and recompare the rest
      i--;
    }
  }
  return -1;
}

function indexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;

  for (var i = 0; i <= limit; i++) {
    matchCount = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;

  for (var i = limit; i >= 0; i--) {
    matchCount = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }

  return -1;
}

console.log('indexOf');
console.log(indexOf('Some strings', 's'));
console.log(indexOf('Blue Whale', 'Whale'));
console.log(indexOf('Blue Whale', 'Blute'));
console.log(indexOf('Blue Whale', 'leB'));

console.log('lastIndexOf');
lastIndexOf('Some strings', 's');
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));

/*
Don't dive too fast into coding; try to solve this logically step-by-step. For instance, here is a straightforward algorithm for indexOf:

Assume that the first string's length is m and the second string's length is n.
Iterate from the beginning of the first string and work to the end.
During each iteration:
Compare the n characters starting at the current position in the first string with the n characters of the second string.
If all n characters match, return the index of the current character in the first string
Otherwise, continue iteration.
The last character we need to check in the first string is the character at index m - n.
Return -1 if you cannot find the second string in the first string.
For the lastIndexOf function, the algorithm is similar. However, for this function we start with the m - nth character in the first string and work backward to index 0.

Thinking about the algorithm before you write code helps you solve the problem logically. You don't have to worry about the programming aspect. Once you have the algorithm, you can then use it as a "blueprint" and translate it to code.
*/
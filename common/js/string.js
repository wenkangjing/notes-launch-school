// Implement a function that determines if a string has any character that repeats. The function will return true if and only if all the characters in the string are unique. For this exercise, we won't consider spaces as a character, and will ignore case differences when comparing two characters.

// the forEach abstraction for iteration in JavaScript will always go through the entire list


// Recall: Whenever your code needs an early return while processing a list, you may want to consider just using a loop. Almost all JavaScript list processing abstractions involve traversing through the entire list. The only exceptions would be some and every, but they may not be useful for more complicated problems.

function isAllUnique(string) {
  var seen = {};
  var lowerCasedString = string.toLowerCase();

  for (var i = 0; i < lowerCasedString.length; i++) {
    if (lowerCasedString[i] === ' ') {
      continue;
    };

    if (seen[lowerCasedString[i]]) {
      return false;
    } else {
      seen[lowerCasedString[i]] = true;
    }
  }

  return true;
}


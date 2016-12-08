// String or text processing is the manipulation of text-based content. The pattern for this generally follows the following:

// Declare a new string or array. This is used as container for the result of the processing of the original string.
// Break down or parse the original string. Typically this can be broken down by splitting the string by line, by sentence, by word, by char, or by any other delimiter. As the need arises, remove unnecessary characters from the text part.
// Depending on the shape of the problem, apply the appropriate list processing strategy.
// Join it together if needed


// General Approach

// 1. The most common for these will probably be the looping since it is typically through loops that the original text is processed.

// 2. Another approach to processing strings or texts is to use Regular Expression.


/////////////////////////////////////////////////////////////////////////////////////////////////////



// no repeating char in the string
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

function capitalize(text) {
  // split text into word array
  var textArray = text.split(' ');

  // loop to cpitalize
  var capitalizedArray = textArray.map(function(item) {
    return item[0].toUpperCase() + item.slice(1);
  });

  // join to a string
  return capitalizedArray.join(' ');
}


function countWord(word, text) {
  // remove non alphabetic
  var textArray = text.split(' ');

  var countArray = textArray.filter(function(item) {
    return item.toLowerCase() === word.toLowerCase();
  });

  return countArray.length;
}

// return a new string to toLength, with multiple filler on the left 
function padLeft(string, filler, toLength) {
  while (string.length <toLength) {
    string = filler + string; 
  }
  return string;
}


// two dot to all method on a number
365..toString()

// surround the number with parentheses
(3645).toString();
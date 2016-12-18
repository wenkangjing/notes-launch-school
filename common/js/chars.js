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

// pad zeros
function padZeroes(number) {
  var numString = number.toString();
  return numString.length < 2 ? '0' + numString : numString;
}



// two dot to all method on a number
365..toString()

// surround the number with parentheses
(3645).toString();


// valid url
function isUrl(string){
  return !!string.match(/^https?:\/\/\S+$/);
}

console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false

// Write a method that returns all of the fields in a haphazardly formatted string. The fields are separated by a variety of spaces, tabs, and commas, with possibly multiple occurrences of theses characters.

function fields(string) {
  return string.split(/[ \t,]+/);
}

console.log(fields("Pete,201,Student"));
// -> ['Pete', '201', 'Student']

console.log(fields("Pete \t 201    ,  TA"));
// -> ['Pete', '201', 'TA']

console.log(fields("Pete \t 201"));
// -> ['Pete', '201'']


// capture group
 function formatDate(original_date) {
  return original_date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1');
};

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)


// reverse a string
function reverse(string) {
  return string.split('').reverse().join('');
}
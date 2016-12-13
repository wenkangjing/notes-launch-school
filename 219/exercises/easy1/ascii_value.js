// ASCII String Value

// Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)


/*
Understanding

- input
  - a string: empty, sentence, a word, etc
- output
  - sum of ahte ascii value of each chars in he string
- rules
  - space ascii is not 0

Algorithm
- convert string to an array of chars (split by '')
  - reduce the array to sum up ascii value of each char
*/


function asciiValue_1 (string) {
  let sum = string.split('').reduce(function(sum, e) {
    return sum + e.charCodeAt(0);
  }, 0);

  //console.log(sum);
  return sum;
}


/*
Algorithm
- iterating the string 
  - sum up the ascii value of each string[i]
*/

function asciiValue (string) {
  let sum = 0;
  for (var i = 0; i < string.length; i++) {
    sum = sum + string.charCodeAt(i);
  }
  //console.log(sum);
  return sum;
}



// Test Cases
asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0



// Discussion

// The solution initialize the sum to 0 (which takes care of the empty string case in addition to giving us a starting value), then add the char code value for every character to that sum. Finally, it returns the sum.
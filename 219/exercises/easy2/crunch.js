// Ddaaiillyy ddoouubbllee

// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

/*
Understanding
- input
  - a string: '', a word, sentence
- output
  - a new string with duplicated chars collapsed into one

Algorithm
- iterating each char of the stirng
  - if result last char != current char
    - append to result string
  - else
    - continue, it is duplicated  

Verify algo by test cases
*/

// add the first appear, and ignore the following duplicated ones
function crunch_1 (string) {
  let result = '';
  for (var i = 0; i < string.length; i++) {
    if (result === '' || result[result.length - 1] !== string[i]) {
      result += string[i];
    }
  }

  console.log(result);
  return result;
}

// Examples:

crunch('ddaaiillyy ddoouubbllee');        // 'daily double'
crunch('4444abcabccba');                  // '4abcabcba'
crunch('ggggggggggggggg');                // 'g'
crunch('a');                              // 'a'
crunch('');                               // ''



// add the last, ignore the privious chars
function crunch_2(text) {
  var index = 0;
  var crunchText = '';

  while (index <= text.length - 1) {
    // return undefined if index + 1 overflow
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }
  console.log(crunchText);
  return crunchText;
}

function crunch(string) {
  return string.split('').reduce(function(result, char, index) {
    return char === string[index -1] ? result : result + char;
  }, '');
}

// Discussion

// For this exercise it goes through each character of the string and check for any duplicates; but not just any duplicates, they have to be consecutive. The solution builds up a string from the empty string crunchText. It then has an index that keeps track of our place in text.

// On each iteration of the loop, the solution checks if the character at the current index is equal to the next character in the text. If it is, then do nothing. If it isn't, it adds that character to crunchText.

// Further Exploration

// You may have noticed that the solution continues iterating until index points past the end of the string. As a result, on the last iteration text[index] is the last character in text, while text[index + 1] is nil. Why does it do this? What happens if it stops iterating when index is equal to text.length - 1?

// It is possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions. Can you think of other solutions besides regular expressions?

// will lose the last not duplicated char
// abbbc -> ab
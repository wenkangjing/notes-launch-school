// Clean Up the Words

// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (the result should never have consecutive spaces).

// Examples:

//cleanUp('---what\'s my +*& line?');      // ' what s my line '



/*
Understanding
- input 
  - a string contains words, non-alphabetic chars

- output
  - a new string
  - non-alphabetic => 1 space
  - consecutive on alphabet => one space
  - no consecutive space

Algorithm
- repalce regex/ [^a-z]+/gi with space
- check consecutive spaces


*/

function cleanUp_1(string) {

  let alphabet = string.replace(/[^a-z]+/gi, ' ');
  console.log(alphabet);
  return alphabet;
}


// Test cases

cleanUp('  abc  abc 123 )) 453!')  // ' abc abc '
cleanUp('---what\'s my +*& line?');      // ' what s my line '
cleanUp('      '); // ' '
cleanUp('this is correct'); // no changes
cleanUp('   wrapped with \t aaaa \t\t\t'); // ' wrapped with aaa '

// Discussion

// The solution makes use of a loop to build a cleanText variable. At every iteration, the objective is to check if it is a letter (either uppercase or lowercase) or not. If it is not a letter, the program appends a blank space () and if it is a letter then it retains and appends it.

// The tricky part is when there are consecutive non-letter characters. The specification shows that there are no consecutive blank space characters even if there are consecutive non-letter characters. To handle this, the solution uses a condition to check if the last character in the cleanText variable is a blank space. If it is a blank space, then it means that there is already a blank space at the previous index position and that adding another blank space would result in having consecutive blank space characters.

// Further Exploration

// If you originally wrote this method without regular expressions, try writing it with regular expressions and see how expressive and concise code becomes with it. Note, however, that this sometimes comes at the expense of readable code.



// try use Algorithm

/*
Algorithm
- split to array
- interating the array, in each iteration
  - if not alphabet and last char of newstring is not ' '
    append ' ' to newstring
  - else if is alphabet
    append 
  - else
    continue

Abstraction
- isAlphabet(chars)
  - toLowerCase,
  - true if compaire arcii between a-z
*/

function cleanUp(string) {
  let array = string.split('');
  let cleaned = '';
  array.forEach(function (char) {
    if (isAlphabet(char)) {
      cleaned += char;
    } else if (cleaned[cleaned.length - 1] !== ' ') {
      cleaned += ' ';
    }
  });

  console.log(cleaned);
  return cleaned;
}

function isAlphabet(char) {
  let lowercase = char.toLowerCase();
  return  (char[0] >= 'a' && char[0] <= 'z'); 
}
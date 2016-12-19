// Double Char Part 2

// Write a function that takes a string, and returns a new string in which it doubles every consonant character. It doesn't double vVowels (a,e,i,o,u), digits, punctuation, and whitespace.

/*
Understanding
- input
  - a string

- output 
  - a new string  
    - double every consonant
    - doesn't double vowels 

- rules
  - vowels = ['a', 'e', 'i', 'o', 'u']
  - digits
  - punctuation
  - whitespace


Algorithm
  - looping the string
    - double char if isConsonant() true
    - once otherwise 

*/


function doubleConsonants(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    newString += string[i];
    if (isConsonant(string[i])) {
      newString += string[i];
    }
  }
  console.log(newString);
  return newString;
}

function isConsonant(char) {
  let lowerChar = char.toLowerCase();
  if (lowerChar < 'a' || lowerChar > 'z') {
    return false;
  } 

  vowels = ['a', 'e', 'i', 'o', 'u'];  
  if (vowels.indexOf(char) !== -1) {
    return false;
  }

  return true;
}



// Examples:

doubleConsonants('String');       // "SSttrrinngg"
doubleConsonants('Hello-World!'); // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');     // "JJullyy 4tthh"
doubleConsonants('');             // ""
doubleConsonants('zz');             // "zzzz"
doubleConsonants('a09,.;!()z');       // "a09,.;!()zz"


/*
Hide Solution & Discussion
Solution

var CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  var stringArray = [];
  for (var i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
    if (CONSONANTS.indexOf(string[i].toLowerCase()) >= 0) {
      stringArray.push(string[i]);
    }
  }

  return stringArray.join('');
}
Discussion

This exercise is nearly identical to the previous exercise, so the solution is also similar. The main difference is that the solution needs to check each character to see if it is a consonant. There are lots of ways to do this: the solution uses an array of lowercase consonants, and checks each character to see if it is in that array. To account for uppercase consonants, it converts each character to lowercase.
*/

// Capitalize Words

// Write a function that takes a single string argument and returns a new string that contains the original value of the argument with the first character of every word capitalized and all succeeding characters in lowercase.

// You may assume that words are any sequence of non-blank characters.



/*

Understanding
- input
  - a string
  ? words are separated by 1 space

- output
  - first letter of a word should be uppercase
  - the rest letters of a word are lowercase

- rules
  - what is a word?
    - start with a-zA-Z

Data Structure
- array

Algorithm
- convert to words array by spliting by ' '
- if it is a word, capitalize and succeeding characters to lowercase
- owhersie keep as is

Abstraction
- isWord(string)
  - first char is a-zA-Z

- formatWord(string)
  - make all lowercase 
  - make first one uppercase
*/


function wordCap(string) {
  let capitalised = string.split(' ').map(function(word) {
    if (isWord(word)) {
      return formatWord(word);
    } else {
      return word;
    }
  }).join(' ');

  console.log(capitalised);
  return capitalised;
}


function formatWord(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1) ;
}

// this can be ignored, can we?
function isWord(word) {
  return !!(word.length > 0 && word[0].toLowerCase() >='a' && word[0].toLowerCase() <= 'z');
}


// Examples

wordCap('four score and seven');    // 'Four Score And Seven'
wordCap('the javaScript language'); // 'The Javascript Language'
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'

wordCap(''); // ''
wordCap('a'); // 'A'
wordCap('aA'); // 'Aa'





// Hide Solution & Discussion
// Solution

// function wordCap(words) {
//   return words.split(' ').map(function(word) {
//     return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// }
// Discussion

// The solution uses transformation processing strategy to capitalize the first character of each word. It break down the words argument word by splitting it using space () as a delimiter. It then splits each word into two parts using the String.prototype.slice method: (1) the first character and (2) all succeeding characters. It then calls String.prototype.toUpperCase() and String.prototype.toLowerCase() on each part respectively. Finally, the callback function concatenates the two parts and returns it. Notice that String.prototype.toUpperCase() handles for us the scenario that the first character is not alphabetic. String.prototype.toLowerCase(), likewise, does the same for the remaining characters.
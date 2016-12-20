// How long are you

// Write a function that takes a string as an argument, and returns an Array that contains every word from the string with the length of the word joined to it by a blank space.

// You may assume that one blank space separate words in the string.



/*

Understanding
- input 
  - a string
  - words are separated by just one space  

- output
  - an array
    - every word + space + word length

Data Structure
- array
  - map
  - reduce to sum


Algorithm
- spliting stirng to array, then mapping to a new array with count, at each iteration
  - return word + space + wrod length
    

*/


// guard claus

function wordLengths_1(string) {
  if (!string || string.length === 0) {
    return [];
  }

  return string.split(' ').map(function(word) {
    return word + ' ' + word.length;
  });
}

// or using default value []
function wordLengths(str) {
  var words = str ? str.split(' ') : [];

  return words.map(word => word + ' ' + word.length);
}

// Examples

wordLengths('cow sheep chicken');
// result
//['cow 3', 'sheep 5', 'chicken 7']

wordLengths('baseball hot dogs and apple pie');
// result
//['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']

wordLengths('It ain\'t easy, is it?');
// result
//['It 2', 'ain\'t 5', 'easy, 5', 'is 2', 'it? 3']

wordLengths('Supercalifragilisticexpialidocious');
// result
//['Supercalifragilisticexpialidocious 34']

wordLengths('');
// result
//[]

wordLengths();




// Hide Solution & Discussion
// Solution

// function wordLengths(words) {
//   if (!words || words.length === 0) {
//     return [];
//   }
//   return words.split(' ').map(function(word) {
//     return word + ' ' + word.length;
//   });
// }
// Discussion

// The solution uses the transformation list processing strategy. It converts the string into an array of words using space () as a delimiter and with the array of words it uses the Array.prototype.map() method to transform each word in the array to the word plus its length; with the word and the word.length joined by a space.

// It also uses a guard clause to capture the scenario that the argument is an empty string or there is no argument. When this happens, it immediately returns an empty array.
// Letter Counter Part 2

// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the length of "it's" is 3, not 4.

// Examples

// wordSizes('Four score and seven.');                        // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');   // { "3": 5, "6": 3 }
// wordSizes('What\'s up doc?');                              // { "5": 1, "2": 1, "3": 1 }
// wordSizes('');                                             // {}


















// Hide Solution & Discussion
// Solution

// function wordSizes(words) {
//   var wordsArray = words.split(' ');
//   var count = {};

//   for (var i = 0; i < wordsArray.length; i++) {
//     var cleanWord = removeNonLetters(wordsArray[i].toLowerCase());
//     if (cleanWord.length === 0) {
//       continue;
//     }

//     count[cleanWord.length] = count[cleanWord.length] || 0;
//     count[cleanWord.length] += 1;
//   }

//   return count;
// }

// function removeNonLetters(string) {
//   var result = '';
//   for (var i = 0; i < string.length; i++) {
//     if (isLetter(string[i])) {
//       result += string[i];
//     }
//   }

//   return result;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }
// Discussion

// The only change this solution makes to the function is to make sure that it does not count non-letter characters in determining word sizes. It does this by first removing all non-letter characters from each word using the removeNonLetters function and then it performs the tallying of the word sizes.
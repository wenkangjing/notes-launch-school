// Letter Counter Part 1

// Write a function that takes a string with one or more space separated words and returns an object that shows the number of words of different sizes.

// Words consist of any string of characters that do not include a space.

// Examples

// wordSizes('Four score and seven.');                       // { "3": 1, "4" : "1", "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes('What\'s up doc?');                             // { "6": 1, "2": 1, "4": 1 }
// wordSizes('');      
























// Hide Solution & Discussion
// Solution

// function wordSizes(words) {
//   var wordsArray = words.split(' ');
//   var count = {};
//   for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i].length === 0) {
//       continue;
//     }

//     count[wordsArray[i].length] = count[wordsArray[i].length] || 0;
//     count[wordsArray[i].length] += 1;
//   }

//   return count;
// }
// Discussion

// The goal of this exercise is to count the number of words of each size. To do that, the solution first obtains a list of words by splitting the words argument. Computing the size of the word is easy, but incrementing the count for the words of that size is slightly trickier.

// The solution stores the count of words in a count object. It stores, as properties to it, the different count lengths. It does it by iterating over the list of words and performing the following:

// Checks if the legnth of the word equal to 0. If yes, proceed immediately to the next iteration since there is no need to account for words of zero length.
// Initializes the property value for the length in the count object. If the property does not exist (this is when count[wordsArray[i].length] evaluates to undefined), set it to zero.
// Increment the count for a particular word length by 1.
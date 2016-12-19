// Alphabetical Numbers

// Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English words for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Examples:

// alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
































// Hide Solution & Discussion
// Solution

// function wordSort(num1, num2) {
//   var NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
//                       'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//                       'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//     return 1;
//   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

// function alphabeticNumberSort(array) {
//   return array.sort(wordSort);
// }
// Discussion

// The first part to think about for this exercise is the data structure to use to lookup the word counterpart of the numbers. The solution handles this by providing an array of words mapped to its index. The second part is the sorting. For this one, it leverages the Array.prototype.sort() method.

// The sort method is a higher order function that uses a sorting function as callback. Here the function passed in is the wordSort function. The wordSort function also defines the data structure used for the lookup. It does the comparison by comparing the word equivalent of each number (num1 and num2) accessed through their indexes.

// Further Exploration

// The Array.prototype.sort() method could also take a function expression as its argument. Redo the solution (if you haven't) using a functional expression.
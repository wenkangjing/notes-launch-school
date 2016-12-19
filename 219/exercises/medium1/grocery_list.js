// Grocery List

// Write a function which takes a grocery list (array) of fruits with quantities and converts it into an array of the correct number of each fruit.

// Example:

// buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]);
// // result
// ['apples', 'apples', 'apples', 'orange', 'bananas','bananas']








































// Hide Solution & Discussion
// Solution

// function buyFruit(fruitsList) {
//   return fruitsList.map(function(fruit) {
//     return repeat(fruit);
//   }).reduce(function(groceryList, fruit) {
//     return groceryList.concat(fruit);
//   });
// }

// function repeat(fruit) {
//   var result = [];
//   for (var i = 0; i < fruit[1]; i++) {
//     result.push(fruit[0]);
//   }

//   return result;
// }
// Discussion

// To get the expected the result, the solution makes use of two list processing strategies. The first is to transform the array elements into the expanded grocery list with each item repeated based on the quantity value (second element of each array). The next is to flatten the array of arrays using a folding strategy. In the folding strategy, flatten the array by consecutively concatenating each array together. The solution also made use of a repeat helper function to facilitate the transformation of the original array element.
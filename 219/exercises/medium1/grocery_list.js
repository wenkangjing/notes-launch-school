// Grocery List

// Write a function which takes a grocery list (array) of fruits with quantities and converts it into an array of the correct number of each fruit.

/*

Understanding
- input
  - an array of array
    - [0] fruit name
    - [1] quantity 
      ? 0 or more, not negative
- output
  - a flat array
    - n times of fruits
    - n is quantity of the fruit

Data Structure
- 2D array
- array

Algorightm
- result array []
- iterating the given fruits array
  - loop fruit[1] times
    - push fruit[0] to the result array  
- return result
*/

function buyFruit_1(fruits) {
  let result = [];
  
  fruits.forEach(function(item) {
    for (var i = 0; i < item[1]; i++) {
      result.push(item[0]);
    }
  });

  return result;
}



/*

Algorithm using reduce
- map given array to grocery list 
  - by returning array of [1] times [0]
- reduce 2d array to a flat array 
   - by returning array concat

*/

function buyFruit(fruits) {
  return fruits.map(function(item) {
    let result = [];
    for (var i = 0; i < item[1]; i++) {
      result.push(item[0])
    }
    return result;
  }).reduce(function(groceryList, fruit) {
    return groceryLis = groceryList.concat(fruit);
  }, []);
}


// Example:

console.log(buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]));
// result
// ['apples', 'apples', 'apples', 'orange', 'bananas','bananas']

console.log(buyFruit([['apples', 0]])); // []
console.log(buyFruit([['apples', 3],['pearl', 2]])); // ['apples', 'apples', 'apples', 'pearl', 'pearl']







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
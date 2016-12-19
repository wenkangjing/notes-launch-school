// Inventory Item Transactions

// Write a function that gets only the transactions for the inventoryItem specificed. The function will take in two arguments; inventoryItem and transactions.




/*

Understanding
- input
  - id
  - array of objects contains, [id, movement, quantity]

- output
  - array of objects
    - filtered by given

Algorithm
- filter the given array by id of element

*/


function transactionsFor(id, trans) {
  return trans.filter(function(obj) {
    return obj.id === id;
  });
}




// Example

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

console.log(transactionsFor(101, transactions));
// result
// [ { id: 101, movement: 'in', quantity: 5 },
//   { id: 101, movement: 'in', quantity: 12 },
//   { id: 101, movement: 'out', quantity: 18 }, ]


console.log(transactionsFor(102, transactions)); // all 102

console.log(transactionsFor(200, transactions)); // []





// Hide Solution & Discussion
// Solution

// function transactionsFor(inventoryItem, transactions) {
//   return transactions.filter(function(inventory) {
//     return inventory.id === inventoryItem;
//   });
// }
// Discussion

// The shape for this problem is that of filtering. Given a list of inventory transactions the solution only gets those that belong to a particular inventory item. It gets the relevant transactions by comparing the inventory id of each transaction to the value of the inventoryItem argument passed. It keeps the transaction every time it matches.
// Inventory Item Availability

// Building on the previous exercise, write a function the returns whether an item is available. As before, the function takes in two arguments: inventoryItem and transactions. The function will return true only if the sum of the quantity for the transactions for the item is greater than zero. Notice that in the transaction object there is a movement property. Every time the movement value is out it decreases the quantity.

// You may (and should) use the transactionsFor function from the previous exercise.





/*

Understanding
- input
   - a number, id
   - transactions, array of obejcts

- output
  - true if sum of quantity > 0
  - false otherwise
  
- rules
 - obj.movement 
  - out  - quantity
  - in  + quantity

Data Struction
- filter by given id
- reduce to sum of quantity

Algorigthm
- filter trans by id
- reduce to a sum of quantity, 
  - if movement is out, - 
  - else +



*/

function isItemAvailable(id, trans) {
  // filter
  let filtered = trans.filter(function (obj) {
    return obj.id === id;
  });

  let quantity = filtered.reduce(function(sum, obj) {
    if (obj.movement.toLowerCase() === 'out') {
      return sum - obj.quantity;
    } else if (obj.movement.toLowerCase() === 'in') {
      return sum + obj.quantity;
    } else {
      return sum;
    }
  }, 0);


  return (quantity > 0);
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

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true






































// Hide Solution & Discussion
// Solution

// function isItemAvailable(item, transactions) {
//   var quantity = transactionsFor(item, transactions).reduce(function(sum, transaction) {
//     if (transaction.movement === 'in') {
//       return sum += transaction.quantity;
//     } else {
//       return sum -= transaction.quantity;
//     }
//   }, 0);

//   return quantity > 0;
// }
// Discussion

// The solution first makes use of the result of the transactionsFor function to get only those transactions related to the inventoryItem. It then gets the sum by using a folding strategy. The callback function for the reduce uses a sum variable and a transaction object. It initializes the value of sum to 0. The solution does this since the value of quantity does not specify whether it is a positive or negative value. If it is not set and the first transaction where an out, the resulting value for sum would be bigger than what it should actually be. For every transaction, if the movement is in, it increments the value of sum by the transaction.quantity; decrements it if not. Consequently, it stores the result of the folding in the quantity variable. If the quantity is greater than zero then the isItemAvailabe function will return true; false otherwise.
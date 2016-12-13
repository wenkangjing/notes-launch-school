/*
Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip and then display both the tip and the total amount of the bill. You can ignore input validation and assume that the user will put in numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.0
The total is $230.0


Understanding
- input
  - bill amount
  - tip rate

- output
  - tip amount
  - total amount

- rules
  - total amount = bill amount + (tip rate + 1)

- assumption
  - valid input, all numbers

Test cases
200, 15   =>  30,   230
160, 7    =>  11.2, 171.2
20,  0    =>  0,    20


Algorithm

- prompt to bill amount -> number, decimal
- prompt to tip rate -> int or float? in precentage
- calculate
  - tip = bill amount * tip precentage / 100;
  - total  = bill amount + tip 
- log result

*/



let bill = parseInt(prompt('What is the bill?'), 10);
let tipPrecentage = parseInt(prompt('What is the tip percentage?'), 10);
let tip = bill * tipPrecentage / 100;
let total  = bill + tip;

console.log('The tips is $' + tip.toFixed(1));
console.log('The total is $' + total.toFixed(1));
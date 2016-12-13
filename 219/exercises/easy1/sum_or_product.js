/*
Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or product of all numbers between 1 and the entered integer.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

Understanding
- input
  - prompt to a number 
  - prompt to method: s to sum, p to product // case insensitive
- output
  - sum of [1 ~ number]
  - product of [1 ~ number]
- assumption
  - use input valid number
  - valid s or p
  - not overflow

Test cases
  5, s   => 15
  6, p   => 720
  10,s   => 55
  3, p   => 6 

Algorithm
- prompt to a number
- prompt to method: s to sum, p to product
- generate an array 1 to number
  - reduce the array, to sum or multiply elements
- log the result

*/

let number = parseInt(prompt('Please enter an integer greater than 0:'), 10);
if (isNaN(number)) {
  throw new Error('Invalid input')
}

let model = prompt('Enter "s" to compute the sum, "p" to compute the product.').toLowerCase();

let array = [];
for (var i = 1; i <= number; i++) {
  array.push(i);
}

if (model === 's') {
  let sum = array.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  console.log('The sum of the integers between 1 and ' + number + ' is ' + sum);
}


if (model === 'p') {
  let product = array.reduce(function(product, current) {
    return product * current;
  }, 1);
  console.log('The product of the integers between 1 and ' + number + ' is ' + product);
}


// provided solution

/*
Algorithm
- prompt to a number
- prompt to method: s to sum, p to product
- if mode is s
  - iterating from 1 - number
    - add to sum (initial 0)
- else if mode is p
  - iterating from 1 - number
    - muptiply to product (initial 1)
- else
  - invalid
*/

function computeSum (number) {
  let sum = 0;
  for (var i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}

function computeProduct (number) {
  let product = 1;
  for (var i = 1; i <= number; i++) {
    product = product * i;
  }
  return product;
}

if (model === 's') {
  var sum = computeSum(number);
  console.log('The sum of the integers between 1 and ' + number + ' is ' + sum + '.');
} else if (model === 'p') {
  var product = computeProduct(number);
  console.log('The product of the integers between 1 and ' + number + ' is ' + product + '.');
} else {
  console.log('Oops. Unknown operation.');
}


// Further Evaluation

// What if the input was an array of integers instead of just a number? How would your computeSum and computeProduct functions change? Given that the input is also an array, how might you make use of the Array.prototype.reduce() function?
// Fibonacci Number Location by Length

// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first 2 numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

// Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075 -- that's enormous, especially considering that it takes 6 iterations to enter the 2 digit numbers.

// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified as an argument. (The first Fibonacci number has index 1.)

// Examples:


/*
Understanding
- input
  - length: number of digits

- otuput 
  - 1-based index that first contains n-digit numbers

Algorithm
- generating fabonacci series, with index, number
  - if numberOfDigits(number) is the given length
    - return the index + 1

Abstraction
- numberOfDigits(number)
  - convert to stirng
  - return length;
*/

function findFibonacciIndexByLength_1(length) {
  if (length === 1) {
    return 1;
  }

  let array = [1, 1]; // initials by definition
  let number = 2;
  while (numberOfDigits(number) < length) {
    array.push(number); // no need to push to array, just count on-the-fly
    number = array[array.length - 1] + array[array.length - 2]; 
  }

  // console.log('Fibonacci series: ' + array);
  // console.log('Number: ' + number);
  // console.log('Index: ' + (array.length + 1));

  return array.length + 1;
}

function findFibonacciIndexByLength_2(length) {
  if (length === 1) {
    return 1;
  }

  let p1 = 1; // bad variable name
  let p2 = 1;
  let index = 2; // 1-based index
  let number = 2;
  while (numberOfDigits(number) < length) {
    number = p1 + p2;
    index++; 
    p2 = p1;
    p1 = number;
  }

  return index;
}


function numberOfDigits(number) {
  return String(number).length;
}

findFibonacciIndexByLength(1)     // 1
findFibonacciIndexByLength(2)     // 7
findFibonacciIndexByLength(10)    // 45
findFibonacciIndexByLength(23)    // 485


//Solution

function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fibonacci;
  do {
    fibonacci = first + second;
    index++;
    first = second;
    second = fibonacci;
  } while (fibonacci.toString().length < length);

  return index;
}

// Discussion

// The function starts of with the initialization of the fibonacci sequence. The first and second numbers, as defined, are both assigned the value of 1 while the value of index is 2.

// The solution then uses a do while loop to increment the value of fibonacci while its length is still less than the value of the argument passed. At every iteration the solution does the following:

// - Computes the value for fibonacci by adding the first and second values
// - Increments index by 1. It returns the value if it meets the length requirement of the fibonacci.
// - Sets the value of first to the value of second and the value of second to the value of fibonacci. If the criteria for stopping the loop isn't met at the end of this iteration, it used the two numbers for the computation of fibonacci in the next iteration.
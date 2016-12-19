// Counting Up

// Write a function that takes an integer argument, and returns an Array of all integers, in sequence, between 1 and the argument.

// You may assume that the argument will always be a valid integer that is greater than 0.


/*

Understanding
- input
  - an integer
    - positive
    - > 0

- output
  - an Array    
    - integers
    - from 1 to the given number


Algorithm
- looping from 1 to the given number  
  - push index to an Array
- return the array


*/


function sequence(integer) {
  let sequence = [];
  for (let i = 1; i <= integer; i++) {
    sequence.push(i);
  }

  console.log(sequence);
  return sequence;
}


// Examples:

sequence(5) // [1, 2, 3, 4, 5]
sequence(3) // [1, 2, 3]
sequence(1) // [1]



/*
Discussion

The solution uses a for loop to build the result array that contains the sequence. The key part is determining the starting value of the loop (var i = 1) and determining the stopping condition (i <= limit).
*/
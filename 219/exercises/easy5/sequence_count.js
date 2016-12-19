// Sequence Count

// Create a function that takes two integers as arguments. The first argument is a count, and the second is the first number of a sequence that your function will create. The function returns an Array that contains the same number of elements as the count argument, while the values of each element will be multiples of the starting number.

// You may assume that the count argument will always have a value of 0 or greater, while the starting number can be any integer value. If the count is 0, return an empty list.

/*
Understanding
- input
  - 2 integers
    - 1st, 0 or positive (count)
    - 2nd, first element of the sequence (startingNumber)

- output
  - an Array 
    - length is 1st arg - count
    - elements are multiples of 2nd arg - startingNumber

- exception
  - count is 0, return [];

Algorithm
- looping from 1 to count
  - calc startingNumber * index, push to Array
- return the array    
*/



function sequence(count, start) {
  let sequence = [];

  for (let i = 1; i <= count; i++) {
    sequence.push(start * i);
  }

  console.log(sequence);
  return sequence;
}




// Examples:

sequence(5, 1)       // [1, 2, 3, 4, 5]
sequence(4, -7)      // [-7, -14, -21, -28]
sequence(3, 0)       // [0, 0, 0]
sequence(0, 1000000) // []



/*
Solution

function sequence(count, firstNum) {
  var result = [];
  var sum = 0;
  for (var i = 0; i < count; i++) {
    result.push(sum += firstNum);
  }

  return result;
}


Discussion

The solution uses a for loop to build the result array that contains the sequence. The for loop uses the count argument as the limit of the iterations. At every iteration it increments the value of sum by firstNum and consequently pushes it to the result array. After the loop, it returns the result array.
*/
// Multiples of 3 and 5

// Write a function that computes the sum of all numbers between 1 and some other number that are a multiple of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples

// multisum(3);      // 3
// multisum(5);      // 8
// multisum(10);     // 33
// multisum(1000);   // 234168

/*
Understanding
- input
  - a number (> 1)

- output
  - sum of multiple of 3 or 5
    - between [1-number]

Algorithm
- iterating from 1 to number
  - reduce to a sum that
    - add current if muptiple of 3 / 5
    - add 0 if not

- is muptile if 3 or 5
  - true or false

*/

// better parameter maxValue
function multisum_1(number) {
  let sum = 0;
  for (var i = 1; i <= number; i++) {
    if (multipleThreeOrFive(i)) {
      sum = sum + i;
    }
  }
  console.log(sum);
  return sum;
}

// more generic fimctopm isMultiple(number, divider)
function multipleThreeOrFive (number) {
  return !!(number % 3 === 0 || number % 5 === 0);
}


/*

Algorithm
- generate an array 
  - contains multiple of 3 or 5 from [1-number] 
- reduce the array to a number of sum
*/

function multisum (number) {
  let array = [];
  for (var i = 1; i <= number; i++) {
    if (multipleThreeOrFive(i)) {
      array.push(i);
    }
  }

  if (array.length === 0) {
    return 0;
  }

  let sum = array.reduce(function (sum, e) {
    return sum + e;
  });

  return sum;
}

// Test Cases
multisum(2)       // 0
multisum(3);      // 3
multisum(5);      // 8
multisum(10);     // 33
multisum(1000);   // 234168


// Discussion

// The solution begins with an isMultiple function that returns true if the given number is a multiple of the divisor, false if it is not. This function isn't entirely necessary, but it makes the main function a bit more readable.

// The main function, multisum adds each value in the range to our sum variable if the value is a multiple of 3 or 5.

// Further Exploration

// Investigate Array.prototype.reduce(). How might this function be useful in solving this problem? Try writing such a solution. Which is clearer? Which is more succinct?
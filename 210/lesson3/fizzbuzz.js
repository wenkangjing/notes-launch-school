/* 
Write a function that iterates over the integers from 1 to 100, inclusive. For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.

Your output should look like this:

fizzbuzz();

// console output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
//... rest of output omitted for brevity
*/


// 1 - 100
// multiple of 3 - fizz
// multiple of 5 - buzz
// both 3 and 5 - bizzbuzz
// all others log the number


function fizzbuzz_1() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

function fizzbuzz() {
  var message; // hoisting 

  for (var i = 1; i <= 100; i++) {
    message = '';
    if (i % 3 === 0) {
      message += 'fizz';
    } 
    if (i % 5 === 0) {
      message += 'buzz';
    }
    console.log(message || i);
  }
}

fizzbuzz();



/*
In this exercise, you must loop through the integers 1 to 100, inclusive. For each number, check whether it is a multiple of 3, 5, or both, then log the appropriate number or string. Pay attention to the order of your checks, and be mindful that your loop includes both 1 and 100.

In an earlier exercise, you logged numbers that are a multiple of 3, 5, or both. You can tweak this solution to meet the requirements of this exercise.

*/
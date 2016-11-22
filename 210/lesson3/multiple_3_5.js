/*
Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

multiplesOfThreeAndFive();

// output on console
3
5
6
9
10
12
15!
// ... remainder of output omitted for brevity

*/

// muptiple of 3
// muptiple of 5
// multiple of 3 and 5

function multiplesOfThreeAndFive_1() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0 ) {
      console.log(i);
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log(i);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + '!');
    } else {
      continue;
    } 
  }
}

function multiplesOfThreeAndFive_2() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0) {
      console.log(i);
    } else if (i % 5 === 0) {
      console.log(i);
    }  
  }
}


function multiplesOfThreeAndFive(min, max) {
  for (var i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0) {
      console.log(i);
    } else if (i % 5 === 0) {
      console.log(i);
    }  
  }
}
multiplesOfThreeAndFive(3, 21);


/*
In this exercise, you must loop through the integers 1 to 100 (inclusive). In each iteration, check whether the integer is a multiple of 3, 5, or both. Depending on how you check each number, the sequence of your checks may matter.

A number is a multiple of 3 if the remainder when divided by 3 is 0; it is a multiple of 5 if the remainder when divided by 5 is 0. In JavaScript, you can test this using the remainder operator. For example:

var number1 = 50;
var number2 = 27;

console.log(number1 % 5 === 0); // true, therefore multiple of 5
console.log(number1 % 3 === 0); // false, therefore not multiple of 3
console.log(number2 % 3 === 0); // true, therefore multiple of 3

For additional practice, how would you change your function so it takes, as arguments, the range of numbers it should check.

*/
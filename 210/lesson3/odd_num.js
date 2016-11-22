/*
printOddNumbers(19);

//output on console
1
3
5
7
9
11
13
15
17
19
*/

// odd
function printOddNumbers(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

printOddNumbers(19);


/*
The logic is straightforward for this exercise - you must loop through the numbers from 1 to the number, and for each number, log it to the console if it's odd. If you use a for loop, pay attention to the beginning and terminal conditions. Be sure to include 1 and the number as part of the loop.

To test whether a number is odd, you can use the remainder operator. For example:

var a = 21;
var b = 10;

console.log(a % 2 === 1); // true
console.log(b % 2 === 1); // false

For more practice, consider the following:

You can remove the conditional inside the loop and increment i by 2 with each step, instead of 1. How would you write code to do that?
Instead of a conditional that checks for odd numbers, you can write a conditional that checks for even numbers, but skips them with the continue statement. How would you write your code?
function printOddNumbers(number) {
  for (var i = 1; i<= number; i += 2) {
    console.log(i);
  }
}
function printOddNumbers(number) {
  for (var i = 1; i<= number; i += 2) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}


*/
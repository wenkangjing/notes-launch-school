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
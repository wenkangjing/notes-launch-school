/*

Write a function printMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

printMultiples(17);
// output (5x, 3x and 1x)
85
51
17

printMultiples(21);
// output (3x and 1x)
63
21

*/ 

// descending 
// multiples
// odd only
// 0 -100
function printMultiples_1(num) {
  for (var i = 99; i >= 0; i -= 2) {
    if (i % num === 0) {
      console.log(i);
    }
  }
}

// set step is num
function printMultiples_2(num) {
  var muptiple = Math.floor(100 / num) * num;
  while (muptiple > 0) {
    if (muptiple % 2 !== 0) {
      console.log(muptiple);
    }
    muptiple -= num;
  }
}

function printMultiples_3(num) {
   var muptiple = Math.floor(100 / num) * num;
   for (var i = muptiple; i > 0; i -= num) {
     if (i % 2 !== 0) {
       console.log(i);
     }
   }
}

function largestMuptile(num) {
  if (!num) {
    return 0;
  }
  return Math.floor(100 / num) * num;
}

function printMultiples(num) {
  for (var i = largestMuptile(num); i > 0; i -= num) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printMultiples(17);

printMultiples(21);


/*
The easiest approach to this problem is to loop from 100 down to 0. For each of these numbers, check whether it satisfies these conditions:

It is an odd number.
It is a multiple of the argument.
If it satisfies both conditions, log it to the console.

This solution must step through every number between 100 and 0. Alternatively, you can determine the number's largest multiple that is less than 100, then start the loop with that multiple. With each iteration of the loop, you can decrement the number by the argument; when the result is negative, you can quit.

As above, we must check each multiple to determine whether it is odd. If it is odd, we log it.

Math.floor(100 / number) * number returns the largest multiple of number that is between 0 and 100. If you're not familiar with the floor method, see the documentation.

Here's a solution that uses this approach and a while loop:

function printMultiples(number) {
  var multiple = Math.floor(100 / number) * number;

  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }

    multiple -= number;
  }
}
This solution uses for instead of while. Effectively, it puts the starting value, the decrementing logic, and the final condition in a single line:

function printMultiples(number) {
  for (var multiple = Math.floor(100 / number) * number; multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}
This is dense code and difficult to read thanks to the calculation, so it may not be the best solution. You might consider a refactor that computes the largest multiple as a separate function.


*/
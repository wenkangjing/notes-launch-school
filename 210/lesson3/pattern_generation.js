/* 
Pattern Generation

Write a function that takes a number of rows as the argument n and logs a square of numbers and asterisks. For example, if n = 7, log the following pattern:

generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567


*/

// n lines
// from 1, not 0
// <= i print i
// > i print *
// it only works when n < 9,  width
function generatePattern_1(n) {
  var message = '';

  for (var i = 1; i <= n; i++) {
    message = '';
    for (var j = 1; j <= n; j++) {
      if (j <= i) {
        message += String(j);
      } else {
        message += '*';
      }
    }

    console.log(message);
  }
}

// 10-99 is wider than a single *
// need ** to align to
function generatePattern_2(n) {
  var message = '';

  for (var i = 1; i <= n; i++) {
    message = '';
    for (var j = 1; j <= n; j++) {
      if (j <= i) {
        message += String(j);
      } else if (j <= 9) {
        message += '*';
      } else if (j <= 99) {
        message += '**';
      }
    }

    console.log(message);
  }
}


// more generic way
function generatePattern(n) {
  var message = '';

  // get the maximun length
  for (var i = 1; i <= n; i++) {
    message += String(i);
  }

  var maxLength = message.length;

  // concat string
  for (var i = 1; i <= n; i++) {
    message = '';
    for (var j = 1; j <= n; j++) {
      if (j <= i) {
        message += String(j);
      } else {
        message += '*';
      }
    }

    // append extra * if needed
    var extra = maxLength - message.length; 
    while (extra > 0) {
      message += '*'
      extra--;
    }
    console.log(message);
  }
}


generatePattern(20);

/*

One way to think through this type of problem is to write a formal description of the required output. For example, we can describe it this way:

We must output n lines of n characters.
If the line number is i, then this line should have the digits from 1 to i followed by enough * characters to fill out the line to a total length of n characters. This description should provide an idea of what you need to do in your program.

You'll need a loop from 1 to n to build the n rows; for each row, start with an empty string and gradually build the pattern string via concatenation.

*/
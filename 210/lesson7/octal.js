// Exercise: Octal

// Write a Function, octalToDecimal, that implements octal to decimal conversion. When invoked with a String that contains a representation of an octal number, the Function should return a decimal version of that value as a Number. Implement the conversion yourself. Do not use something else to perform the conversion for you.

// Decimal, the numbering system we're most familiar with, is a base-10 system.

// A number 233 in base 10 notation can be understood as a linear combination of powers of 10:

// The rightmost digit gets multiplied by 100 = 1
// The next number gets multiplied by 101 = 10
// ...
// The nth number gets multiplied by 10n-1.
// All these values are summed.


// Here is an example:

//   233                       // decimal
// = 2*10^2 + 3*10^1 + 3*10^0
// = 2*100  + 3*10   + 3*1
// Octal, is similar, but uses powers of 8 rather than powers of 10 (and is called a base-8 system as a result):

//   233                       // octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155                       // decimal

// input: string of a oct number
// output a decimal number
// 
// convert to array
// 
// loop array to get digit
//    sum = sum * 8 + digit
// 
function octalToDecimal(number) {
  var sum = 0;

  var digits = number.split('').reverse();

  // Could add one more step to calculate each digit's pow
  sum = digits.reduce(function(pre, current, index) {
    return pre + current * Math.pow(8, index);
  }, 0);

  console.log(sum);
  return sum;
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9



// Thinking in Abstractions

// The example of converting Octal 233 to Decimal 155 informs us the shape of the solution already:

// splitting the input into an array of digits ([2, 3, 3])
// map this "digit" array to an array of digits multiplied by "power of eights" ([128, 24, 3])
// reduce all the numbers to get the total decimal value (155)
// We'll use this to write out the shape of our solution:

// function octalToDecimal(numberString) {
//   var decimalParts = numberString.split('').map(function(digitChar) {
//     // convert digitChar to numbers and apply power of eights
//   });

//   return decimalParts.reduce(function(parts) {
//     // sum them up
//   });
// }


// Solution
// function octalToDecimal(numberString) {
//   var decimalParts = numberString.split('').map(function(digitChar, index) {
//     return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
//   });

//   return decimalParts.reduce(function(sum, number) {
//     return sum + number;
//   });
// }


// If you can recognize the entire solution would take the shape of a reduce, and the rest is details, then we can arrive at the solution below:

// function octalToDecimal(numberString) {
//   return numberString.split('').reduce(function(sum, digitChar, index) {
//     return sum + Number(digitChar) * Math.pow(8, numberString.length - index -1);
//   }, 0);
// }
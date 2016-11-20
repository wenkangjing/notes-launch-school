/*
Greatest Common Divisor

Create a function that computes the Greatest Common Divisor of two positive integers.

Example

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

*/


function gcd(value1, value2) {
  var greatest = 0;
  var min = Math.min(value1, value2);
  for (var i = 1; i <= min; i++) {
    if (value1 % i === 0 && value2 % i === 0) {
      greatest = i;
    }
  }
  return greatest;
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));
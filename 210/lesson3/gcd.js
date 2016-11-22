/*
Greatest Common Divisor

Create a function that computes the Greatest Common Divisor of two positive integers.

Example

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

*/

// loop i in 1-min, store the reminder and return the largest one  
function gcd_1(value1, value2) {
  var greatest = 0;
  var min = Math.min(value1, value2);
  for (var i = 1; i <= min; i++) {
    if (value1 % i === 0 && value2 % i === 0) {
      greatest = i;
    }
  }
  return greatest;
}


// Euclid's algo
function gcd_2(value1, value2) {
  while(value1 !== 0 && value2 !== 0) {
    if (value1 > value2) {
      value1 = value1 % value2; 
    } else {
      value2 = value2 % value1;
    }
  } 
  return value1 || value2; 
}

/*
Pseudo code in wikipedia: if a < b, a b exchange 
function gcd(a, b)
    while b ≠ 0
       t := b; 
       b := a mod b; 
       a := t; 
    return a;

*/
function gcd(value1, value2) {
  while (value2 !== 0) {
    var temp = value2;
    value2 = value1 % value2
    value1 = temp;
  }
  return value1; 
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));

console.log(gcd(12, gcd(4, 8))); 
console.log(gcd(gcd(12, 4), 8));


/*
The examples all put the larger number first. Do you think the program will still work if you reverse the order and place the smaller number first?

Our solution works with only two numbers. Can you expand it to accept an array of two or more numbers instead? Hint: the GCD is associative. To compute the GCD of 12, 4, and 8, for instance, you can compute:

gcd(12, gcd(4, 8)); // 4
You can also compute it with:

gcd(gcd(12, 4), 8)); // 4

*/
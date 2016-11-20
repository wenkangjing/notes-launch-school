/*
Write a function that takes a number argument, and returns true if the number is prime, false if it is not.

You may assume that the input is always a non-negative integer.

Example

isPrime(1);  // false
isPrime(2);  // true
isPrime(3);  // true
isPrime(43); // true
isPrime(55); // false
isPrime(0);  // false

*/


// Prime (素数、质数) is a natural number greater than 1 
// that has no positive divisors other than 1 and itself

// loop i in 2 to number
// if any reminder of num % i = 0, num is not prime

function isPrime_1(num) {
  if (num <= 1) // GuardClause or Precondition
    return false;

  for (var i = 2; i < num; i++) {
    if ( num % i === 0) {
      return false;
    } 
  }
  
  return true;
}

// Prime number must be even
// Odd number might be prime
function isPrime(num) {
  if (num <= 1) // GuardClause or Precondition
    return false;
  
  if ( num > 2 && num % 2 === 0) 
    return false;

  for (var i = 3; i < num; i = i + 2) {
    if (num % i === 0) {
      return false;
    }
  }  

  return true;
}

console.log(isPrime(1)); 
console.log(isPrime(2)); 
console.log(isPrime(3)); 
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0)); 
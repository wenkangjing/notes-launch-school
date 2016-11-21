/* 
Give us your feedback
Goldbach Numbers

Write a function named checkGoldbach() that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer n, and logs all combinations of two prime numbers whose sum is n. Log the prime pairs with the smaller number first. If n is odd or less than 4, your function should log null.

Your checkGoldbach() function may call the isPrime() function you wrote for a previous exercise.

Example

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
*/
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

function checkGoldbach(num) {
  if (num < 4 || num % 2 === 1) 
    return null;

  for (var i = 1; i < num / 2; i++) {
    if (isPrime(i) && isPrime(num - i)) {
      console.log(i + ' ' + (num - i));
    }
  } 
}
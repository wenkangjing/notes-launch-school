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
/*
To solve this problem, you need to get all possible pairs of numbers that add up to n. For each pair of candidates, check whether both numbers are prime. Be mindful of duplicates. For example: (47, 53) and (53, 47) are the same pair of numbers; check only one of the pairs, and log only one.

One way uses a nested loop that generates all number pairs from 2 to n:

for (var i = 2; i < n; i++) {
  for (var j = 2; j < n; j++) {
    if (i + j === n) {
      // do something here with i and j
    }
  }
}
Check each pair to see if they add up to n. This is slow for big numbers, and duplicates each pair of numbers; it does, however, do the job, and is easy to write.

Alternatively, we can use the fact that the numbers must add to n, and use just one loop; the other number in each pair will always be n - i:

for (var i = 2; i < n; i++) {
  var j = n - i;
  // do something with i and j
}
Going further, we can avoid duplicates: just terminate the loop when i > j or when i >= n / 2:

*/
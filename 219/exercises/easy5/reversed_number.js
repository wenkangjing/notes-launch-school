// Convert number to reversed array of digits

// Write a function that takes a positive integer as an argument and returns that number with its digits reversed. 

/*
Understanding
- input
  - a positive integer

- output
  - a new number 
    - digits r eversed


Algorightm
- convert to string
  - looping from length - 1 to 0
  - append to new string
- convert new stirng to integer  

*/


function reversedNumber(integer) {
  let digits = String(integer);
  
  let reversedDigits = '';
  for (let i = digits.length - 1; i >= 0; i--) {
    reversedDigits += digits[i];
  }

  return parseInt(reversedDigits, 10);
}


// Examples:

console.log(reversedNumber(12345)); // 54321
console.log(reversedNumber(12213)); // 31221
console.log(reversedNumber(456));   // 654
console.log(reversedNumber(12000)); // 21 # Note that zeros get dropped!
console.log(reversedNumber(1));     // 1


/*
Hide Solution & Discussion
Solution

function reversedNumber(number) {
  var numberStringArray = number.toString().split('');
  return parseInt(numberStringArray.reverse().join(''), 10);
}
Discussion

The approached used in this solution leverages the Array.prototype.reverse() method. It converts the number argument to a string and splits it using an empty string as delimiter. It stores the result in the numberStringArray variable. Following this, it returns the result of calling parseInt on the reversed array joined using an empty string.

Notice the radix 10 as an argument to parseInt. This gives the parseInt function the base by which it parses the number. In the case of having leading zeroes (i.e. 00021), parseInt will convert the number to 21 (base 10) instead of 17 (base 8). Without the radix 8, parseInt defaults to base 10 and parses it as such even if there are leading zeroes that typically connote base 8.
*/
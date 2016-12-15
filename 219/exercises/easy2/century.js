// What Century is That

// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with st, nd, rd, or th as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th century.



/*
Understanding
- input 
  - year number (assuming > 1)
- output
  - century
  - suffix, st, nd, rd, th
- rules
  - new century from 01 - 100
    1 -> 1
    24 -> 1
    100 -> 1
    101 -> 2
    1001 -> 11

    
  - suffix
    1 st
    2 nd
    3 rd
    4-9 th
    x1 st
    x2 nd
    x3 rd
    x4-th
    
    exception:  11 12 13 th


Alglrithm
  - get century number
  - get suffix

Abstraction
  - getCenturyNumber(number)
    - century  = (year - 1) / 100 + 1
    - floor /

  - getSuffix(number)
    - number % 10 
      - 1 st
      - 2 nd
      - 3 rd
      - other th
    - exception 11 12 13
      - th

*/


function century(year) {
  let number = getCenturyNumber(year);
  let suffix = getSuffix(number);
  let centuryString = number + suffix;

  console.log(centuryString);
  return centuryString;
} 



function getCenturyNumber(year) {
  return Math.floor((year - 1) / 100) + 1;
}


function getSuffix(number) {
  let reminder = number % 10;
  let suffix = 'th';
  if (reminder === 1) {
    suffix = 'st';
  } else if (reminder === 2) {
    suffix = 'nd';
  } else if (reminder === 3) {
    suffix = 'rd';
  }

  let exception = number % 100;
  if (exception === 11 || exception === 12 || exception ===13) {
    suffix = 'th';
  }

  return suffix;
}




// Examples:

century(2000);        // '20th'
century(2001);        // '21st'
century(1965);        // '20th'
century(256);         // '3rd'
century(5);           // '1st'
century(10103);       // '102nd'
century(1052);        // '11th'
century(1127);        // '12th'
century(11201);       // '113th'
century(51111);       // '113th
century(111111);       // '113th




// Solution

// function century(year) {
//   var century = Math.floor(year / 100) + 1;
//   if (year % 100 === 0) {
//     century -= 1;
//   }

//   return century.toString() + centurySuffix(century);
// }

// function centurySuffix(century) {
//   if (catchWithTh(century % 100)) {
//     return 'th';
//   }

//   var last_digit = century % 10;
//   switch (last_digit) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd';
//     default: return 'th';
//   };
// }

// function catchWithTh(lastTwo) {
//   return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
// }
// Discussion

// First, notice the pattern about a century. It is equal to the current year divided by 100 plus 1. The exception to this is if the year is some multiple of 100. In that case, the century is the current year divided by 100.

// Next, notice the suffix to append to century, the options being: 'th', 'nd', 'rd', 'st'.

// With this, the solution decides which one to use by checking the last digit of the century. Though, before doing that, it does one extra check. If the century's value mod 100 ends in either 11, 12, or 13, then it returns 'th'. Any other time, it returns a suffix determined by the case statement and the value of century % 10.

// Finally, it combines the string representation of the century with the correct suffix, and we have our answer.
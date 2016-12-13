// Leap Years Part 1

// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year unless the year is evenly divisible by 400.

// Assume this rule is good for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.


/*

Understainding

- input 
  - yaer number

- output
  - boolean identifing if the given year is leap year

- rules
  - leap if year % 4 = 0 
  - not leap if year %  100 = 0
  - leap if year % 400 = 0

  - 400 % 100 = 0
  - 100 % 4 = 0   

Algorithm
- if year % 400 is 0 
  - it is for sure a leap year -> true
- else if year % 100 is 0
  - it is not a leep year      -> false
- else if year % 4
  - it is a leap year          -> ture
- else
  - not a leap year,           -> false

*/

function isLeapYear_1 (year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}


// Test Cases

console.log(isLeapYear(2016));     // true
console.log(isLeapYear(2015));     // false
console.log(isLeapYear(2100));     // false
console.log(isLeapYear(2400));     // true
console.log(isLeapYear(240000));   // true
console.log(isLeapYear(240001));   // false
console.log(isLeapYear(2000));     // true
console.log(isLeapYear(1900));     // false
console.log(isLeapYear(1752));     // true
console.log(isLeapYear(1700));     // false
console.log(isLeapYear(1));        // false
console.log(isLeapYear(100));      // false
console.log(isLeapYear(400));      // true


// better 
function isLeapYear_2(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// good
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// The first solution takes this one step at a time by testing for the least common cases first; years divisible by 400, and years divisible by 100. If the year is anything else, then it is a leap year if it divisible by 4.

// The second solution is more idiomatic, but also a little harder to read. It is, in effect, identical to the first solution, with the tests turned around a little bit.
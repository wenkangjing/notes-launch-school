// Cute Angles

// Write a function that takes a floating point number that represents an angle between 0 and 360 degrees and returns a String that represents that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.


/*

Understanding
- input 
  - a float number [0-360] inclusive

- output
  - a string of angle 
    - degrees ˚
    - minutes '
    - seconds "

- rules
  - convert: 1 degree == 60 minutes, 1 minute == 60 seconds
  - format: degree in any digits, minutes/seconds in 2 digits (padLeft)


Algorithm
- convert to string, get index of '.'
- degree is slice(0, index of .)

- reminding = the given number - degree
- convert reminding to minutes / seconds
  - minutes = floor of convert reminding to minutes
  - seconds = reminder - minutes
  
- padLeft minutes and seconds

*/

var DEGREE = '\xB0'

function dms(float) {
  let sign = float < 0 ? '-' :'';

  float = Math.abs(float);

  let degree = Math.floor(float);
  let remindingDegree = float - degree;
  
  let minute = Math.floor(remindingDegree * 60);
  let remindingMinute = remindingDegree * 60 - minute;

  let second = Math.floor(remindingMinute * 60);

  let result = sign + String(degree) + DEGREE + padLeft(minute) + '\'' + padLeft(second) + '\"';
  
  console.log(result);
}


/*
Abstraction

- degreeToMinute (degree)
  -  return degree * 60;   

- degreeToSecond (degree)
  - return degree * 60 * 60;

- padLeft (string)
  - return padded string  
*/

function padLeft(number) {
  let string = number.toString();
  while (string.length < 2) {
    string = '0' + string;
  }
  return string;
}

function print(degree, minute, second) {
  console.log(String(degree) + DEGREE + padLeft(minute) + '\'' + padLeft(second) + '\"');
}


dms(30)        // 30°00'00"
dms(-30)        // -30°00'00"
dms(30)        // 30°00'00"
dms(76.73)     // 76°43'48"
dms(-76.73)     // -76°43'48"
dms(254.6)     // 254°35'59"
dms(93.034773) // 93°02'05"
dms(0)         // 0°00'00"
dms(360)       // 360°00'00" or 0°00'00"



// Hide Solution & Discussion
// Solution

// var DEGREE = '\xB0';
// var MINUTES_PER_DEGREE = 60;
// var SECONDS_PER_DEGREE = 3600;

// function dms(degreesFloat) {
//   var degreesInt = Math.floor(degreesFloat);
//   var minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
//   var seconds = Math.floor((degreesFloat - degreesInt - minutes / MINUTES_PER_DEGREE) * SECONDS_PER_DEGREE);
//   return degreesInt + DEGREE + padZeroes(minutes) + '\'' + padZeroes(seconds) + '\"';
// }

// function padZeroes(number) {
//   var numString = number.toString();
//   return numString.length < 2 ? '0' + numString : numString;
// }
// Discussion

// The tricky part with this exercise is the mathematical component. That said, there are websites that provides details for computing for it.

// For this solution, it computes for the degreesInt component by flooring the input so that it removes the decimal component. It computes the minutes component by subtracting from the input the degreesInt component and then multiplying the result by the MINUTES_PER_DEGREE. Lastly, it computes the seconds component by subtracting from the input the degreesInt and minutes divided by MINUTES_PER_DEGREE and then multiplying the result by the SECONDS_PER_DEGREE. For both the minutes and seconds components, the solution subtracts from the input to get the value of the decimal components that it multiplies with its respective conversion factors.

// The next part, which is more programmatic in nature, is the formatting of the string output. For this one, the solution uses a helper function that pads the number with a zero to the left if it were only a single digit. It returns a string with escaped single and double quotes so that it will be part of the string variable and not interpreted as an opening or closing of a string literal declaration. Finally, the solution also uses the DEGREE variable in the string that it returns. The DEGREE variable holds the hexadecimal escape sequence representing the degree symbol.

// Further Exploration

// The current solution implementation only works for positive numbers in the range of 0 to 360 (inlcusive). Can you refactor it such that it works for any positive and negative numbers?
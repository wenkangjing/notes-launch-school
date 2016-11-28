// 1. All of the Math methods expect and return values in radians rather than degrees. 
// Mathematically, radians are easier to work with in the confines of a programming language, 
// so nearly all languages will use radians for circle and arc calculations. 
//To read more about radians, check out this article. http://www.mathsisfun.com/geometry/radians.html 
//Using the Math.PI property, create a function that will convert radians to degrees. 


// PI * r = 180, r = 180 / PI, radian times r = radian * 180 / PI 
function radian2drgree(radian) {
  return radian * 180 / Math.PI;
}


// 2. Converting a positive integer to a negative is as simple as placing a minus sign in front of the variable, 
// but if you don't know whether or not the original value is negative you may inadvertently convert your variable to the wrong value. 
//Using Math.abs, you can ensure that you are converting your value to a positive or negative value. 
//Create a variable with a value of -180. Using the abs function on Math, log the positive value of the variable.

var degree = -180;
console.log(Math.abs(degree));

// 3. You can calculate the square of a number by multiplying the number by itself. 
// Obtaining the square root of a number takes more work. 
// Rather than write a function to calculate this yourself, 
// use the Math.sqrt function to find the square root of 16777216.

var root = Math.sqrt(16777216)
console.log(root); // 4096

// 4. Creating the square of a variable is a simple matter of multiplying it by itself, 
// but how about calculating a variable to the power of 7? 
// Instead of writing your own function, 
// Math.pow takes two arguments, the base and the exponent, 
// and returns the result. Use Math.pow to log the result of 16 to the 6th power.

var pow = Math.pow(16, 6);
console.log(pow); // 16777216


// 5. While rounding numbers up or down in JavaScript, there are three methods to assist you. 
// Math.round will take any decimal value greater or equal to .5 and round it up to the nearest integer. 
// Math.floor will take any number and reduce it to the next lower integer, effectively cropping any decimal place.
// Math.ceil will take any number and increase it to the next highest integer, meaning that if there is any decimal value present the return is one more than the integer value of the number.

// Use the appropriate method on each of these variables to return an integer value of 50. Make sure you use each method once.

var a = 50.72;
console.log(Math.floor(a));

var b = 49.2;
console.log(Math.ceil(b));

var c = 49.86;
console.log(Math.round(c));

// 6. Math.random is a method that will return a random floating-point number between 0 and 1. 
// This isn't too helpful on its own, since most of the time you want a random number it's between two integer values and you would like an integer returned. 
// Create a function that takes two arguments, a minimum and a maximum value, and returns a random integer from min through max using Math.random.

function randomInteger_1(min, max){
  var range = max - min;
  var float = Math.random() * range + min;
  return Math.round(float);
}

function randomInteger(min, max){
  if (min === max)
    return min;

  var range = max - min;
  var float = Math.random() * range + min;
  return Math.round(float); // round
}


//You can use Math.floor(Math.random() * (max - min + 1) + min) to project random number generation between 0 to 1, to random number generation between min and max (both inclusive). Check the MDN documentation for more detailed explanation.


function randomInt(min, max) {
  var difference;
  var swap;

  if (min === max) {
    return min;
  } else if (min > max) {
    swap = min;
    min = max;
    max = swap;
  }

  difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min; // floor
}

console.log(randomInt(1, 5));

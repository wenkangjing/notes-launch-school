// Always Return Negative

// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the number negative, return the original number.



/*

Understanding
- input
  - a number
- output
  - negative if number is positive
  - original if number is negative

*/


// doesn't work when number is -0
function negative_1(number) {
  return (number >= 0) ? -number : number;
}

// abs is the better solution
function negative(number) {
  return Math.abs(number) * -1;
}





// Examples;

console.log(negative(5));  // -5
negative(-3); // -3
negative(0);  // -0
negative(-0);  //-0 



/*
Discussion

The solution uses the Math.abs() method to convert to a positive number any argument passed. Once it is a positive number, multiplying it by a negative 1 will ensure that return values are negative.

Further Exploration

An alternative solution will be to use a ternary operator. If you haven't use it, try converting the solution to make use of it.
*/
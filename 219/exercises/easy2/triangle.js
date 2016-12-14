// Right Triangles

// Write a function that takes a positive integer, n, as an argument, and displays a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

// Examples:

// triangle(5)

//     *
//    **
//   ***
//  ****
// *****

// triangle(9)

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********


/*
Understanding
- input
  - positive integer: n
- output
  - triangle: space + start
    - n rows [1-n]    
    - n columns
- rules
  - i in [1-n]
  - each row contains, i starts, n - i spaces


Algorithm
- loop  1 - n
  - increase stars
  - padleft
  - log 

Abstraction
  - padding left  
    - a string of starts
      - append (n - stars.length) space

*/


function triangle(number) {
  let stars = '*';
  for (var i = 1; i <= number; i++) {
    console.log(padLeft(stars, number));
    stars += '*';
  }
}

function padLeft (string, width) {
  let padded = string;
  while (padded.length < width) {
    padded =  ' ' + padded;
  }
  return padded;
}


// Test Cases

//triangle(1);
//triangle(5);
//triangle(9)
//triangle(20)


// Solution

// function triangles(height) {
//   var stars = 1;
//   var spaces = height - 1;

//   for (var i = 0; i < height; i++) {
//     console.log(repeat(' ', spaces) + repeat('*', stars));
//     stars++;
//     spaces--;
//   }
// }

// function repeat(char, count) {
//   var repeated = ''
//   for (var i = 0; i < count; i++) {
//     repeated += char;
//   }

//   return repeated;
// }
// Discussion

// For this problem there is an inverse relationship between the number of spaces and the number of stars that printed on each line. If it is on the first line, it prints height - 1 spaces and 1 star. If it is on the second line it prints height - 2 spaces and 2 stars. And so forth.

// The solution does just that by initially setting stars to 1, and spaces to height - 1. On each iteration, it outputs the number of spaces and starts, and then it decrements the number of spaces and increment the number of stars. This will give the desired result.

// Notice the use of the repeat function. This repeat function replicates the character passed to it based on the count argument passed. The repeat function makes the code easier to read and extracts code that would have, otherwise, been replicated for displaying the appropriate number spaces and stars for each iteration.
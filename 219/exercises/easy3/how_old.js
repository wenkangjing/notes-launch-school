// How Old is Teddy

// Build a program that randomly generates and prints Teddy's age. Have the age be a random number between 20 and 200 (inclusive).

// Example Output

// Teddy is 69 years old!


/*
Algorithm
- Math.random return 0 - 1 in float number
e.g. 3-7 // range 4

original
|-| range 1
0 1

multiply
|-|-|-|-| range 4
0 1 2 3 4

shift
|-|-|-|-|-|-|-|
x x x 3 4 5 6 7

round to integer 
*/


for (let i = 0; i < 100; i++) {
  console.log('Teddy is ' + randomInteger(20, 200) + ' years old! ');
}

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
  return Math.floor(Math.random() * difference) + min;
}

// Approach/Algorithm

// Hint:

// The Math object has a random function that might be useful. Checkout the documentation in MDN.
// How many possible numbers can be generated?
// How do you make sure that the numbers generated won't go below the minimum value?
// Solution

// function randomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var age = randomBetween(20, 200);
// console.log('Teddy is ' + age + ' years old!');
// Discussion

// The solution makes use of the random() function of the Math object. The random() function generates a random floating-point number between 0 (inclusive) and 1 (exclusive). To have the random number be between 20 and 200, the solutions uses the function randomBetweeen. It takes a min and a max value as arguments.

// The first part, Math.floor(Math.random() * (max - min + 1)), of the return statement in the randomBetween function generates a number based on the range (distance) between the max and the min. If the arguments passed are 20 and 200, there are 180 possible values starting from 1 up to 180.

// The second part, + min;, which completes the return statement, offsets the current value so that the number returned falls within the range of the arguments passed.

// Finally, the Math.floor() makes the number generated an integer. The function takes a number and reduces it to the next lower integer, effectively cropping any decimal place.

// Further Exploration

// The randomBetween function used the Math.floor() method. Would it make a difference if the Math.round() function was used instead?

// Also, how do we make the function more robust? What if the user inadvertently gave the inputs in reverse order? i.e The value passed to min is higher than max.
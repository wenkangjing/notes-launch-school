/*

How Big is the Room

Build a program that asks a user for the length and width of a room in meters and then logs to the console the area of the room in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the prompt() function to collect user input.

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.0 square meters (753.47 square feet).


Understand

- input
  - length and width in meters
  - from prompt
- output
  - area (m2)
  - area (f2)
- rules
  - 1 m2 = 10.7639 f2

Algorithm
- propmt to lenght
- prompt to width
- calc area in m2 (areaSquareMeter = length * width)
- convert to f2 (areaSquareFeet = areaSquareMeter * 10.7639)

Test Cases

length, witdh  => squre meters, squre feet
0, 0            => 0, 0
1, 1            => 1, 10.76
3, 5            => 15, 161.46

undefined
NaN


*/

const SQUAREFEET_PER_SQUAREMETTER = 10.7639; // better name SQMETERS_TO_SQFEET

let length = Number(prompt('Enter the length of the room in meters:')); // or use parseInt(xx, 10)
console.log(length);

let width = Number(prompt('Enter the width of the room in meters:'));
console.log(width);

let result = 'The area of the room is ';

let areaSquareMeters = length * width;
result += (areaSquareMeters).toFixed(1) + ' square meters (';

let areaSquareFeet = areaSquareMeters * SQUAREFEET_PER_SQUAREMETTER;
result += (areaSquareFeet).toFixed(2) + ' square feet).';

console.log(result);


// Further Exploration

// Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly and display it and its conversion in parentheses.

/*
Understanding
- input
  - unit
  - length in unit 
  - width in unit
- output
  - area in m2 
  - area in f2
- rules
  - 10.7639

Algorithm
  - prompt to get unit
  - prompt to get length / width

  - calc area in unit
  - convert 
    - sqfeet = sqmeters * 10.7639 
    - sqmeters = sqfeet / 10.7639 
  - log result
*/

// Print all odd numbers from 1 to 99, inclusive. Print all numbers on separate lines.

/*
Problem
  - input
    n/a

  - output
    - odd number [1,99], include 1 and 99
    - one number per line

Test Cases
  1
  3
  5
  7
  ...
  11
  13
  ...
  99

Algorithm
  - iterating from 1 ~ 99
    - log odd number ( number %2 === 1 )
*/


function oddNumbers_1 () {
  for (var i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

/*
Algorithm
  - iterating from 1 ~ 99, step = 2
    log index
*/
function oddNumbers_2() {
  for (var i = 1; i <= 99; i = i + 2) {
    console.log(i);
  }
}

//Further Exploration

//Repeat this exercise with a technique different from the one that you used and different from the one provided.
function oddNumbers_3() {
  let i = 1;
  while(i <=99) {
    console.log(i);
    i = i + 2;
  }
}


// Consider also adding a way for the user to specify the limits of the odd numbers displayed

/*
Problem
  - input
    total number displayed

  - output
    - odd number [1, 99], include 1 and 99
    - one number per line

Algorithm
  - iterating 1 ~ 99, step = 2
    - log index
    - break if hitting the count limit
*/

function oddNumbers (count) {
  let i = 1;
  let counter = 0;
  while(i <= 99 && counter < count) {
    console.log(i);
    i = i + 2;
    counter++;
  }

}

// Test Cases
oddNumbers(0); 
oddNumbers(1);
oddNumbers(5); // 1 3 5 7 9
oddNumbers(1000); // all from 1 - 99
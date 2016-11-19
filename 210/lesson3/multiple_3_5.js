/*
Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

multiplesOfThreeAndFive();

// output on console
3
5
6
9
10
12
15!
// ... remainder of output omitted for brevity

*/

// muptiple of 3
// muptiple of 5
// multiple of 3 and 5

function multiplesOfThreeAndFive_1() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0 ) {
      console.log(i);
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log(i);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + '!');
    } else {
      continue;
    } 
  }
}

function multiplesOfThreeAndFive_2() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0) {
      console.log(i);
    } else if (i % 5 === 0) {
      console.log(i);
    }  
  }
}


function multiplesOfThreeAndFive(min, max) {
  for (var i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0) {
      console.log(i);
    } else if (i % 5 === 0) {
      console.log(i);
    }  
  }
}
multiplesOfThreeAndFive(3, 21);
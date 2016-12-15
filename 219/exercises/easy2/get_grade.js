// Grade book

// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter value associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// Example:

// getGrade(95, 90, 93) // "A"
// getGrade(50, 50, 95) // "D"


/*
Understanding
- input
  - 3 number positive number [0-100]
- output
  - A letter according to average
*/

function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;
  if (average >=90 && average <= 100) {
    return 'A';
  } else if (average >=80 && average < 90) { // >= and < not <=
    return 'B';
  } else if (average >=70 && average < 80) {
    return 'C';
  } else if (average >=60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}



// Test cases
console.log(getGrade(0, 0, 0)); // F
console.log(getGrade(100, 100, 100)); // A
console.log(getGrade(80, 90, 70)); // B
console.log(getGrade(60, 70, 50)); // D
console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
console.log(getGrade(87.5, 64.5, 66)); // "C"


// Discussion

// The solution first computes average of the 3 scores. It gets the letter grade equivalent via a series of if statements using the problem specification.
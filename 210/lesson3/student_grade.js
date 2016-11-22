/*

Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

If the average score >= 90 => grade: A
If the average score >= 70 and < 90 => grade: B
If the average score >= 50 and < 70 => grade: C
If the average score < 50 => grade: F
You may assume that all input values are valid positive integers.


// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".
*/


// 3 scores
// prompt to input
// average

// 3 scores

// var score1 = Number(prompt('Enter score 1:'));
// var score2 = Number(prompt('Enter score 2:'));
// var score3 = Number(prompt('Enter score 3:'));
// var average = (score1 + score2 + score3) / 3;


// Our solution limits us to exactly three input scores. Modify it to accept any number of scores. To simplify matters, move the computation of the average into a function.

var count = 6;
var total = 0;

for (var i = 1; i <= count; i++) {
  total += Number(prompt('Enter score ' + i));
}

var average = total / count;

var message = 'Based on the average of your 3 scores your letter grade is ';

if (average >= 90) {
  message += '"A"';
} else if (average >= 70) {
  message += '"B"';
} else if (average >= 50) {
  message += '"C"';
} else {
  message += '"F"';
}

console.log(message);

/*
To simplify things, treat the program as three separate sub-problems:

Get the scores from the user.
Compute the average score.
Display the grade for the average score.
The first step needs to convert the user inputs, which are strings, to actual numbers. The final step needs to log the proper output string to the console.

Our solution limits us to exactly three input scores. Modify it to accept any number of scores. To simplify matters, move the computation of the average into a function.

*/
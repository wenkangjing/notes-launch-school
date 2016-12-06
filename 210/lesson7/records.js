// Exercise: Class Records Summary

// One of the things that faculty do at the end of term is to make a class record summary of students based on the weighted scores of exams and exercises.

// Exams and Exercises

// The grading areas are exams and exercises, with the following weight:

// Grading Area	Weight
// Exam	65%
// Exercises	35%
// Each standard term has 4 exams, and several exercises. Every exam has a fixed total possible score of 100. Exercises, on the other hand, have varying score values and count, but the total value of exercise values always add up to 100. For example, a given term may have 5 exercises with possible total scores of [30, 20, 10, 20, 20] while another term may have 3 exercises with possible total scores of [20, 30, 50].

// When determing a student's grade, we'll first get a student's average score from the 4 exams, then add up all the exercise scores to get a number (out of 100). Then we'll apply the weights to get a final score, and use the following table to get the letter equivalent:

// Percent Grade	Letter Equivalent
// 93 - 100	A
// 85 - 92	B
// 77 - 84	C
// 69 - 76	D
// 60 - 68	E
// 0 - 59	F
// Let's work through an example. For a term with 3 exercises of [20, 30, 50], a student got [90, 80, 95, 70] on her 4 exams, and [20, 15, 40] on her exercises. We'll go through the following steps to get her final score:












//
// score exam 100 (0.65), exercises(0.35) sum 100
//
//
//
//
//
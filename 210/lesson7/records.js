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


// 1. Student average exam score: (90 + 80 + 95 + 71) / 4 = 84;
// 2. Student exercise score: 20 + 15 + 40 = 75;
// 3. Apply weights to get the final score: 84 * .65 + 75 * .35 = 80.85,
//    and round to the nearest integer: 81
// 4. The student's final score is expressed as "81 (C)", after looking up in the table above.

// Source Data and Class Record Summary Format

// The source data is in the format of student id and scores:

// var studentScores = {
//   student1: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: []
//     },
//   },
//   student2: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: []
//     },
//   },
//   student3: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: []
//     },
//   },
//   studentN: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: []
//     },
//   },
// };


// The class record summary needs to be in the format of:

// {
//   studentGrades: [ '93 (A)', '81 (C)', '86 (B)', '100 (A)', '69 (D)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 }
//   ],
// }
// The exam averages should round to one digit after the decimal point.



// My Thinking

//
// 1 term = 4 exams + n * exercises
// score exam 100 (0.65), exercises(0.35) sum 100
//
// grade
//    precentGrade = 0.65 * average of 4 exams + 0.35 * sum of exercise
//    
//     letterGrade = map to letter equivalent
//
// output:
//    studennts' precentGrad (letterGrad) in array
//    average, min, max of 4 exams in array   
//
// process
//    grade -> map
//    exam -> map
//
//


var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // grades
  var studentGrades = Object.keys(scores).map(function(student, index){
    return generateGrade(scores[student].scores);
  });

  // exam summary fixme
  var examsSummary = Object.keys(scores).map(function(student, index){
    return generateExamSummary(scores[student].scores.exams);
  });

  return {
    'studentGrades': studentGrades,
    'exams': examsSummary
  };
};

// input array of exams
// output object that contains averyage, min, max
// not group by student, group by exams
function generateExamSummary(exams) {
  var sum = 0;
  var min = Infinity;
  var max = -Infinity;
  exams.forEach(function(exam) {
    sum = sum + exam;
    min = Math.min(exam, min);
    max = Math.max(exam, max);
  });

  return {
    'average': Math.round(sum / 4),
    'minimum': min,
    'maximum': max
  };
}

function generateGrade(scores) {
  var examsSum = scores.exams.reduce(function(sum, element) {
    return sum + element;
  }, 0);

  var exercisesSum = scores.exercises.reduce(function(sum, element) {
    return sum + element;
  }, 0);

  var grade = Math.round(examsSum / 4 * 0.65 + exercisesSum * 0.35);

  return String(grade) + ' (' + gradePrecentToletter(grade) + ')';
}

function gradePrecentToletter(number){
  if (number >= 93 && number <= 100) {
    return 'A';
  } else if (number >= 85 && number <= 92) {
    return 'B';
  } else if (number >= 77 && number <= 84) {
    return 'C';
  } else if (number >= 69 && number <= 76) {
    return 'D';
  } else if (number >= 60 && number <= 68) {
    return 'E';
  } else if (number >= 0 && number <= 59) {
    return 'F';
  } else {
    return 'n/a';
  }
}

generateClassRecordSummary(studentScores);



// returns:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
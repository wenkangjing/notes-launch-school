/*
printOddNumbers(19);

//output on console
1
3
5
7
9
11
13
15
17
19
*/

// odd
function printOddNumbers(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

printOddNumbers(19);
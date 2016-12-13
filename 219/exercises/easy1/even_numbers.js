/*
Print the even numbers from 1 to 99, inclusive. Print all numbers on separate lines.

Understanding
- input no
- output 
  - even number 
  - 1 -99 include 1 and 99

Test Cases
  2
  4
  6
  8
  10
  ..
  ..
  98

Algo
  - iterating from [2 - 99), step = 2
    - log index
*/

function evenNumbers() {
  for (var i = 2; i < 99; i++) {
    console.log(i);
  }
}
evenNumbers();
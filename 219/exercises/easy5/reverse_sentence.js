// Reverse It Part 1

// Write a function that takes one argument, a string, and returns the same string with the words in reverse order.

/*

Understanding
- input
  - a string

- output
  - reverse the words
  - word-level reverse

? question
  ? space as separater. yes


Algorithm
- split sentence by space to an array of words  
  - reverse and join by space  

*/
function reverseSentence(sentence) {
  let words = sentence.split(' ');
  return words.reverse().join(' ');
}



// Examples:

console.log(reverseSentence(''));                     // ''
console.log(reverseSentence('Hello World'));          // 'World Hello'
console.log(reverseSentence('Reverse these words'));  // 'words these Reverse'


/*
Buggy Solution
This is a buggy version of the solution for this exercise. You may try looking for the bug(s) first as an extra challenge.
function reverseSentence(string) {
  return string.split('').reverse.join('');
}
Hide Solution & Discussion
Solution

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}
Discussion

The solution uses the String and Array methods of String.prototype.split() and Array.prototype.reverse(). The split method converts the string argument into an Array. The reverse method returns the elements in reverse order. Finally, it joins and consequently returns it. The main thing to be wary for this is the delimiter used for splitting the string.
*/
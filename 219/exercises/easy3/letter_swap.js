// Letter Swap

// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces.



/*
understanding
- input
  - a string of word
  - separated by spaces
    - one or more 


- output
  - a new string
    - with all word swapped

- assuming
  - words and space
  - at least one word


Algorithm
wrong: separator is not consistent- split by one or multiple  space. regex
loop string
  - find word
   - loop word array in each iteration
     - reverse word and push to new array
- return join 


Abstraction
 - reverse string

*/







function reverse(string) {
  return string.split('').reverse().join('');
}


// Examples:

swap('a word with   more than    one space   ')
swap('Oh what a wonderful day it is');    // 'hO thaw a londerfuw yad ti si'
swap('Abcde');                            // 'ebcdA'
swap('a');                                // 'a'
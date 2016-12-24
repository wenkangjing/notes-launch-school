/*

A garland word is one that starts and ends with the same N letters in the same order, for some N greater than 0, but less than the length of the word. I'll call the maximum N for which this works the garland word's degree. For instance, "onion" is a garland word of degree 2, because its first 2 letters "on" are the same as its last 2 letters.

Write a function that takes one argument of a word, and return its garland word degree.

*/

/*

Understanding
- input
  - a string 
    - word
    ? alphabic /y
    ? '' / not a poosible
    - one letter return 0

- output
  - a number
    - garland word degree    

- rules
  - degree
    - 0 and word lenght/N
    - number of duplicated substring 
      - start with
      - end with
    - in the same order

Data Structure
- Array
- string

Algorithm
- loop the array, at each iteration, i [0, lenght - 1), exclusively
  - get sub string [0-i] inclusively
  - get sub string [-i-end] inclusively ?
  - i = 0: o ?= n   > 0
  - i = 1: on ?= on > degree substring length // max
  - i = 3: onio ? = nion  > 0
- degree is the max equal substring length

Abstraction
- 

*/

function garland(word) {
  let degree = 0;

  for (var i = 1; i < word.length; i++) {
    let left = word.slice(0, i);
    let right = word.slice(-i);

    if (left === right && left.length > degree) {
      degree = left.length;
    }
  }
  
  return degree;
}


// Examples

garland('onion') // 2
garland('axyza') // 1
garland('abbab') // 2
garland('xxxxx') // 4
garland('aaa') // 2


// Edge cases
garland('a') // 0
garland('aa') // 1






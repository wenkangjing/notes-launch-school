// All Substrings

// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the previous exercise:

/*

Understanding
- input
  - a string
- output
  - an array
    - ALL possible substrings
    - in order of starting char
      all substring start at index 0
      all substring start at index 1
      ...
        - from shortest to longest


Algorithm
- result  []
- convert string to array
- looping the array, at each iteration 
    - substrignAtStart() i - end
    - push to result

*/


function substrings_1(string) {
  let result = [];
  string.split('').forEach(function (char, index, array) {
    substringsAtStart(array.slice(index).join('')).forEach(function (substring) {
      result.push(substring);
    });
  });
  console.log(result);

}

// simplify
function substrings_1(string) {
  let result = [];
  string.split('').forEach(function(char, idx){
     let array = substringsAtStart(string.slice(idx));
     result = result.concat(array); // concat need to reassign to take effect
  });

  console.log(result);
}

// without result to holding the array
function substrings(string) {
  return string.split('').map(function (char, idx) {
    return  substringsAtStart(string.slice(idx))
  }).reduce(function (result, leadingSubStrings) {
    return result.concat(leadingSubStrings);
  }, []);
}


function substringsAtStart(string) {
  let result = string.split('').map(function (value, index, array) {
    return array.slice(0, index + 1).join('');
  });
  return result;
}


// Examples:
console.log(substrings('abcde'));

// result
// [ 'a', 'ab', 'abc', 'abcd', 'abcde',
//   'b', 'bc', 'bcd', 'bcde',
//   'c', 'cd', 'cde',
//   'd', 'de',
//   'e' ]






// Hide Solution & Discussion
// Solution

// function substrings(string) {
//   return string.split('').map(function(char, idx) {
//     return substringsAtStart(string.substring(idx));
//   }).reduce(function(result, array) {
//     return result.concat(array);
//   });
// }

// function substringsAtStart(string) {
//   return string.split('').map(function(char, idx, stringArray) {
//     return stringArray.slice(0, idx + 1).join('');
//   });
// }
// Discussion

// With the help of the substringsAtStart function written earlier, the shape of the problem becomes a combination of transformation and reduction. The solution transforms each substring of the string argument passed starting from the first index (0) to an array using the substringsAtStart function. It reduces the result of the transformation into one array by concatenating each array together.

// If it weren't for the use of the substringsAtStart function, this problem could've easily become much more complicated to wraps our head around.
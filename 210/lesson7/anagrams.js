// Exercise: Anagrams

// Write a Function that, when called with a word and a list of possible anagrams, selects the correct sublist that contains the anagrams of the word.

// For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets".

// Examples



// input: word, list of candidates
// output: same char set, in any order

// filter by length return array of same length as word
// map to a array with sorted word as key

// my solution
function anagram(word, list) {
  var result = list.filter(function(candidate) {
    return areAnagram(word, candidate);
  });
  return result;
}

// function areAnagram(word, candidate) {
//   if (word.length !== candidate.length) {
//     return false;
//   }

//   var sortedWord = word.split('').sort().join('');
//   var sortedCandidate =  candidate.split('').sort().join('');

//   if (sortedWord === sortedCandidate) {
//     return true;
//   } 

//   return false;  
// }

// after hint
function areAnagram(word, candidate) {
  var wordLetters = stringToSortedLetters(word);
  var candidateLetters = stringToSortedLetters(candidate);
  return compareArrays(wordLetters, candidateLetters);
}


function stringToSortedLetters(string) {
  return string.split('').sort(function(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every(function(letter, index) {
    return letter === array2[index];
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));  // [ "enlist", "inlets" ]



// Thinking in Abstractions
// You should recognize that the general "shape" of the problem is a filter - we'll be getting a subset of words, the ones that are anagrams, from an array of words. Therefore, our solution probably is going to be structured like this:

// function anagram(word, list) {
//   return list.filter(function(candidate) {
//     return areAnagrams(candidate, word);
//   });
// }
// The areAnagrams function would be a natural abstraction that would tell us if two words are anagrams. How do we decide if two words are anagrams? One approach is that we split the words into letter arrays, then sort those arrays, we can then compare if the two arrays are identical (have the same length and identical elements).

// function areAnagrams(source, target) {
//   var sourceLetters = stringToSortedLetters(source);
//   var targetLetters = stringToSortedLetters(target);
//   return compareArrays(sourceLetters, targetLetters);
// }

// function stringToSortedLetters(string) {
//   // convert a string to an array of sorted letters
// }

// function compareArrays(array1, array2) {
//   // compare two arrays
// }
// Solution
// function anagram(word, list) {
//   return list.filter(function(candidate) {
//     return areAnagrams(candidate, word);
//   });
// }

// function areAnagrams(source, target) {
//   var sourceLetters = stringToSortedLetters(source);
//   var targetLetters = stringToSortedLetters(target);
//   return compareArrays(sourceLetters, targetLetters);
// }

// function stringToSortedLetters(string) {
//   var letters = string.split('');
//   return letters.sort(function(a, b) {
//     if (a < b) {
//       return -1;
//     } else if (a > b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }

// function compareArrays(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   return array1.every(function(letter, index) {
//     return letter === array2[index];
//   });
// }
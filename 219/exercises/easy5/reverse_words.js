// Reverse It Part 2

// Write a function that takes one argument, a string containing one or more words, and returns the given string with all five or more letter words reversed. Each string will consist of only letters and spaces. Include spaces only when more than one word is present.

/*


Understanding
- input
  - a string
    - 1 - * words
    - space as separator  

- output  
  - a string
     - with >= 5-char words revsersed


*/

function reverseWords(sentance) {
  let words = sentance.split(' ');
  let reversed = [];
  words.forEach(function(word) {
    if (word.length >= 5) {
      reversed.push(reverse(word));
    } else {
      reversed.push(word);
    }
  });

  let result = reversed.join(' ');
  console.log(result);
  return result; 
}


function reverse(string) {
  return string.split('').reverse().join('');
}





// Examples:

reverseWords('Professional');          // lanoisseforP
reverseWords('Walk around the block'); // Walk dnuora the kcolb
reverseWords('Launch School');         // hcnuaL loohcS



/*
210 - Small ProblemsEasy 5Reverse It Part 2
Reverse It Part 2

Write a function that takes one argument, a string containing one or more words, and returns the given string with all five or more letter words reversed. Each string will consist of only letters and spaces. Include spaces only when more than one word is present.

Examples:

reverseWords('Professional');          // lanoisseforP
reverseWords('Walk around the block'); // Walk dnuora the kcolb
reverseWords('Launch School');         // hcnuaL loohcS
Hide Solution & Discussion
Solution

function reverseWords(string) {
  var stringArray = string.split(' ');
  var reversed = [];
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= 5) {
      reversed.push(stringArray[i].split('').reverse().join(''));
    } else {
      reversed.push(stringArray[i]);
    }
  }

  return reversed.join(' ');
}
Discussion

This version of the reverse it exercise is a little bit more involved. It still splits the string argument input but then needs to loop through each of the split words to reverse the word only if needed.

At every iteration, it checks if the length of the word is 5 or more; if it is, it reverses the word using the same approach as the previous reverse it exercise but with a different delimiter. It then pushes it to the reversed array. If the word is less than 5 characters, it pushes it into the array as is.

At the end of the loop, the reversed array is joined with a space () and consequently returned.
*/
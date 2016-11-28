// Repeated Characters

// Implement a function that takes a string as an argument and 
// returns an object containing the count of repeated characters.

// Note that the repeatedCharacters function is not just about counting the numbers of times a character repeats. 
// It counts and returns only the characters that have a count of 2 or more. 
// Also, it ignores cases when counting characters.

// case insensitive
function repeatedCharacters_1(string) {
  var repeated = {};
  var char = '';
  for (var i = 0; i < string.length; i++) {
    char = string[i].toLowerCase();
    if (repeated[char]) {
      repeated[char]++;
    } else {
      repeated[char] = 1;
    }
  }
  for (var count in repeated) {
    if (repeated[count] === 1) {
      delete repeated[count];
    }
  }
  return repeated;
}

// Because the function is case insensitive, the first thing we can do in the function is to turn all letters of the string parameter to lower cases. The next step would be iterating over each character. At every iteration, check if the character key exists already. If it does increment the value for it by 1; otherwise add it and set its value to 1.

// After tallying all the count of characters, get only the keys that have a value greater than 1 and return it.

// There are two ways to do this:

//You can use Object.keys() to get an array of existing keys on the object. From there you can see if the array contains a key you want to check.
//You can use the bracket notation to try to access the key's value. If it's undefined, then it means the key doesn't exist on the object.

function repeatedCharacters(string) {
  var result = {};
  var lowerCaseString = string.toLowerCase();

  for (var i = 0; i < lowerCaseString.length; i++) {
    if (result[lowerCaseString[i]] !== undefined ) {
      result[lowerCaseString[i]] += 1;
    } else {
      result[lowerCaseString[i]] = 1;
    }
  }

  for (var key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
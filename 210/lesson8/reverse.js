// Reverse a String
// Implement a function that takes a string as an argument and returns it in reverse.

// Examples


function reverse_raw(string) {
  var reversed = '';

  for (var i = string.length - 1; i >= 0 ; i--) {
    reversed += string[i];
  }

  return reversed;
}

function reverse_trick(string) {
  return string.split('').reverse().join('');
}


console.log(reverse_trick('hello'));               // returns "olleh"
console.log(reverse_trick('The quick brown fox')); // returns "xof nworb kciuq ehT"

// You could either try an iterative loop through the string (from the back to the beginning) and build up a new string, or a more high level solution to split the string to an array, and rely on the array's reverse method to reverse the characters, before joining them back to form a new string.
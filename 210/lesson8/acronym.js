// Acronym

//Write a function to generate acronyms based on a given string. For example, for "Portable Network Graphics", the program should return "PNG". Count compound words (words connected with a dash) as separate words.

function acronym_1(string) {
  return string.split(' ').map(function(item) {
    return firstLetter(item);
  }).join('');
}

function firstLetter(word) {
  return word.split('-').map(function(item) {
    return item[0].toUpperCase();
  }).join('');
}


// The shape of this problem follows that of transformation. Given a set of words we will transform it to its initials only or the capitalized first letter of each word.

//However, note in the description the criteria for the consideration of what a word is. It suggests that the string provided has to be cleansed or normalized first. The regex function using String.prototype.replace() will be useful in doing this. The intention is to make sure that when we process the string, convert it into an array of words, that compound words will be parsed as individual words.


// alternative using regex
// replace - to space, treat compound words as separated words
function acronym(string) {
  let words = string.replace(/-/g, ' ').split(' ');
  
  let initials = words.map(function(item) {
    return item[0].toUpperCase();
  });

  return initials.join('');
}

// use regex can avoid nested loop

console.log(acronym('Portable Network Graphics'));                 // "PNG"
console.log(acronym('First In, First Out'));                       // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));               // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));   // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                // "HTML"



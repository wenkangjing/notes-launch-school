// Madlibs

// Madlibs is a simple game where you create a story template with blanks for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.

// Example

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!

/*

Understanding
- input
  - prompt to 4 strings
    - noun
    - verb
    - adj
    - adv
- output
  - a story
  - template: Do you {verb} your {adj} {noun} {adv}? That's hilarious!
  \ 

Algorithm
- prompt to get user input - assume that input are valid
- get a story template if there is some, concat to a story


*/


let noun = prompt('Enter a noun: ').toLowerCase();
let verb = prompt('Enter a verb: ').toLowerCase();
let adj = prompt('Enter an adjective: ').toLowerCase();
let adv = prompt('Enter an adverb: ').toLowerCase();

let template = 'Do you {verb} your {adj} {noun} {adv}? That\'s hilarious!';
// could be many other template e.g. ''

let story = template.replace('{verb}', verb).replace('{adj}', adj).replace('{noun}', noun).replace('{adv}', adv);

console.log(story);


// var noun = prompt('Enter a noun:');
// var verb = prompt('Enter a verb:');
// var adjective = prompt('Enter and adjective:');
// var adverb = prompt('Enter an adverb:');

// var sentence1 = 'Do you ' + verb + ' your ' + adjective + ' ' + noun + ' ' + adverb + '? That\'s hilarious!';
// var sentence2 = 'The ' + adjective + ' ' + noun + ' ' + verb + 's ' + adverb + ' over the lazy dog.';
// var sentence3 = 'The ' + noun + ' ' + adverb + ' ' + verb + 's up ' + adjective + ' Joe\'s turtle.';

// console.log(sentence1);
// console.log(sentence2);
// console.log(sentence3);
// Discussion

// In this exercise, the solution makes use of the prompt() method to get inputs from the user. It then constructed the madlibs sentence by concatenating together the existing words with the input. The main challenge for this exercise is in joining together the different strings. It is easy to make the mistake of lacking a space or inadvertently converting a variable to a literal string.
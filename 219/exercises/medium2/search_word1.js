// Search Word Part 1

// Write a function that takes a word and text as inputs and returns the number of times the word appears in the text.

// Example:

// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

// searchWord('sed', text);   // 3








































// Hide Solution & Discussion
// Solution

// function searchWord(word, text) {
//   var regex = new RegExp(word, 'gi');
//   return text.match(regex).length;
// }
// Discussion

// The solution uses a RegExp object that can take a variable as input and converts it into a regex pattern. Once it gets the pattern, it searches for the word in the text using the String.prototype.match() method. This returns an array of the words coming from the text that match pattern. Finally, the searchWord function returns the length of the array of words.

// Further Exploration

// The current solution matches the word even if it is just a part of the whole word. For example, when searching for qui in the text it would also return quia as a match.

// Example

// searchWord('qui', text);   // should only return 4, NOT 13
// Hint: If you haven't figured it out yet, check out this link.
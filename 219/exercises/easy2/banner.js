// Bannerizer

// Write a function that will take a short line of text, and print it within a box.

// Example:

// printInBox('To boldly go where no one has gone before.');
// will print on the console:
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// printInBox('')
// +--+
// |  |
// |  |
// |  |
// +--+


/*

Understanding
- input 
  - a short line of text
    - a single line
    - assume that no text wrap
- output
  - 5 rows
    - row 0: border +  --- + border
    - row 1: space
    - row 2: border + left padding + string + right padding + border
    - row 3: border + space + border 
    - row 4: border ---
  - x columns
    - x = 1 + 1 + text.length + 1 + 1 


Algorightm
- width = 4 + text.length
- heigth = 5
- log line by line by calling

Abstraction
- generateString
  - input: char, repeats
  - generated string

- wrap
  - input: text, wrap char
  - output: wrapped string
*/

function printInBox_1 (text) {
  let dashLine = wrap(generateString('-', text.length + 2), '+');
  let spaceLine = wrap(generateString(' ', text.length + 2), '|');
  let contentLine = wrap(wrap(text, ' '), '|');

  console.log(dashLine);
  console.log(spaceLine);
  console.log(contentLine);
  console.log(spaceLine);
  console.log(dashLine);
}

// better name could be repeatChar
function generateString (char, repeat) {
  let repeats = '';
  for (let i = 0; i < repeat; i++) {
    repeats += char;
  }
  return repeats;
}

function wrap (text, wrapper) {
  return wrapper + text + wrapper;
}

// Solution
function printInBox_2(message) {
  var horizontalRule = '+' + repeatChar('-', message.length + 2) + '+';
  var emptyLine = '|' + repeatChar(' ', message.length + 2) + '|';

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log('| ' + message + ' |');
  console.log(emptyLine);
  console.log(horizontalRule);
}

function repeatChar(char, times) {
  var repeated = '';
  while (repeated.length < times) {
    repeated += char;
  }

  return repeated;
}

// Discussion

// To simplify matters, the solution starts out by creating two helper functions; horizontalRule and emptyLine. It makes use of the repeatChar function to add the appropriate count of hyphens (-) and spaces ( ) for our banner. The length of this space is the length of the message + 2 spaces. The spaces acts as padding between the left and right sides of the banner.

// Further Exploration

// Modify this function so it will truncate the message if it will be too wide to fit inside a standard specified window size. For a real challenge, try word wrapping very long messages so they appear on multiple lines, but still within a box.


/*
Algorithm
- given a max width

Abstraction
- wordWrapping
  - input
    - a long text
    - max width
- output;
  - array that contains multiple texts
  
*/

function wordWrapping (text, width) {
  let array = [];
  while (text.length > 0 ) {
    array.push(text.slice(0, width));
    text = text.slice(width);
  }
  return array;
}


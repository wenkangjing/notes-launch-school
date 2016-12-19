// Staggered Caps Part 2

// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters are still included in the return value; they just don't count when toggling the desired case.

// Example:

// staggeredCase('I Love Launch School!')     // 'I lOvE lAuNcH sChOoL!'
// staggeredCase('ALL CAPS')                  // 'AlL cApS'
// staggeredCase('ignore 77 the 444 numbers') // 'IgNoRe 77 ThE 444 nUmBeRs'



































// Hide Solution & Discussion
// Solution

// function staggeredCase(words) {
//   var needUpper = true;
//   var newChar;
//   return words.split('').map(function(char) {
//     if (char.match(/[a-z]/i)) {
//       if (needUpper) {
//         newChar = char.toUpperCase();
//       } else {
//         newChar = char.toLowerCase();
//       }

//       needUpper = !needUpper;
//       return newChar;
//     } else {
//       return char;
//     }
//   }).join('');
// }
// Discussion

// The main difference of this solution with the previous is the approach to determining whether it has to change a character's case. Instead of using the index position of the character it uses a switch, needUpper. It changes the value of the switch when a letter character case change occurred, otherwise it remains the same. Having this behavior allows the function to ignore the effect of passing over non-letter characters. As an impact of this, the solution delays the returning of the new character to only after it toggles the needUpper switch.
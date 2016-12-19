// Lettercase Counter

// Write a function that takes a string, and then returns an object that contains 3 properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and finally one representing the number of characters that are neither.

// Examples

// letterCaseCount('abCdef 123') // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef')   // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123')        // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('')           // { lowercase: 0, uppercase: 0, neither: 0 }































// Hide Solution & Discussion
// Solution

// function letterCaseCount(letters) {
//   var lowerArray = letters.match(/[a-z]/g) || [];
//   var upperArray = letters.match(/[A-Z]/g) || [];
//   var neitherArray = letters.match(/[^a-z]/ig) || [];
//   return {
//     lowercase: lowerArray.length,
//     uppercase: upperArray.length,
//     neither: neitherArray.length,
//   };
// }
// Discussion

// The solution uses the String.prototype.match() method to process the string argument. The method takes a regex pattern as an argument and returns an array of characters that matches the pattern. The first part of the function gets the array of matches for each case and assigns it to their respective variables. If it doesn't find any matches it sets the variable to the empty array ([]) so that calling the length property on it later won't throw an error. Following this, it returns an object with the value of each property set to the length of the corresponding array match for it (i.e lowercase property will have value of lowerArray.length)

// The solution uses regular expressions to count certain types of characters. We'll explain things a bit here for those who aren't familiar with regex:

// /[a-z]/g : This checks if the character is a lowercase letter between a and z.
// /[A-Z]/g : This checks if the character is an uppercase letter between A and Z.
// /[^a-z]/ig : This checks if the character is neither an uppercase letter nor a lowercase letter.
// g : Tells the regex engine to search the entire string.
// i : Tells the regex engine to ignore the case.
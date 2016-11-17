//
// https://launchschool.com/lessons/18c27076/assignments/0a12e3a8
// Operators and Conditionals
//

console.log("\n\nExercises: Operators and Conditionals");

var apples = 3;
var bananas = 5;

bananas = '3';

if (apples === bananas) {
  console.log('Strict Equal');
} else if (apples == bananas) {
  console.log('Equal');
} else {
  console.log('Not strictly equal :(');
}

console.log('--- === ---');
apples = 3;
bananas = 3;
var areEqual = apples === bananas;
console.log(areEqual);


console.log('--- || ---');

apples = 3;
bananas = 1;

console.log(apples || undefined);


var eitherOr =  apples || bananas;
console.log(eitherOr);

var eitherOr =  bananas || apples;
console.log(eitherOr); 

console.log('--- ternary operator ---');
var lastName = 'wen';
var familyMessage = (lastName == 'Wen') ? 'yes' : 'no';
console.log(familyMessage);

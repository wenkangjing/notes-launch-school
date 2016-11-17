//
// https://launchschool.com/lessons/18c27076/assignments/ece2ce42
// Primitive Types and Type Coercion
//

console.log("\n\nExercises: Primitive Types and Type Coercion");

var x = '13';
var y = 9;

console.log("Number + String = String");
console.log(x + y);

console.log("Number + Number = Number");
console.log(Number(x) + y);
console.log(parseInt(x, 10) + y);

console.log("Number * String = Number");
console.log(x * y);
console.log('abc' * 2);

console.log("Combine 3 numbers to tele number")
var npa = 212;
var nxx = 555;
var num = 1212;

console.log(npa + nxx + num);

console.log(String(npa) + String(nxx) + String(num));

console.log(npa.toString() + nxx.toString() + num.toString());

npa += '';
nxx += '';
num += '';
console.log(npa + nxx + num);

var bool = true;
console.log(bool);
console.log(bool.toString());

var arr = [1, 2, 3];
console.log(arr); // as array
console.log(arr.toString()); // as string

//
// https://launchschool.com/lessons/18c27076/assignments/492016f3
// Exercises: Variables and Numbers
//

console.log("Exercises: Variables and Numbers");

console.log("---arithmetic---");
var numerator = 10;
var denominator = 2;
var answer =  numerator / denominator;
console.log(answer); 

console.log("---increment---");
var incrementer = 1;
var start = incrementer;
console.log(start);

incrementer += 1; // self-addition notation
incrementer += 1;
incrementer += 1;
console.log(incrementer);

incrementer++; // postfix increment
incrementer++;
console.log(incrementer);

console.log("---undefined---");
var end;
console.log(end);
var difference;
console.log(difference);

console.log("---assignments---");
end = incrementer;
console.log(end);

difference = end - start;
console.log(difference);


console.log("---arithmetic ---");
answer = (11 + 31) * 3;
console.log(answer);
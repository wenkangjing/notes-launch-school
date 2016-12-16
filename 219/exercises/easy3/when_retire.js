// When Will I Retire

// Build a program that displays when the user will retire and how many years the user has to work till retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2016. You will retire in 2056.
// You have only 40 years of work to go!



/*
Understanding

- input 
  - age number
  - retired age number

- output
  - how many years

*/

let currentAge = parseInt(prompt("What is your age?"), 10);
let retiredAge = parseInt(prompt("At what age would you like to retire?"), 10);

let currentYear =(new Date()).getFullYear();

let msg = 'It\'s now ' + currentYear + '. ';
msg += 'You will retire in ' +  (currentYear + (retiredAge - currentAge)); 

console.log(msg);

msg = 'You have only ' + (retiredAge - currentAge)  + ' years of work to go!';
console.log(msg);

// Approach/Algorithm

// Use the Date object of JavaScript

// Solution

// var age = prompt('What is your age?');
// var retirementAge = prompt('At what age would you like to retire?');

// var today = new Date();

// var currentYear = today.getFullYear();
// var workYearsToGo = retirementAge - age;
// var retirementYear = currentYear + workYearsToGo;

// console.log('It\'s ' + currentYear + '. You will retire in ' + retirementYear + '.');
// console.log('You have only ' + workYearsToGo + ' years of work to go!');

// Discussion

// The solution makes use of the Date object. It uses the Date.prototype.getFullYear() method that returns the year value of the Date object that created. Note that there is also Date.prototype.getYear() method available in the Date object that returns a 2-3 digit representation of the year instead.

// With the use of the getFullYear() method, the solution gets the currentYear and adds to it the number of workYearsToGo. It then computes the value of workYearsToGo by subtracting from the desired retirementAge the current age.

// Notice the use of \ to escape the single quote ' in line 10. The solution needs this since it encloses the string in single quotes ('). An alternative would have been to enclose the string in double quotes (").

// Further Exploration

// What will happen if the new keyword wasn't use in defining the today variable in line 4?
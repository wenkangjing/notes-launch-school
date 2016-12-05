//
// logical operations
// 

// (false && undefined); // false

// (false || undefined); // undefined

// ((false && undefined) || (false || undefined)); // undefined
// (undefined || false || undefined)
// (undefined)


// ((false || undefined) || (false && undefined)); // false
// (undefined || false)
// (false)


// ((false && undefined) && (false || undefined)); // false
// (false && undefined)
// (false)


// ((false || undefined) && (false && undefined)); // undefined
// (undefined && undefined)
// (undefined)



// ('a' || (false && undefined) || ''); // 'a'
// ('a' || false || '')
// ('a')


// ((false && undefined) || 'a' || ''); 
// (false || 'a' || '') // false && anything is false
// ('a' || '') // false || anything is anything
// ('a') // A || B A if !!a is true


// ('a' && (false || undefined) && ''); 
// ('a' && undefined && ''); // false || anything is anything
// (undefined && '') // `a` is true, continue evaluating
// (undefined)


// ((false || undefined) && 'a' && ''); // undefined
// (undefined && 'a' && '');
// (undefined) 


//
// Conditional Loop
//
 
// Review the code below. The program should log out numbers that are multiples of 3 between 0 and 10 (not included). Will the expected behavior happen? Why or why not?


// var i = 0; // should start with 1
// while (i < 10) { // should <= 10
//   if (i % 3 === 0) {
//     console.log(i);
//   } else {
//     i += 1; // increase outside else
//   }
// }

// It becomes an infinite loop because the value of i is never incremented. The expression (i % 3 === 0) will always be true and as such the else clause that contains the incrementer never gets executed. When using a while loop, you have to be wary about managing the variables involved with the iteration and the stopping condition. In the case of this exercise, i should have been incremented at every iteration.

//
// Multiplication Table
//

// The following program is expected to print a multiplication table for the numbers 1 up to 10. Read through the code. Will the given code produce the expected result? Why or why not?

function padLeft(num) {
  return num.toString().length <= 1 ? ' ' + num : num;
}

var row;

for (var i = 1; i < 10; i++) {  // <= 10 cause up to 10
  row = '';
  for (var j = 1; j <= 10; j++) { 
    row += padLeft(i * j) + ' ';
  }
  console.log(row + '\n');
}

//
// Selected Columns
//

// The getSelectedColumns function selects and extracts specific columns to a new array. Currently, it is not producing the expected behavior. Go over the function and the sample runs. What do you think is the problem?

function getSelectedColumns_wrong(numbers, cols) {
  var result = [];
  for (var i = 0, length = numbers.length; i < length; i++) { // dup name length
    for (var j = 0, length = cols.length; j < length; j++) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

function getSelectedColumns_rowwise(numbers, cols) {
  var result = [];
  
  for (var j = 0, colLength = cols.length; j < colLength; j++) {
    for (var i = 0, rowLength = numbers.length; i < rowLength; i++) {
      if (!result[j]) {
        result[j] = [];
      }
      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

function getSelectedColumns(numbers, cols) {
  var result = [];
  for (var i = 0, lengthOuter = numbers.length; i < lengthOuter; i++) {
    for (var j = 0, lengthInner = cols.length; j < lengthInner; j++) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}
// Given array of number arrays
var array1 = [[1, 2, 3], [4, 5 ,6], [7, 8 ,9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

console.log(getSelectedColumns(array1, [0]));     // [[1]]; expected [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]).toString());  // [[1, 4], [3, 6]]; expected [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 4]]; expected [[2, 2, 2], [3, 3, 3]]

// The intention for declaring the variable length is to save on the repetitive calls to the .length property. However, in the course of declaring the length variable for the second (inner) loop the length variable in the first (outer) loop got reassigned. This behavior is caused by the fact that "blocks" don't create their own scope in JavaScript. Even though there was a second variable declaration for length, it doesn't create a new variable. After hoisting, the two declarations become one and the same, effectively making the second a reassigment.

//  
// Counter 
// 

// There are two concepts that come into play here; one is hoisting and the second is function declaration.

//With regards to function declaration, the key thing to note is that it is similar to a variable declaration. A function declaration creates a variable with its name being the name of the function.

//For hoisting, remember that a function declaration gets moved together with its body; while for variables, only the variable declaration part gets moved.

//Finally, while both function and variable "declarations" are hoisted, it is functions that are hoisted first with the succeeding variable declaration with a similar name (i.e. counter) considered as duplicate.

//
// logger
//

function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

//The status variable on line 4 is debugging because of JavaScript's lexical scoping rules.

//The debugIt function creates a local variable called status and a function called logger. logger is an inner function with access to variables declared in its outer/parent function due to lexical scoping rules.



//
// Invoice
//

function invoiceTotal_rework(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

function invoiceTotal_good() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum + arguments[i]; 
  }
  return amount1 + amount2 + amount3 + amount4;
}

function invoiceTotal(items) {
  return items.reduce(function(sum, item) {
    return sum + item;
  }, 0);
}

invoiceTotal(20, 30, 40, 50);             // works
invoiceTotal(20, 30, 40, 50, 40, 40);     // doesn't work; how can you make it work?


//
// Product of Sums
//
//
// local vs global
//
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();

console.log(myVar);

// JavaScript uses lexical scope. This means that it determines the scope of a variable by the structure of the program. In this particular scenario, the program defines the myVar variable in two places. The first is outside of any function. In this instance it has a global scope. The second place is inside the someFunction function. Functions in JavaScript create a new scope - in this case it is a scope that is 'local' to the function. Furthermore, it also becomes an "inner" scope to the global "outer" scope.

// JavaScript uses lexical scope. This means that it determines the scope of a variable by the structure of the program. In this particular scenario, the program defines the myVar variable in two places. The first is outside of any function. In this instance it has a global scope. The second place is inside the someFunction function. Functions in JavaScript create a new scope - in this case it is a scope that is 'local' to the function. Furthermore, it also becomes an "inner" scope to the global "outer" scope.

// Going back, console.log(myVar) on line 9 prints This is global. This is because the myVar in line 1 and line 4 belong in different scopes; someFunction has its own, "local", scope and the myVar declaration done in its scope does not have an impact to an outer scope.Going back, console.log(myVar) on line 9 prints This is global. This is because the myVar in line 1 and line 4 belong in different scopes; someFunction has its own, "local", scope and the myVar declaration done in its scope does not have an impact to an outer scope.


//
// Shadowing
//

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// In this exercise there is only a slight change from the previous one. The console.log(myVar) is inside the function. Recall that the myVar variable is in both a global (line 1) and local (line 4) scope. Supposedly, variables in the global scope are accessible anywhere within the program. However, in this instance, JavaScript gives priority to the variable with the same name that is in a local scope. This type of behavior is called shadowing.



//
// Accessing Global
//
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();

console.log(myVar);

// The someFunction function changes the value of myVar when it gets reassigned a new value. This is because JavaScript variables at the global scope can be accessed and changed inside an inner scope.


// 
// Variable Lookup
//

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// When console.log tries to log the value of myVar it will start to check within its current scope for its value. If it doesn't exist, it will look at the next outer score and see if the variable exists at that scope. It will continue doing this until reaches the outer most (global) scope.

// Given the sample code, it goes up one scope level and logs the value 'This is global'.


//
// Accidentally Global
//

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// As with the previous exercise, JavaScript also does variable lookup when reassigning values. In line 2, since it isn't a variable declaration it does a lookup for the variable. Consequently, there is none even the outer scopes. When this happens, JavaScript binds it to be a "property" of the global object. This is "almost" the same as if myVar was globally declared.

//
// Pass by Value with Shadowing
//

var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// In JavaScript, parameters of a function are local to them. This means that the a inside of the function is a local variable to that function. As such, the addition of 10 to the value of a does not affect the global variable a.

//
// Passing Objects
//

var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// Recall that JavaScript is pass-by-value. In this exercise, the tricky part is understanding the "value" passed. For JavaScript, when passing "objects" (i.e arrays) the value is the reference to it. As such, when the program executes the statement b[2] += 7 on line 4 it actually executes it on the object pointed at by a in the outer scope since it a got a reference to it on line 7. Consequently, when it logs the value of a on line 8 it logs [1, 2, 10].

//
// Hoisting Variables
//

console.log(a);

var a = 1;

// Behind the scenes, the JavaScript interpreter performs many things, and one of them is Hoisting. To begin to understand this concept, let's dissect what happens during variable declaration.

// On line 3 the program assigns the value of 1 to the variable a. Dissecting this, there are actually two things happening: (1) it declares the variable a and (2) it assigns the value of 2 to it.

// With this we can now define hoisting. First, the JavaScript interpreter doesn't "immediately" execute code line by line. It goes over the code first to find and associate variable declarations with their appropriate scope. Visually, this is as if JavaScript moves ("hoists") the variable declaration to the top of its scope. The assignment operation is not hoisted.

//Here is the code after hoisting:

var a;
console.log(a);

a = 1;

//Given this new code, it becomes apparent that the program logs undefined on line 2 since the assignment to 1 has not yet occurred.


//
// Hoisting Functions
//

displayValue();

function displayValue() {
  console.log('Hello, world!');
}

// Recall in the previous exercise that hoisting is the process of finding and associating variable declarations with their respective scope prior to the execution of all other code. Just like it hoists variables, the JavaScript interpreter also hoists function declarations. However, unlike the way it hoists variables, it hoists entire function declarations including the code blocks. This means that the program can execute functions even before declaring it.

// Here is the code after hoisting for your reference:

function displayValue() {
  console.log("Hello, world!");
}

displayValue();
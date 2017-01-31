function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName || '';
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  }
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane');

console.log(john.fullName());              // "John Doe"
console.log(jane.fullName());              // "Jane"

john.constructor;             // function Person(..)
jane.constructor;             // function Person(..)

console.log(john instanceof Person);       // true
console.log(jane instanceof Person);       // true


Person('John', 'Doe');
// global run in node, window run in browser
console.log(window.fullName());          // "John Doe"


//------------------------------------------------------------------------------
// Exercise 1
//
// Write a constructor function Circle that takes a radius argument that can create circle objects. You should be able to call an area on the created objects to get a circle's area. Test your implementation with the following code:

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return this.radius * this.radius * Math.PI;
}

var a = new Circle(3);
var b = new Circle(4);

console.log(a.area().toFixed(2)); // 28.27
console.log(b.area().toFixed(2)); // 50.27

//------------------------------------------------------------------------------
// Exercise 2
// What will the following code log out and why?

// function Ninja(){
//   this.swung = true;
// }

// var ninja = new Ninja();

// Ninja.prototype.swingSword = function(){
//   return this.swung;
// }
// console.log(ninja.swingSword());

// Even though the swingSword method is defined on the prototype after the ninja object is created, the prototype chain lookup happens when the swingSword method is called on the object, and it can be found.



//------------------------------------------------------------------------------
// Exercise 3
//What will the following code log out and why?

// function Ninja(){
//   this.swung = true;
// }

// var ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   }
// }

// console.log(ninja.swingSword());

/*
Uncaught TypeError: ninja.swingSword is not a function
In this case, we didn't add a new method to the constructor function's prototype object, but rather made it point to a different object. The ninja object, meanwhile, still inherited from the original object, therefore it couldn't find a swingSword method anywhere on its prototype chain.
*/


//------------------------------------------------------------------------------
// Exercise 4

// function Ninja(){
//   this.swung = false;
// }

// var ninjaA = new Ninja();
// var ninjaB = new Ninja();

// // Add a swing method to the Ninja prototype which
// // returns itself and modifies swung
// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// };

// console.log(ninjaA.swing().swung)      // this needs to be true
// console.log(ninjaB.swing().swung)      // this needs to be true

/*
This pattern of "chainable" method invocation on an object requires methods defined on the prototype to always return the context object (in this case, ninjaA and ninjaB).
*/


//------------------------------------------------------------------------------
// Exercise 5

// In this exercise, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
var ninjaB = Object.create(ninjaA);

// use the constructor function
//var ninjaB = new ninjaA.constructor();

console.log(ninjaB.constructor === ninjaA.constructor)    // this should be true
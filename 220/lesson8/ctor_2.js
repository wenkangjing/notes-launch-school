//------------------------------------------------------------------------------
// Exercise 1
// Create an object called shape that has a type property and a getType method.
// Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have three own properties: a, b and c representing the sides of a triangle.
// Add a new method to the prototype called getPerimeter.
// Test your implementation with the following code:

var shape = {
  type: "shape",
  getType: function() {
    return this.type;
  }
};

var Triangle = function(a, b, c) {
  this.type = "triangle";
  this.a = a;
  this.b = b;
  this.c = c;
};
Triangle.prototype = shape; // delegate object
Triangle.prototype.constructor = Triangle; // constructor

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};

var t = new Triangle(1, 2, 3);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 6
t.getType();                   // "triangle"

// One hard part of this exercise is to set the constructor to the proper value. Typically, this is done for you automatically, in that a function's prototype object will automatically have a property constructor pointing to the function. However in this case, since we pointed the Triangle function's prototype to shape, we lost that constructor reference. Therefore we have to set it back manually.



//------------------------------------------------------------------------------
// Exercise 2

// Since a constructor is just a function, it can be called without the new keyword, and this can lead to unexpected results and errors especially for inexperienced programmers.

// Write a constructor function that can be used with or without the new keyword, and return the same result in either form. Use the code below to check your solution:

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');

console.log(name);        // Jane Doe
console.log(user1.name);   // John Doe
console.log(user2.name);   // John Doe

// In the constructor function, first check this to see if it is an instance of the constructor function. If it's used as a regular function (invoked without the new), invoke itself with the new keyword and return the result. If it's used as a constructor function, run the rest of the code in the function.
// Constructor functions built this way are called "scope-safe constructors". Most of JavaScript's built-in constructors, such as Object, Regex and Array, are scope-safe.

//------------------------------------------------------------------------------
// Exercise 3

// Create a function that can create an object with a given object as its prototype, without using Object.create.

// My proposal
// function createObject(obj) {
//   var Result = function() {};
//   Result.prototype = obj;
//   Result.prototype.constructor = createObject;
//   return new Result();
// }

// solution
function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

var foo = {
  a: 1,
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);         // true


//------------------------------------------------------------------------------
// Exercise 4

// Similar to the exercise above, create a begetObject function that you can call on any object to create an object inherited from it:

Object.prototype.begetObject = function() {
  function F() {};
  F.prototype = this;
  return new F();
};

var foo = {
  a: 1,
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true

// Since the begetObject function can be called on any object, we'll need to make it a function defined on Object.prototype.



//------------------------------------------------------------------------------
// Exercise 5

// Create a function neww, so that it works like the new keyword:

// my proposal
function neww(constructor, args) {
  var obj = {};
  constructor.apply(obj, args);
  obj.__proto__ = Person.prototype;
  Person.prototype.constructor = constructor;
  return obj;
}

// solution
function newww(constructor, args) {
  var object = Object.create(constructor.prototype);
  var result = constructor.apply(object, args);

  object.constructor = constructor;
  return result === undefined ? object : result;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
}

var john = newww(Person, ['John', 'Doe']);
john.greeting();          // Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}
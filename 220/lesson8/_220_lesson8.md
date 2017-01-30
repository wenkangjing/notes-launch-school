Object Creation Patterns
==========================

# 1	Factory Functions

```js
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName || '',
    fullName: function() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}

var john = createPerson('John', 'Doe');
var jane = createPerson('Jane');

john.fullName();        // 'John Doe'
jane.fullName();        // 'Jane'

```


# 2	Exercises: Create Objects with Factory Functions

Guard Clause of the object as argu

```js
function createPayment(services) {
  services = services || {};
}
```

# 3	Constructor Functions

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName || '';
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  }
}

Person('John', 'Doe');
window.fullName();          // "John Doe"

var john = new Person('John', 'Doe');
john.fullName();

```

`new`

1. A new object is created
2. `this` in the function is pointed to the new object
3. the code in the function is executed
4. `this` is returned if there's not an explicit return

# 4	Objects and Prototypes

`__proto__`
(pronounced "dunder proto", "dunder" is a portmanteau for "double underscore"), that points to another object. 

`Object.create`
When we use the Object.create method to create an object, it can set the `__proto__` property of the created object to an object passed in:

`var bar = Object.create(foo);`
- foo object is the prototype object of the bar object, or, 
- object bar is created with object foo as its prototype.
- foo/var like base class vs derived class

```js
var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.__proto__ === foo;                  // true
```

- `Object.getPrototypeOf(obj)` to get the prototype object of obj
- `obj.isPrototypeOf(foo)` to check if obj is the prototype object of foo

prototype chain

```js
var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

Object.getPrototypeOf(qux) === baz;       // true
Object.getPrototypeOf(baz) === bar;       // true
Object.getPrototypeOf(bar) === foo;       // true

foo.isPrototypeOf(qux);                   // true - because foo is on qux's prototype chain
```
Object.prototype;
- The Object.prototype object is at the end of the prototype chain for all JavaScript objects
- like CBase

# 5	Prototypal Inheritance and Behavior Delegation

Prototype Chain Lookup for Property Access
- When we try to access a property or a method on an object, JavaScript searches not only in the object itself, but all the objects on its prototype chain, until the end is reached. 

Prototypal Inheritance and Behavior Delegation
- JavaScript's prototype chain lookup for properties gives us the ability to store an object's data and behaviors not just in the object itself, but anywhere on its prototype chain. This is very powerful when we want to share data or behaviors:

- From a top down / design time point of view, the objects on the bottom of the prototype chain "inherited" the properties and behaviors of all the upsteam objects on the prototype chain;

- from a bottom up / run time point of view, objects on the bottom of the prototype chain can "delegate" requests to the upsteam objects to be handled. Hence this design pattern is also called Behavior Delegation.

Overriding Default Behavior
- Objects created from prototypes can override shared behaviors by defining the same methods locally:

`Object.getOwnPropertyNames` and `object.hasOwnProperty`
- The hasOwnProperty method on an object can test if a property is defined on the object itself
- The Object.getOwnPropertyNames method can return you an array of an object's own property names

Methods on Object.prototype
- The Object.prototype object is on the top of all JavaScript objects' prototype chain, therefore the methods defined there can be called from any JavaScript object. Here are 3 most useful ones:
  - `Object.prototype.toString()`: returns a string representation of the object
  - `Object.prototype.isPrototypeOf(obj)`: tests if the object is in another object's prototype chain
  - `Object.prototype.hasOwnProperty(prop)`: tests whether the property is defined on the object itself


# 6	Exercises: Prototypes and Prototypal Inheritance

`getPrototypeOf` vs `__proto__`
-- `getPrototypeOf` standard. The prototype of the given object. If there are no inherited properties, null is returned.
-- `__proto__` is a legacy feature


use `Object.create` instead of `setPrototypeOf`

use `for (var prop in object)` to loop all properties/metholds

`Object.assign`
 - copy object reference
 - The properties are overwritten by other objects that have the same properties later in the parameters order.
 - primitive 
 - symblo
 - non-enumerable cannot be copied

# 7	Constructors and Prototypes

- In JavaScript, every function has a special prototype property.
- A function's prototype property is only useful when the function is used as a constructor

Objects created from a Function share the same prototype object.

```js
var Foo = function() {};
var Qux = function() {};

Foo.__proto__ === Foo.prototype;                // false
Object.getPrototypeOf(Foo) === Foo.prototype;   // false

Qux.__proto__ === Qux.prototype;                // false
Object.getPrototypeOf(Qux) === Foo.prototype;   // false

var bar = new Foo();
Object.getPrototypeOf(bar) === Foo.prototype;   // true

var baz = new Qux();
Object.getPrototypeOf(Qux) === Qux.prototype;   // true
```
# 8	Exercises: Constructor Functions and Prototypes (1)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

know difference bwteen `Object.prototype` and `Function.prototype`

# 9	Exercises: Constructor Functions and Prototypes (2)

# 10	The Pseudo-classical Pattern and the OLOO Pattern

# 11	Assignment: Object Constructor Inheritance

# 12	More Methods on the Object Constructor

# 13	Douglas Crockford Lecture: JavaScript the Good Parts

# 14	Project: Array and Object Utility Library

# 15	Project: Guess a Word, Part 1: Structure and Styles
# 16	Project: Guess a Word, Part 2: Core Functions
# 17	Project: Guess a Word, Part 3: Event Handling and Game Play
# 18	Project: Guess a Word, Part 4: OLOO Pattern Solution
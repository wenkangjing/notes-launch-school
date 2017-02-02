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

Victor reply:

```
Hi Jamie. Agree with you completely that this isn't an easy topic to grasp. For the article/reference I mostly use the MDN articles on this and just read their documentation. Here is my attempt at clarifying things for you =).

First off, .__proto__ exists for any object. It is not unique to the function creation way. Your mental model of it is ok. To be more accurate, I'd position it is a "pointer to the object that it delegates to". In JS, the objects don't inherit from "parent objects"; they delegate. It is not recommend to use this property. Use Object.getPrototypeOf instead.

.prototype is a property that exists for Functions. The property points to an object that "objects" created using the constructor function delegate to. The default value is an empty object (i.e. Foo {}).

.prototype is set when a function is used as constructor function (called with the new keyword).

.constructor is a property of the .prototype object.
  As a property, .prototype can be re-assigned. When it is reassigned the .constructor property also changes (You will this getting re-set in one of the assignments)

"whereas constructor pointing from prototype back to the function constructor." --> I'm not sure what you mean by this.

Object.create creates a new object that delegates to the object that is passed in as an argument. You are correct it does not have .prototype and consequently .constructor.

I'm not sure if my above statements have helped you. Sorry, if it hasn't. If you'll notice, though, I use the words "object" and "property" to discuss the terms. For me, the main difference of the two is the object to which it delegates to. The constructor function approach delegates to the Function.prototype object while the Object.create delegates to the Object.prototype object. Thinking of it this way, simplifies it for me because now I just need to think of the methods and properties that becomes available depending on the object that is delegated to. Finally, as you've pointed out, Function.prototype delegates to Object.prototype, and this is probably why there is a layer of indirection that gets added (via .prototype property of a function).

Personally, I prefer to use the Object.create approach. It feels more natural to use when using "native" JS. However, when working with Libraries/Frameworks built on JS, the Constructor approach seems more prevalent as far as those that I have seen/used.

If you have a specific topic/point that is confusing, we could focus on that more.
```


what happens when use **new** to create an object
- use neww(constructor, args) to replace built-in new
- assuming the return value is `obj`, then:
1. `obj's constructor property` need to point to the `constructor function`
2. `obj's __proto__ property` needs to point to `construction function's prototype`
3. the `constructor function` needs to be called with obj as its context to mutate the obj object.

# 10	The Pseudo-classical Pattern and the OLOO Pattern

object creation patterns
- Pseudo-classical Pattern 
- the OLOO (Object Linking to Other Object) Pattern

Considerations
- Be able to have their own **states**
- Share *8behaviors**,

object literal form 

```js
var pointA = {
  x: 30,
  y: 40,

  onXAxis: function() {
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin:  function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },
};

pointA.distanceToOrigin();      // 50
pointA.onXAxis();               // false
pointA.onYAxis();               // false
```

The Pseudo-classical Pattern
- constructor function set **state**
- constructor function's prototype put shared **behaviors**

```js
var Point = function(x, y) {            // capitalized constructor name as a convention
  this.x = x || 0;                      // initialize states with arguments
  this.y = y || 0;                      // 0 as default value
};

Point.prototype.onXAxis = function() {  // shared behaviors added to constructor's prototype property
  return this.y === 0;
}

Point.prototype.onYAxis = function() {  // these methods are added one by one
  return this.x === 0;
}

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

var pointA = new Point(30, 40);     // use new to create objects
var pointB = new Point(20);

pointA instanceof Point;            // use instanceof to check type
pointB instanceof Point;

pointA.distanceToOrigin();          // 50
pointB.onXAxis();                   // true
```

## The OLOO Pattern
- use `Object.create`
- use `.init` to set **state**

```js
var Point = {                       // capitalized name for the prototype as a convention
  x: 0,                             // default value defined on the prototype
  y: 0,

  onXAxis: function() {            // shared methods defined on the prototype
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin:  function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init: function(x, y) {          // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  },
};

var pointA = Object.create(Point).init(30, 40);
var pointB = Object.create(Point);

Point.isPrototypeOf(pointA);        // use isPrototypeOf to check type
Point.isPrototypeOf(pointB);

pointA.distanceToOrigin();          // 50
pointB.onXAxis();                   // true
```

## Object Oriented JavaScript Pattern Comparison

https://john-dugan.com/object-oriented-javascript-pattern-comparison/

#### what happen when define `function F() {}`
- `F.prototype` points to an object, and `F.prototype.constructor = F`. It is actually a roundabout. 
- `F.__proto__` is `Object.prototype`

#### what happen when call `new F()`
- create an new `object` 
- `object.constructor = F`
- `object.__proto__ == F.prototype`
- `F.call(object)`


#### The new Keyword in JavaScript

When the new keyword is placed in front of a function call, four things happen:

- A new object gets created by the constructor function.
- The new object gets linked to a different object.
- The new object gets bound as the this keyword within the constructor function call.
- If the constructor function does not return a value, JavaScript implicitly inserts return this; at the end of the constructor function’s execution.

#### factory pattern
- a factory function called, createCar, createPerson, createShape...
- Type Determination, all Object
- Cons: Methods created on the factory function are copied to all new object instances. This is inefficient.

#### constructor pattern
- **state and methods** are in Constructor Function
- add type check, alert(johnCar.constructor === Car); // true
- upper case Constructor Function 
- Cons: still copied to all new object instances

#### Combination Constructor/Prototype Pattern 
- **state** in Constructor Function
- **methods** in Constructor.prototype
- Constructor.prototype is shared among instances/objects
- Because constructor is simply a default property on all prototypes, it gets removed when you replace the prototype with a new object. If you wish to assign a new object to a prototype and maintain the constructor relationship, you will need to recreate the constructor property and assign it the proper value 
- Cons: long list of Constructor.prototype.func

#### Dynamic Prototype Pattern
- store **methods** in Constructor.prototype
- code **methods** in Constructor
- encapsulates all information within a constructor
- has the benefits of both unique instance properties and shared prototypal properties and methods.

```js
function Car(make, model, year) {
  this.make   = make;
  this.model  = model;
  this.year   = year;

  // constructor prototype to share properties and methods
  if ( typeof this.sayCar !== "function" ) {
    Car.prototype.sayCar = function() {
        alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');    
    }
  }
}

```

#### OLOO Pattern
- [In the OLOO Pattern] there are just pure objects that delegate to one another.
- a uppercase object
- Object.create new ones
- then initialize
- no constructor, can't call instanceof 

```js
var Car = {
    init: function(make, model, year) {
        this.make   = make;
        this.model  = model;
        this.year   = year;        
    },
    sayCar: function() {
        alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');    
    }
};

var johnCar = Object.create(Car);
johnCar.init('Ford', 'F150', '2011');

```

#### Parasitic Constructor Pattern
- Constructor: create a new Object, add state, add methold, then return it
- is useful in situations where you want to abstract and encapsulate code in a safe way,

```js
function SpecialArray() {
    // create the array
    var values = new Array();

    // add the values
    values.push.apply( values, arguments);

    // assign the method
    values.toPipedString = function() {
        return this.join(' |');
    };

    // return it
    return values;
}

// create a new [special] array for colors
var colors = new SpecialArray(' red', 'blue', 'green');
alert(colors.toPipedString()); // ' red | blue | green'
```

#### Durable Constructor Pattern
- The this keyword is never used on constructor methods.
- The new keyword is never called before the constructor.

# 11	Assignment: Object Constructor Inheritance
- prototype must be a object **pointing to the object that delegated to**
- prototype.constructor must be a function
- prototypal inheritance 
  - modify properteis and methods on prototype object, not the constructor function 

![Prototypal Inheritance](./constructor_inheritance.png)

# 12	More Methods on the Object Constructor

Object.create() and Object.getPrototypeOf()
- Array.prototype === Object.getPrototypeOf([]) // true

```js
function NewArray() {}

NewArray.prototype = Object.create(Object.getPrototypeOf([]));
NewArray.prototype.first = function() {
  return this[0];
}

var newArr = new NewArray(),
var oldArr = new Array();

oldArr.push(5);
newArr.push(5);
oldArr.push(2);
newArr.push(2);
console.log(newArr.first());           // 5
console.log(typeof oldArr.first);      // undefined
```


Object.defineProperties()
- to create read-only properties/methods

```js
var obj = {
  name: 'Obj'
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});

console.log(obj.age); // 30
obj.age = 32;
console.log(obj.age); // 30
```

```js
function newPerson(name) {
  return Object.defineProperties({ name: name }, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false,
    },
  });
}

function newPerson(name) {
  // ...
}

var me = newPerson('Shane Riley');
me.log();     // Shane Riley
me.log = function() { console.log("Amanda Rose"); };
me.log();     // Shane Riley
```

Object.freeze()
- prevent anything from being changed about an object
- if you freeze an object, it can not be unfrozen.
- For property values that are objects, the references to the objects are frozen, so you can't point to other objects, but you can still use the frozen references to mutate the objects.


# 13	Douglas Crockford Lecture: JavaScript the Good Parts

Now you can watch the lecture from about 22 minutes to the 30 minutes on object creation.

https://www.youtube.com/watch?v=hQVTIJBZook

Inheritance
- classical
- prototypal

#### prototypal Inheritance
- class free, no classes
- objects inherit from objects
- An object contains a link to another object, call **delegation**, `__proto__`
  - newObject = Object.create(oldObject)
  - newObject.__proto__ is oldObject

```js
if (tyoepf Obejct.create !== 'function') {
  Object.create = function(0) {
    function F() {};
    F.prototype = o;
    return new F();
  };
}
```
#### new operator
- absolutely required when calling a Constructor function
- without new, global is the context
- no warning

#### global
- avoid global variables
- move variables to function - function scope
- cons: everytime function get called, need to init variables

#### Closure
- a function returns another function
- the outer function execute immediately 
- the inner function still can access the variables in outer function scope, even the outer function has returned

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

https://lostechies.com/derekgreer/2012/02/17/javascript-closures-explained/

#### Module Pattern

```js
var singleton = function() {
  // private varible
  var privateVariable = 0; 

  // private function, can be accessed in this object only
  function privateFunction() {
    privateVariable++;
  }

  // public section
  return {
    firstMethod: function() {
      privateVariable++;
    }, 
    secondMethod: function() {
      privateFunction();
      return privateVariable;
    }

  }
}(); // make it called immediately
```


#### Power Constructors
- to hide internal implementation

1. make a object
  - Object literal `var obj = {bala}`, or
  - new
  - Object.create
  - call another power constructor

2. define some properties and Functions
  - private members


3. privileged // public, can access private members


4. return the object


```js

function myPowerConstructor() {
  // created object
  var that = {};

  // private section
  var lastId = 0;
  var secret = function() {
    console.log("I am a private function", lastId++);
  }
  
  // public function
  that.priv = function () {
    that['one'] = 1;
    that['two'] = 2;
    secret();
  };
  return that;
}
```


# 14	Project: Array and Object Utility Library

 TDD
 - unit test
 - implementation


utility library 
- `_`

if prop exist in object
- prop in obj // true/false
- obj[prop] // undefined or value

convert arguments to Array
- [].slice.call(arguments)
- Array.prototype.slice.call(arguments)

check type
- toString.call([]) === "[object Boolean]";

primitive vs object
- boolean vs Boolean
- string vs string
- 123 vs Number


# 15	Project: Guess a Word, Part 1: Structure and Styles

pixel in DevTool
- with prop selected in stale tab
- up/down 1px 
- shift up/down 10px

prop order in css
- position
- display
- width/height/top/left
- padding/margin
- font/text-decoration
- border
- background


animation change background

```
body.win {
  animation: win 3s;
}

@keyframes win {
  0% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #0066cc;
  }
}

```


# 16	Project: Guess a Word, Part 2: Core Functions
# 17	Project: Guess a Word, Part 3: Event Handling and Game Play
# 18	Project: Guess a Word, Part 4: OLOO Pattern Solution
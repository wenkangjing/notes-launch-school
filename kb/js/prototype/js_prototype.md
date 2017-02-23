[Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

[You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)

# Class-based vs. prototype-based languages

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#Class-based_vs._prototype-based_languages

`__proto__`
(pronounced "dunder proto", "dunder" is a portmanteau for "double underscore"), that points to another object. 

`Object.getPrototypeOf(obj)` is equivalent of `obj.__proto__`

`AFunction.__proto__ === Function.prototype`

## class-based 

Class-based object-oriented languages, such as Java and C++, are founded on the concept of two distinct entities: **classes and instances.**

A class 
- defines all of the properties (considering methods and fields in Java, or members in C++, to be properties) that characterize a certain set of objects. 
- A class is an abstract thing, rather than any particular member of the set of objects it describes. 
- For example, the Employee class could represent the set of all employees.

An instance, 
- the instantiation of a class; that is, one of its members. 
- For example, Victoria could be an instance of the Employee class, representing a particular individual as an employee. An instance has exactly the same properties of its parent class (no more, no less).

In class-based languages, you typically create a class at compile time and then you instantiate instances of the class either at compile time or at run time. You cannot change the number or the type of properties of a class after you define the class.

## prototype-based

A prototype-based language, such as JavaScript, does not make this distinction: 
- it simply has objects. 
- a prototypical object, an object used as a **template** from which to get the initial properties for a new object. 
- Any object can specify its own properties, either when you create it or at run time.
- any object can be associated as the prototype for another object, allowing the second object to share the first object's properties.

In JavaScript, however, at run time you can add or remove properties of any object. If you add a property to an object that is used as the prototype for a set of objects, the objects for which it is the prototype also get the new property.


## Creating the hierarchy
```
        Employee
      /          \
Manager        WorkerBee
                 /      \
        SalesPerson    Engineer
```

```js
function Employee() {
  this.name = "";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}

WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
   WorkerBee.call(this);
   this.dept = "sales";
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
   WorkerBee.call(this);
   this.dept = "engineering";
   this.machine = "";
}
Engineer.prototype = Object.create(WorkerBee.prototype);

```




`class` in ES6
- the class keyword is introduced in ES6, but is syntactical sugar, 
- JavaScript remains prototype-based


JavaScript objects 
- are dynamic "bags" of properties (referred to as own properties)
- have a link to a prototype object. 

protytype chain


property shadowing


function
- JavaScript does not have "methods" in the form that class-based languages define them.
- any function can be added to an object **in the form of a property**
- An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of method overriding).


Object.create vs Function Constructor

- First off, `.__proto__` exists for any object. It is not unique to the function creation way. Your mental model of it is ok. To be more accurate, I'd position it is a **"pointer to the object that it delegates to"**. In JS, the objects don't inherit from "parent objects"; they delegate. It is not recommend to use this property. Use Object.getPrototypeOf instead.
- `.prototype` is a property that exists for Functions. The property points to an object that "objects" created using the constructor function delegate to. The default value is an empty object (i.e. Foo {}).
- `.prototype` is set when a function is used as constructor function (called with the new keyword).
- `.constructor` is a property of the `.prototype` object.
  - As a property, `.prototype` can be re-assigned. When it is reassigned the `.constructor` property also changes (You will this getting re-set in one of the assignments)
- "whereas constructor pointing from prototype back to the function constructor." --> I'm not sure what you mean by this.
- `Object.create` creates a new object that delegates to the object that is passed in as an argument. You are correct it does not have .prototype and consequently .constructor.


"scope-safe constructors"

```js
function User(first, last){
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}
```

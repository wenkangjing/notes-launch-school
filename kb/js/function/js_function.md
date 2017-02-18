this
===========

# How is the function invoked?

https://rainsoft.io/gentle-explanation-of-this-in-javascript/

# 1. What is `this`

`this` is the current execution context of a function

# 2. Method vs function

In javascript every function is an object. An object is a collection of key/value pairs. 
- If a value is a `primitive`, or another object, the value is considered a `property`. 
- If a value is a `function`, it is called a `method`.

A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:

- A method is implicitly passed the object on which it was called.
- A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).

# 3. Terms

**Invocation** is executing the code that makes the body of a function (simply calling the function). For example parseInt function invocation is parseInt('15').

**Context** of an invocation is **the value of `this` within function body**.

**Scope** of a function is a set of variables, objects, functions accessible within a function body.

- function invocation: `alert('Hello World!')`
- method invocation: `console.log('Hello World!')`
- constructor invocation: `new RegExp('\\d')`
- indirect invocation: `alert.call(undefined, 'Hello World!')` `[].slice.call([1,2,3,4], 2)`

# 4. Functions Invocation

- `this` is the `global object` in a function invocation
- `undefined` in strict mode

Pitfall: `this` in an inner function

the context of the inner function depends only on invocation, but not on the outer function's context. 

To have the correct `this`:
- self
- call or apply
- bind



# 5. Method Invocation

A method is a function stored in a property of an object.

Method invocation requires a property accessor form to call the function 

`this` is the **object itself**

Pitfall: extract `method` into **a separated variable**

if the method is called without an object, then a function invocation happens: where this is the global object window or undefined in strict mode 


# 6. Constructor Invocation

`this` is the **newly created object** in a constructor invocation

Pitfall: create object without `new`, `this` is `global`



# 7. Indirect Invocation (immediately)

.call() or .apply()
- `func.call(context, arg1, arg2, arg3..)` or
- `func.apply(valueForThis, arrayOfArgs)`

# 8. Bind (not immediately)

 `.bind(obj, arg1, arg2, arg3)` create a bound function, usually used in
- in event callback
- end of function expression 

# 9. Arrow Function


`this` is the enclosing context where the arrow function is defined

The arrow function doesn't create its own execution context, but takes this from the outer function where it is defined. 

# Conclusion

**How is the function invoked?**

**where the arrow function is defined?**



# Examples

https://launchschool.com/lessons/2555bbbb/assignments/93b8b6af


IIFE
============

Immediately Invoked Function Expressions (IIFE, pronounced iffy)

```js
(function() {
    // Your awesome code here, suggested by Douglas Crockford 
}());
```

Any variables or functions defined within IIFE block are local to the block and it’s not possible for any code outside this scope to change them.

# Examples

```js
// a global var that can access in console without debug
var global_variable;

// IIFE function declairaton, to build up the global var
(function() {
  global_variable = {
    data: "bala",
    collection: [],
    foo: function() {

    },
    init: function() {

    },
  };
})();

// call when dom ready
$( global_variable.init.bind(global_variable));
```
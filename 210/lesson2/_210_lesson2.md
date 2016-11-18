Computational Functions and Variable Scope
===========================================

# 1	Defining Functions

- `function` to define a function
- no arg type declaration
- no return declaration, return `undefined` or the value that returned 

```js
function addtion(a, b) {
  return a + b;
}
```

- `Argument` 
  - is the value/variable/reference being passed in. C
  - when invoking a function

- `Parameter` 
  - is the receiving variable used w/in the function/block
  - when defining a function

# 2	Function Invocations and Arguments
# 3	Exercises: Functions

- Calling a Function with `too few arguments` does not raise an error.
- Within a Function, an argument that wasn't provided in the call will have the value `undefined`.
- The `NaN` result is caused by the fact that b is `undefined`; it isn't a direct result of the missing parameter. It is merely JavaScript's standard behavior when a number and undefined are added.
- Such excess arguments are merely ignored.


# 4	Nested Functions
# 5	Functional Scopes and Lexical Scoping

## Scope 

## Lexical scoping

hierarchy: from the local scope of the code up to the program's global scope.

search: this hierarchy from the bottom to the top. 

stop: It stops and returns the first variable it finds with a matching name. 

This means that variables in a lower scope can shadow, or hide, a variable with the same name in a higher scope.


> inner function has access to the variables of outer functions and so can use the variable name declared in the parent function.

## Closures

[Closures MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

> A closure is a special kind of object that combines two things: a function, and the environment in which that function was create
>
>In other words, these functions 'remember' the environment in which they were created.

A closure lets you associate some data (the environment) with a function that operates on that data


# 6	Hoisting 

- hoists only variable declarations, not assignments. `var a = 1;` 
- hoists Function declarations to the top of the scope; 
- can declare a variable anywhere in a scope


without an explicit declaration, a becomes a property of the global object
- If JavaScript can't find a matching variable, it creates a new global variable instead. 

ReferenceError
- The ReferenceError object represents an error when a non-existent variable is referenced.
- JavaScript throws a `ReferenceError` exception if it can't find a variable anywhere in the scope hierarchy. `console.log(a);`



**Best Practice**

- Always declare variables at the top of their scope.
- lways declare functions before calling them:


# 7	Function Declarations and Function Expressions

hoist func declaration but not func expression

`var hello` is not a function

`function hello()` is a function

```js
  // Function Declarations
  function hello() {
    return 'hello world!';
  }

  // Function Expressions
  var hello = function() {
    return 'hello';
  }
```

>Though most function expressions use anonymous functions, named function expressions are useful for debugging; the debugger can display the function's name in the call stack. This can provide a valuable clue.

# 8	Exercises: Variable Scopes in JavaScript (1) 
ok

# 9	Exercises: Variable Scopes in JavaScript (2) 
[ ] pls review
[ ] read thru the answer, very helpful on how to clearly explaint code in a interview

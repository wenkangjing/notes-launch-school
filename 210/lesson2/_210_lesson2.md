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

# 6	Hoisting

# 7	Function Declarations and Function Expressions

# 8	Exercises: Variable Scopes in JavaScript (1)
# 9	Exercises: Variable Scopes in JavaScript (2)
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
[JavaScript Coding Style in LS](https://launchschool.com/lessons/56df7843/assignments/6350e31c)

# Formatting and Aesthetic

- var, function, property - camel case `myNumber` `myFunction`

- use one space before the leading curly braces

- use semicolon at the end of each statement

- one space after `if, for, while`

- Set off operators with spaces.

- No whitespace at the end of line or on blank lines.

- one var/let/const per variable

- Ternaries should not be nested and should generally be single line expressions.

- logical expression over ternary statement

- Leave a blank line after blocks and before the next statement.

- Use single quotes '' for strings.

- `var hasAge = !!age;`

- Never declare a function in a non-function block (if, while, etc).

- **JavaScript strings are immutable**, so don't try to mutate the original string. Instead, build a new string via concatenation.

# Best Practice

- avoid implicit
  - Always use explicit type coercions `parseInt, toString, Number(), String()`
  - Always use strict equality operators (=== and !==)

- Hoisting

  - Always declare variables at the top of their scope.
  - Always declare functions before calling them:
  - **always remember to convert code to after hoisting**

- declare
  - var to declare variable
  - function to declare function

- convert to boolean
```js
!!(null)       // false
!!(NaN)        // false
!!(0)          // false
!!('')         // false
!!(false)      // false
!!(undefined)  // false

!!('abc')      // true
!!(123)        // true
!!('true')     // true
!!('false')    // this is also true! All strings are truthy in JavaScript
```

- invalid 
```js

if (typeof a === 'undefined') // better, avoid ReferenceError declarated

if (a === undefined)  

``` 

# The good parts

... (spread)


# The bad parts


# How to

How to compare NaN
- Nan is not equal to NaN
- use `isNaN()`

How to terminate JS file
- `return` in file scope doesn't work 
- `throw new Error('error message')`

What is Fibonacci series
- The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
- the first 2 numbers are 1 by definition
- each subsequent number is the sum of the two previous numbers

Does compare by value or  by reference
- string is compare by value, 'abc' === 'abc'
- array and object is by reference 

What is the difference between `substring` `slice` `substr`
- all doesn't modify the original string

```js
string.slice(start, end) // can be negative
string.substr(start, length) // can be negative
string.substring(start, end) // can NOT be negative
//  slice() == substring()
```

Why forEach can't `brea` or `continue`?
- iterating till end
- early terminating need for loop


What are the differences between `toString()` vs `String()`
- can't call `toString()` againest `undefined` vs. `String(undefined)` is 'undefined'
- `(000).toString()` is '000' vs String(000) is '0'
- `String(0)` is '0'
- I would prefer `String()` over `toString()` as AirBnB JS Guide suggested

How to iterating objects
- iterating `Object.keys(myObj)` as array
- `for (var item in myObj)` item is key, myObj[item] is value

What array `shift` does?
- remove the first element
- return the removed element

How to provide default value to an array?
- using `||` at the end of expression
- the default value is an empty array
- `let lowercases = string.match(/[a-z]/g) || [];`


What is guard clause?
- if `word` is undefined
- or if `word` is empty string
```js
if (!word || word.length === 0) {
  return [];
}
```


How to compose RegExp pattern from variables?

```js
let word = 'abc';
let regex = new RegExp(word, 'ig');
```
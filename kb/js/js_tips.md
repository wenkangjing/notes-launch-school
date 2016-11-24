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
  - lways declare functions before calling them:
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


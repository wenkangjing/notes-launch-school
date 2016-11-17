JavaScript Basics
===============================


# 1	About This Course	completed

- Think procedurally and the bottom up, imperative solution expressions
- Think abstractly: and the top down, declarative solution expressions

# 2	JavaScript Versions

JavaScript = ECMAScript

Current specification standard is ECMAScript2015 = ECMAScript version 6 = *ES6*, we use *ES5* in this course

# 3	Resources
# 4	Running Your Code
# 5 Code Style

 - a wide array of style guides, 
 - LS: stick to a particular coding style to prevent confusion.

# 6	Data Types
# 7	More on Strings

- Primitive: `number, boolean, string, null, undefined` **values**
- compound data type: **objects**

>Take note that any variable that is declared but is not assigned a value will be initialized to the value undefined

## Numbers

- 64 bits (8 bytes)

- Double Precision Floats: occupies 8 bytes (64 bits) in computer memory and represents a wide, dynamic range of values by using a floating point.

- support the basic arithmetic operations
  - addition (+), subtraction (-), multiplication (*), and division (/).

> Floating point values cannot precisely represent values because of how the computer represents them. 
>
> Avoid fractional number, use smaller unit

```js
0.1 + 0.2;   // returns 0.30000000000000004, not 0.3!
```

- constants

  - Number.MAX_VALUE
  - Number.MAX_SAFE_INTEGER

  - Infinity: when you need a number that's greater than any other number
  - Infinity: when you need a number that's less than any other number
  - NaN: means "not a number." You will see NaN when a math function encounters an error.

## boolean

small case `true false`


## String

- no size limit and can contain any amount of text.
- single or double quote

### String - Special Characters

```
Code	Character
\n	New line
\t	Tab
\r	Carriage return
\v	Vertical tab
\b	Backspace
```

escape characters: \' \"

### String Concatenation

string as Primitive vs String as object

### Character Access

```js
'hello'.charAt(1); 
'hello'[1];
```

# 8	Primitive Values Are Immutable

- immutable: `number, boolean, string, null, undefined`

```js
a = 'hello';
a.toUpperCase();    // the "hello" string is not mutated, but a new "HELLO" string is returned
a;                  // still 'hello'
```

- mutable: objects like arrays and functions

# 9	Variables

- case-sensitive
- start with `letter or _ or $`

Dynamic Typing

```js
var myVariable = 'Hello, World'; // initialize to a string
myVariable = 23;                 // re-assign to a number
myVariable;                      // 23 // now the variable holds a number value
```

>A variable in JavaScript is just a name for **a particular value at a particular time**.

# 10	Operators

`a + b` operand operator operand

- Arithmetic Operators `+ - * / %`

- Assignment Operators `= += -+ *= /+ %=`
  - self-addition notation `+=`
  - postfix increments `i++`
  - prefix increments `i++`


- Comparision Operators `== !== === !== > <`
  - `===` operands are equal and of same type **strict equal**
  - `==` just equal

- String Operators **lexicographical**
  - **String comparisons use Unicode lexicographical ordering** 
  - '50' > '6' in a dictionary order, 5 is 

- Logical Operators `&& || !`. logical and, logical or, logical not


# 11	Expressions and Statements

- Arithmetic
- String
- Logical

Operator Precedence

Increment/Decrement

- prefix:   modify the operand then evaluate the expression
- postfix:  evaluate the expression then modify the operand

Logical Short Circuit
- `a || b` if a is true JavaScript short circuits the evaluation and returns true without evaluating b

Statement
- a declaration is a statement
- var b = (a = 1);        // this works, because assignments are expressions too
- `var c = (var a = 1);    // this gives an error, since a statement can't be used as part of an expression`


# 12	Input and Output

- prompt('bala')
- alert('bala')
- confirm('bala')
- console.log('bala')

# 13	Exercises: Variables and Numbers

# 14	Explicit Primitive Type Coercions 显示的原始类型转换

> convert "345" into the number 345. 
>
> We call such operations **coercions** or **conversions**

## String > Number

```js
Number('1');  // 1
Number('abc123');  // NaN

parseInt('123');       // 123
parseInt('123.12');    // 123, will only return whole numbers
parseFloat('123.12');  // 123.12, can handle floating point values
```

## Number > String

```js
String(123);     // "123"
String(1.23);    // "1.23"

(123).toString();      // "123"
(123.12).toString();   // "123.12"

123 + '';       // "123"
'' + 123.12;     // "123.12"
```
> **number + string = string**

## Boolean to String

```js
123 + '';       // "123"
'' + 123.12;     // "123.12"

true.toString();    // "true"
false.toString();   // "false"
```

## Primitives to Boolean

>The value passed as the first parameter is converted to a boolean value, if necessary. 
>
>If value is omitted or is `0, -0, null, false, NaN, undefined`, or the `empty string ("")`, the object has an initial value of false. 
> 
>All other values, including any object or the string "false", create an object with an initial value of true.

- Boolean()

```js
Boolean(null);        // false
Boolean(NaN);         // false
Boolean(0);           // false
Boolean('');          // false
Boolean(false);       // false
Boolean(undefined);   // false

Boolean('abc');       // other values will be true
Boolean(123);         // true
Boolean('true');      // including the string 'true'
Boolean('false');     // but also including the string 'false'!

```

- !! 
  - ! returns the opposite
  - !! returns boolean equivalent 


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


# 15	Implicit Primitive Type Coercions

https://launchschool.com/lessons/18c27076/assignments/f631d3c6

**buggy**

## binary plus: A + B 

- string concat: number to string
- number add: boolean to number

```js
1 + true       // 2) true is coerced to the number 1, so the result is 2
'4' + 3        // 43) 3 is coerced to the string "3", so the result is "43"
false == 0     // true) false is coerced to the number 0, so the result is true
```

## unary plus: +(A) 
- to number

```js
+('123')        // 123
+('')           // 0
+(null)         // 0
+('a')          // NaN
```

## arithmetic

```js
- true        // 0
'123' * 3       // 369 - the string is coerced to a number
'8' - "1"       // 7
```
## Relational Operators > < >= <=

- `to number` then value comarision
- `to string` then lexicographic order 

## Equality

- non strict equal **coerce before compare**
- strict equal **just compare**

>The strict operators never perform type coercions; the non-strict operators have a set of complex rules to coerce types before performing the comparison.

0 == false        // true

## Best Practice

- Always use explicit type coercions `parseInt, toString, Number(), String()`
- Always use strict equality operators (`=== and !==`)

# 16	Exercises: Primitive Types and Type Coercion



# 17	Conditionals
# 18	Exercises: Operators and Conditionals

ternary operator (三元 ? :)


# 19	Looping and Iteration

- while
- do...while // the loop body always executes at least once.
- break, continue,
- for `for (initialExpession; condition; incrementExpression)`
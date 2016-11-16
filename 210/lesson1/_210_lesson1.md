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

  Code	Character
  \n	New line
  \t	Tab
  \r	Carriage return
  \v	Vertical tab
  \b	Backspace

escape characters: \' \"


### String Concatenation

+

string as Primitive vs String as object


### Character Access

  ```js
  'hello'.charAt(1); 
  'hello'[1];
  ```


# 8	Primitive Values Are Immutable

- immutable: number, boolean, string, null, undefined


  ```js
  a = 'hello';
  a.toUpperCase();    // the "hello" string is not mutated, but a new "HELLO" string is returned
  a;                  // still 'hello'
  ```
- mutable: objects like arrays and functions

# 9	Variables



# 10	Operators



# 11	Expressions and Statements



# 12	Input and Output



# 13	Exercises: Variables and Numbers



# 14	Explicit Primitive Type Coercions


# 15	Implicit Primitive Type Coercions



# 16	Exercises: Primitive Types and Type Coercion



# 17	Conditionals



# 18	Exercises: Operators and Conditionals



# 19	Looping and Iteration
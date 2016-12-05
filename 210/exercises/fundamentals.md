Exercises: JavaScript Language Fundamentals
=============================================

[JavaScript Language Fundamentals](https://launchschool.com/exercises#javascript_language_fundamentals)

JavaScript Basics (10)
- string.slice
- 2 / 3 is float, use Math.floor to convert to int
- use key/value to simple the logic (mapping, convert)


Functions (10)
- hoisting var declaration 
- hoisting entire function declarations including the code blocks.

Array (10)
- by reference, how to copy values, `slice` or iterating to `push`
- splice **delete, insert**
  - start, 
  - deleteCount
  - new items

- [ ] `call` `apply`

- `string` is quite similar to `array`
  - know how to use `string split(''), join('')`
  - know how to use dump chars to array to use help solve problems, like `array reserve, slice, split, sort`

- `shift` (remove, move left) `unshift`(move right, insert) 

- `slice` `splice`

- comparasion is by reference not value

Objects(10)

- Literal
  - [varName] a variable, js convert it to string 
  - [''], must be a hardcode string
  - [aNumber], JS convert it to string, not index
  - obj.propName 

- Literal Method

> It is a shorthand for a function assigned to the method's name.

```js
var myName = {
  first: function() {
    return 'Victor';
  },
  last: function() {
    return 'Reyes';
  },
};
```
- `myName.first` returns the function definition
- `myName.first()` call the function which returns a string

- object can use `in` `delete` `keys`

- array is object, with positive integer including zero as keys
  - don't use `in` or `delete`

- `slice` 
  - behaves similarly to passing in a negative index.
  - method gets elements up to but not including the endingIndex

- `Data`
  - to initial a Date, 
  - `valueOf()` is equivalent to `getTime()`

Medium 1 (8)

- Logical Operation
  - Logical operators `||` and `&&` **don't always return boolean values**.

- hoisting var and function
 - functions that are hoisted first 
 - then variable declaration with a similar name considered as duplicate. (ignored)

- lexical scoping
 - logger is an inner function with access to variables declared in its outer/parent function due to lexical scoping rules.


Medium 2 (7)

The solutions lead to problems when one of the inputs is 0. This happened because 0 is falsy in JavaScript and therefore the value gets re-assigned. To work around this, 

> it's better to **explicitly test** whether the input arguments are undefined, instead of relying on them being falsy.

```js
function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;
  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}
```

array.length

- The key takeaway for this exercise is that the length property can be set (remember that arrays are 0-based). 
- Setting the length to a value that is **shorter** than the number of elements stored **truncates** the array; 
- re-setting to a higher value does not bring back the truncated elements. 
- Setting to a **higher** a value than the current length adds indices that have undefined as the value of the element.
- Furthermore, since the value of the length will always be equal to the last index + 1, even adding an element to index 2 of a 1 element array will make the length of the array be 3 even with only 2 of 3 index positions with a defined value.
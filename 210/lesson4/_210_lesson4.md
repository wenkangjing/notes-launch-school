# 1	Arrays

Definition: 
  - a list of values that are indexed by a non-negative integer value
  - **indexed collections**

Usage:
  - Iterating through the array and performing an action on each value. 
  - Accessing and manipulating specific elements of the Array.
  - **by index** 
  - **by bracket notation** 

Valid:
  - **Array.isArray**

```js
[] // an empty Array

[0, 1, 2] // an Array holding three values

[42, 'hello', false, [3, 5], [true, 'hello']] // Arrays can contain any other object
```

# 2	Exercises: Arrays

TypeError if `undefined.toString()`

# 3	Array Operations: push, pop, shift, and unshift

- JavaScript has an Array **global** object; 
- this object has something called a **prototype** object.

Observe whether the array argument is mutated or the function returns a new array

global ? prototype 

Array.prototype.push()
  - The push method appends values to an array.
  - modify the original array
  - return new length

Array.prototype.pop()
  - The pop method removes the last element from an array 
  - and returns that value to the caller.

Array.prototype.unshift()
- The unshift method inserts the given values to the beginning of an array-like object.
- **pushFirst**

Array.prototype.shift()
  - The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
  - **popFirst**

# 4	Array Operations: indexOf and lastIndexOf

Array.prototype.indexOf()

- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.


Array.prototype.lastIndexOf()
- The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.


# 5	Array Operations: slice, splice, concat, and join
# 6	Array Methods
# 7	Arrays and Operators
# 8	Exercise: Comparing Arrays
# 9	Exercises: Basic Array Uses
# 10	Exercises: Intermediate Array Uses
# 11	Exercise: Find Missing Numbers
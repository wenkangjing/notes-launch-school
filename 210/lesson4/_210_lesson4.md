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

Array.prototype.slice()

- returns a **shallow copy** of a portion of an array into a new array object 
- selected from begin to end (**end not included**). 
- The original array will not be modified.

Array.prototype.splice()
- changes the content of an array by removing existing elements and/or adding new elements.

- `splice(3, 1);` Remove 1 element from index 3
- `splice(2, 1, 'trumpet');` Remove 1 element from index 2, and insert "trumpet"
- `splice(0, 2, "parrot", "anemone", "blue");` Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
- `myFish.splice(-2, 1);` Remove 1 element from index -2 (index 2 from the end)

Array.prototype.concat()
- merge two or more arrays. 
- This method does not change the existing arrays, 
- but instead returns a new array.

Array.prototype.join()
-  joins all elements of an array 
- into one string.
- If an element is undefined or null, it is converted to the empty string.

# 6	Array Methods

- `push`: append to the end
- `pop`: take out the last one
- `unshift`, append to the beginning = `pushFirst`
- `shift`,  take out the first one = `popFirst` 
- `indexOf`, 
- `lastIndexOf`, 
- `slice`, not modify the original array, return a new array `[start, end]`, omitted end.
- `splice`, remove `[start, end]` from the original array, return a new array `[start, end]`, omitted end.
- `concat`, merge arrays to one bigger array
- `join`, join array element to one string 

# 7	Arrays and Operators

Arithmetic Operators
- these pointless operations run without producing a warning. This makes it easy for bugs to go undetected.

Comparison Operators

- compare 2 arrays
  - object comparation
  - not content comparation

- The two arrays are unequal since they are different arrays. They happen to contain the same values, but the arrays themselves are different objects. 

- The equality operators check whether the two arrays are the same array; they don't care if the arrays contain the same content.

Relational Comparison Operators 

- >, >=, <, and <= are useless with Arrays. 
- They return true or false in unexpected ways. 
- Don't use them with Arrays.

# 8	Exercise: Comparing Arrays
# 9	Exercises: Basic Array Uses
# 10	Exercises: Intermediate Array Uses

array[index out of range] returns `undefined`

slice() without parameters will return a copy of array

reverse() modify the original


# 11	Exercise: Find Missing Numbers
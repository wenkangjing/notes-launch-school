
List Processing and Functional Abstractions
============================================


# 1	Passing Function as Arguments

Functions are first-class values 
- can store it in variables and
- pass it as arguments to Functions. 


Passing Data as Arguments

> write a function to solve a specific problem, such as "iterate through an array and log out the elements", 

```js
function iterate(array) {
  for (var i = 0; i < array.length; i++) { // for each element in the Array
    console.log(array[i]);                 // print the element to the screen
  }
}

var count = [1, 2, 3, 4, 5];
iterate(count);

// prints
1
2
3
4
5
```

Passing Functions as Arguments

> write an abstraction, such as "iterate through an array and do something"

```js
function iterate(array, callback) {
  for (var i = 0; i < array.length; i++) { // for each element in the Array
    callback(array[i]);                    // invoke callback and pass the element
  }
}

var count = [1, 2, 3, 4, 5];
iterate(count, function(number) { console.log(number); });

// prints
1
2
3
4
5

```


Behavior as Arguments to Allow Abstractions

```js
// Data as arguments
function oddOrEven(array) {
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
}

// Behavior as arguments
function oddOrEven(array) {
  iterate(array, function(number) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}

// using built-in forEach instead
function oddOrEven(array) {
  array.forEach(function(number) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}
```

# 2	Declarative Programming with Abstractions

Imperative Style 命令式编程
- focus on **steps**

```js
var array = [1,2,3,4,5,6,7,8,9,10];
var newArray = [];

for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 === 1) {
    newArray.push(array[i]);
  }
}

console.log(newArray);
```


Imperative Style with Function Abstractions
- abstract functions to reuse
- push  **how to do** down to functions and focus on **what to do**  

```js
var array = [1,2,3,4,5,6,7,8,9,10];
var newArray = [];

for (var i = 0; i < array.length; i++) {
  if (isOddNumber(array[i])) {
    newArray.push(array[i]);
  }
}

console.log(newArray);

function isOddNumber(number) {
  return number % 2 === 1;
}

```

Iteration Focused Abstraction

```js
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];

array.forEach(function(element) {
  if (isOddNumber(element)) {
    newArray.push(element);
  }
});

console.log(newArray)

function isOddNumber(number) {
  return number % 2 === 1;
}


```

Filter Abstraction that Truly Reflects the Purpose

```js
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = array.filter(function(element) {
  return isOddNumber(element);
});

console.log(oddNumbers);

function isOddNumber(number) {
  return number % 2 === 1;
}
```

change

> create an new empty array, iterate through the original array and push the odd numbers into the new array, and log the new array to the console

to

>filter the original array to get odd numbers and log them on the console


Declarative Programming 声明式编程

- imperative programming often approach a problem imagining themselves as the computer – "I am going to do this first, then if this condition is true I do x, otherwise I do y.", "I need to use this variable to hold this value, then increment it as I go through this array". But obviously, we are more productive and happier thinking like humans than pretending to be computers.

- With JavaScript, the language provides a rich list of build-in list processing abstractions to allow you to program declaratively, and you can also build your own abstractions to push down the details of implementation, elevate your thinking, and have you code communicate its true intent.


# 3	List Processing Abstractions
Abstraction	| Used To	| Returns	| Array Methods 
------------|---------|---------|--------------
Iteration	| Perform an operation on each element in an Array | nothing | forEach
Filtering / Selection	| Limit to a subset of elements	| new Array |	filter
Transformation |	Compute a value for each element	| new Array |	map
Ordering |	Arrange elements by sorting	| new Array	| sort
Reducing / Folding	| Iteratively compute a result using each element	| single value	| reduce, reduceRight
Interrogation	| Determine if an Array's elements pass a test	| single value	| every, some


# 4	Iteration

forEach
- used for its side effects, instead of its return value
- `forEach` returns nothing
- `callback` has 3 parameters: `current`, `index`(optional), `array` optional
- `callback` return nothing

> There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool, use a plain loop instead. If you are testing the array elements for a predicate and need a Boolean return value, you can use every() or some() instead


# 5	Filtering / Selection

filter
- creating a **new Array** that contains a **subset** of an existing Array
- `callback` has 3 parameters: `current`, `index`(optional), `array` optional
- `callback` returns `true` to keep the element, `false` otherwise

# 6	Transformation

map
- creating a **new Array** containing the `callback`'s return values
- `callback` has 3 parameters: `current`, `index`(optional), `array` optional
- `callback`'s returned value become the elements in the new Array.

# 7	Reducing / Folding

reduce
- accumulator, each value of the array (from left-to-right) to reduce it to a single value.
- returns the accumulator (a single value) 
- `callback` 4 params: 
  - `previousResult`: The return value of the last callback  
  - `current`, 
  - `index`, 
  - `array`

> It is usually safer to provide an initial value 

> Note: If initialValue isn't provided, reduce will execute the callback function starting at index 1, skipping the first index. If initialValue is provided, it will start at index 0.

# 8	Interrogation

determine how many of an Array's elements satisfy a test.

`callback` 3 params
- `current`
- `index`
- `array`

every, like `all` in LINQ
- iterate over all the elements in the array until a `false` is returned, then immediately returns `false`
- returns `true` if the callback returns `true` for **all** of the elements in the original Array.


some, like `any` in LINQ
- iterate over all the elements in the array until a `true` is returned, then immediately returns `true`.
- returns `true` if the callback returns `true` for **at least one of** the elements in the original Array

# 9	Sort

- arrange the elements in an Array **in place**
- returns the sorted array.
- also mutates the array on which it's called
- `callback` 2 params `a, b`
  - return -1, a before b
  - return 0, unchanged
  - return 1, a after b

# 10	Combining Abstractions

var names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

Let`s say that our goal is to calculate which letter is at the beginning of most names in this list. We can break this problem down into steps:

1. For each name in the list, determine its first letter
2. Count how many occurrences there are of each letter
3. Find the letter with the largest number of occurrences

Step	| Result
------|-------
For each name in the list, determine its first letter	| Array of first letters
Count how many occurrences there are of each letter	| Object containing letters as keys and counts as values
Find the letter with the largest number of occurrences	| Letter with the largest number of occurrences.

Step	| Result	| Abstraction |	Array Method
------|---------|---------------|------------
For each name in the list, determine its first letter |	Array of first letters	| Transformation	| map
Count how many occurrences there are of each letter	| Object containing letters as keys and counts as values	| Reduction	| reduce
Find the letter with the largest number of occurrences	| Letter with the largest number of occurrences.	| Reduction	| reduce

# 11	Functional Abstractions on Objects

Iteration

`Object.keys(obj).forEach()`

Working with Keys or Values as Arrays


# 12	Exercise: Total Square Areas

area.js

# 13	Exercise: Processing Releases

release_data.js

`filter` to filter out falsy elements 

`reduce` to a single value

`map` to return a new array with modified value 

# 14	Exercise: Octal

octal.js
- know how number calculated
- 256 in dec means `2 * 10pow(2)` + `5 * 10pow(1)` + `6 * 10pow(0)`
- 256 in oct means `2 * 8pow(2)` + `5 * 8pow(1)` + `6 * 8pow(0)`
- 

# 15	Exercise: Anagrams

anagrams.js

- know how to use `every`
- know top to bottom to abstract functions

# 16	Exercise: Formatting Bands

formatting.js

- know input (dirty array of objects) and output (formatted array of  object) -> map
- loop element to format object 
  - country
  - capitalize name
  - remove dot

string.replace
- regex `string.replace(/\./g, '');`
- or subStr `string.replace('.', '');` 

mutate 
  - re-assign to object in map

side effect free
  - return a new object in map

  ```js
  return {
    prop0: 'value',
    prop1: 1
  };
  ```
# 17	Exercise: Class Records Summary

records.js

# 18	Don't Be Afraid to Use Low Level Abstractions

# 19	You've Already Known Some Functional Programming



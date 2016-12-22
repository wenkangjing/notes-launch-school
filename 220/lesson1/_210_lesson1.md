Function Contexts and Objects
===================================

# 1	Introduction

# 2	Code Style

https://launchschool.com/lessons/2555bbbb/assignments/0beede60

variable name
  -  snake case `this_is_the_snake_case`
    + primitives
    + objects
    + primitive properties in objects

  - camel case `thisIsTheCamelCase`
    - function
    - function properties in objects 

multiple variable

```js
var first_name = 'Shane',
    last_name = 'Riley';
```

# 3	The Global Object

> The global object is a special object that's created when the JavaScript environment starts. In the browser, the global object is the window object that includes all the JavaScript execution context.
>
>
> In non-browser JavaScript environments, such as Node, the global object is not window, but global, however it works the same as we explained here.
>

`window` in browser
  - global functions are properties of the global object
  - can append global functions dymatically

# 4	Object Orientation

> "**smart objects**" that can performance actions on the data that they own.

In prototype language, object with `data + function`

vs. 

In class language,   class with  `data + method`

`this`
- easy way to accesa data in the same object
- Inside a function, the value of this depends on how the function is called.
- `bind` in ES5, set `this` regardless of how it's called,
- `=>` in ES6, `this` is lexically scoped (it is set to the this value of the enclosing execution context).

first-class functions mean
- added to objects and execute in their contexts
- taken out of their objects, passed around and executed in entirely different contexts
- not bound to an object initially, but dynamically given a context to be executed in


# 5	Implicit and Explicit Function Execution Contexts
 
> binding of a function and a context object happens when the function is executed, not when the function is defined
>
> change a function's execution context (what the `this` keyword in functions points to) **when the function is executed**, with the `call` or `apply` method.


`func.call(context, arg1, arg2, arg3..)` or `func.apply(valueForThis, arrayOfArgs)`
- binding `this`to a function `context` which will be `this` inside the function 
- `arg`s are functin parameters 

To make you remember what each one does, use the mnemonic below:

`Call`: **Count the Commas** (you have to count the number of arguments to match the called function)

`Apply`: **Arguments as Array**

# 6	Hard Binding Functions with Contexts

`binding(object)` - permanently binding a function to a context object

> Unlike call or apply, the bind method doesn't actually execute the function. Instead, it returns a new function with the original function's this keyword permanently bound to a context. 
>
> We can then pass this function around, knowing that its this will never change when executed.


# 7	Example: Changing Function's Contexts (very well explained)

To illustrate how a function's context changes depending on where it is called from, we're going to start by creating a function called average with a parameter named values that will loop over the values and calculate the average. To start with, our function will take a single argument, an array of temperatures to work with.

```js
var temperatures = [53, 86, 12, 43];

function average(values) {
  var total = 0;
  for (var i = values.length - 1; i >= 0; i--) {
    total += values[i];
  }

  return total / values.length;
}

console.log(average(temperatures));       // 48.5
```

Now we're going to change the function to instead work with the context variable, this. Remove the values argument from your definition and replace instances of values with the keyword this. Call the function again, passing in the temperatures array and check out the result returned.

```js
var temperatures = [53, 86, 12, 43];

function average() {
  var total = 0;
  for (var i = this.length - 1; i >= 0; i--) {
    total += this[i];
  }

  return total / this.length;
}

console.log(average(temperatures));           // NaN
```

We have received NaN as the result. This is because our function is being called from the window scope, so the context variable this within the function is the window object rather than our temperatures array. For our context to be the temperatures array, we need to use either the call or apply method on our function. Both of these methods will allow us to change the context that the function is executed with (therefore change this in the function), and both execute the function immediately with that context. Let's try passing in the temperatures array as the argument to both call and apply.

```js
console.log(average.call(temperatures));      // 48.5
console.log(average.apply(temperatures));     // 48.5
```

We can also create a new function that will permanently change the context it is called with. Functions have a method called bind that will allow us to pass in the context we want to use when it is called, and the new function can be stored in a variable. Using this method, we can create a variable named averageTemperature that will store the average function bound to the temperatures array. Then execute the function and check the result.

```js
var averageTemperature = average.bind(temperatures);

console.log(averageTemperature());
```

We can also change the context that our function is called with by assigning it as a method to an object. When assigned to an object, the function's context is the parent object unless bound otherwise. Since arrays are also objects, we can add a method to our temperatures array and simply call it from there. Assign the property average on the temperatures array to the average function, then call the average method on the temperatures array.

```js
temperatures.average = average
console.log(temperatures.average());
```


# 8	Dealing with Context Loss (1)
> When you take a method out of its containing object and execute it elsewhere, you will lose its context:

# 9	Dealing with Context Loss (2)

> When calling internal functions **traps**

```js
// solution 1
var self = this;

// solution 2
func.call.(this);

// solution 3
var bar = function() { // must be function expression
      console.log(this.a);
    }.bind(this);
```

# 10	Dealing with Context Loss (3)

# 11	Summary: The "this" Keyword in JavaScript

https://rainsoft.io/gentle-explanation-of-this-in-javascript/



# 12	Exercises: What is this? (1)
# 13	Exercises: What is this? (2)

 **good** check evernote

https://launchschool.com/lessons/2555bbbb/assignments/a25e45f9

https://launchschool.com/lessons/2555bbbb/assignments/93b8b6af



# 14	Functions in Objects
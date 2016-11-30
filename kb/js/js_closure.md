Scope and Closures
=====================

[Closures MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[You Dont Know JS - Scope & Closures](https://github.com/getify/You-Dont-Know-JS)

# Hositing

use a var without declaration
- If JavaScript can't find a matching variable, it creates a new global variable instead
- without an explicit declaration, a becomes a property of the global object

can't find var
- JavaScript throws a `ReferenceError` exception if it can't find a variable anywhere in the scope hierarchy. `console.log(a);`

# Variables 

Function arguments become local variables in the function, so assigning to an argument has no effect on the original argument. 

Function arguments are locally scoped variables


# Emulating private methods with closures

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

// or

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */

```


```js
var getCode = (function(){
  // A code we do not want outsiders to be able to modify...
  var secureCode = "0]Eal(eh&2";    
  
  return function () {
    return secureCode;
  };
})();

getCode();    // Returns the secureCode
```


You Don't Know JS: Scope & Closures
====================================


# What is Scope?


## Lexical Scope

![Scope](scope.png)


Look-ups
- from inner most scope

Scope look-up stops once it finds the first match. 


function-based scope
- each function you declare creates a bubble for itself, but no other structures create their own scope bubbles.
- It doesn't matter where in the scope a declaration appears, the variable or function belongs to the containing scope bubble, regardless
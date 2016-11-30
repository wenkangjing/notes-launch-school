"use strict";

// Closure
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

//
// add5 is a closure, contains
// 1. addRight(y) as a function
// 2. x as a var in its environment
//
var add5 = makeAdder(5); 
var no8 = add5(3);
alert(no8); // Returns 8

//
// add10 is a closure
// add5 and add10 
// 1. share same function definition
// 2. but store different evironments
//
var add10 = makeAdder(10);


// Practical usage
function makeCounter() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      console.log('increment');
      changeBy(1);
    },
    decrement: function() {
      console.log('decrement');
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
}


var counter = makeCounter();

console.log(counter.value());

counter.increment();
counter.increment();
console.log(counter.value());

counter.decrement();
console.log(counter.value());


//Emulating private methods with closures
var counterPrivate = (function() {
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

console.log(counterPrivate.value()); // logs 0
counterPrivate.increment();
counterPrivate.increment();
console.log(counterPrivate.value()); // logs 2
counterPrivate.decrement();
console.log(counterPrivate.value()); // logs 1


//or

var makeCounterEx = function() {
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

var counter1 = makeCounterEx();
var counter2 = makeCounterEx();
alert(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
alert(counter1.value()); /* Alerts 2 */
counter1.decrement();
alert(counter1.value()); /* Alerts 1 */
alert(counter2.value()); /* Alerts 0 */ 
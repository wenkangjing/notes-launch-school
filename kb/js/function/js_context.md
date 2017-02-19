
JavaScript Context
=====================

# `window`

The window object represents a window containing a DOM document. **per tab**

- `window` in borwser or `global` in node
- can be ignored in code, contains
  - document
  - console
  - alert
  - history
  - setTimeout, setInterval
  - self === window //> true
  - Array, Object

# `window.document` or `document`

- HTML tag
- contains `document.head` and `document.body`

# function context

function invocation 
- `func(args)`
- equivalent `window.func(args)`
- this is `window` non strict mode

method invocation 
- `obj.func(args)`
- `this` is obj


constructor w/ `new`
- return the create `obj` 
- `this` is obj

constructor w/o `new`
- call constructor on `window`
- this is window

apply / call
- given context **temporarily**

bind
- given context **permanently**
- returns a copy of the given function with the specified this value and initial arguments.
arrow function


# context lost

assign to another variable 
- `let temp = obj.func`
- `temp(args)`
- equivalent: `window.temp(args)`
- this is window, 

assign to the argument of another function
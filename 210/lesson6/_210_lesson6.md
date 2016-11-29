Writing Better Code
=========================


# 1	Douglas Crockford Lecture: The JavaScript Programming Language
https://www.youtube.com/watch?v=RO1Wnu-xKoY

author of 'JavaScript the Good Parts'

Object
- a collection of data
- key must be string
- `obj.name` or `obj[name]`

Class vs Prototype


Delegation (differential inheritance)
- prototype attribute
- [ ] call/apply???

new / Object.create
- you do need new, use `Object.create()` to be more prototyping way
- `Object.create(null)` create a object inherit nothing

Object Atrributes
- `enumerable` attribute to false invisiable to kids
- `extensible` attribute, sealed, cann't add properties on it
- `Object.keys()` returns the keys of own, not inherated properties

Number
- just one number type
- 64bit floating point
- double-precision floating-point
- aka `Double`

Number comparasion
- inteager works, **always convert to inteager before comparasion**
- `decimal` (a+b)+c === a+(b+c) // false

Number method
- Math

Number NaN
- Not a Number
- `NaN === NaN` false
- `NaN ！== NaN` true

Boolean


String
- 16bit character set
- count can be wrong
- `immutable`, they are frozon
- don't use multiline string `\`
- number to string: 
  - `n.toString()` error if n is undefined
  - `String(n)`
- string to number: 
  - `Nubmer(str)`
  - `+str`  
  - `parseInt()` always use radix 


Array
- inherits from object 
- grow dymatically
- use for loop, not use `for...in` not in order
- `arr[arr.length] = 'new item'`, the `length` will be add by 1 automatically

Array sort
- by string / unicode
- passing compare func

Array delete
- **doesn't work** delete arr[2];
- **use splice** arr.splice(2,1)

Array vs Objects
- use array if key is inteager
- use object is key is unique string

Date

RegExp
- more than 2 inches, re-think it, find a better tool

>
> **All values are Objects, except `null` and `undefined`**
>
> `null` nothing
>
> `undefined`
> - not event that
> - missing members in obejct
>

typeof

type | typeof 
-|-
object    | "object"
function  | "function"
array     | "object"  use `Array.isArray()` instead
number	  | "number"   
string	  | "string"
Boolean	  | "boolean"
null	    |  "object" **lol**
undefined	| "undefined"


Falsy values
- false
- null
- undefined
- ""
- 0
- NaN

- **all other values (including all objects) are truthy, e.g.**
  - `"0"` is truthy because it is not an empty string
  - `"false"` is truthy  same as above

Loosely Typed
- but not "untyped"

Reference
- objects are passed by **reference**, not by values
- primitive type are passed by values
- `===` compares objects by references, not values

C
- syntactically a C
- **it differs from C mainly in its type system, which allows functions to be values**

Operators
- arithmetic, +-*/
- comparison, ==, !==, <, >, <=, >=
- logical, &&, ||, !
- bitwise, &, |, ^, >>, >>>, <<
- ternary, ?:

Addition vs Concat

```js
if both operands are nubmers
   add
else
   convert both to strings and Concat
```   

String to  Number

```js
var num =  +'42' // 42, unary +,  convert string to number
num = Nubmer('42');
num = parserInt('42', 10)
  - 
```

/
- no inteager

%
- [ ] remider 
- [ ] modulo

== !== vs === !==
- always use strict equal


type coercion


&&
- guard operator
- aka logical and
- can be used to avoid null references
```js
if (a) {
  return a.member;
} else {
  return a;
}
// =>
return a && a.member;
```

|| 
- default operator
- aka logical or
- `return state || unloadedState;`


!
- logical not
- `!!` produces booleans

bitwise
- shifting inteager in JS is not as fast as in C/C++

exception
- `throw new Error(reason)`
- `throw {name: "name", message: "bala"}`

with
- don't use it
- removed

JS the Bad Parts
- not useless but dangerous

# 2	Douglas Crockford Lecture: JavaScript the Good Parts

https://www.youtube.com/watch?v=hQVTIJBZook

complaints
- dom is awful, but ajax is making things better
- faster js engine

JS
- elegent expressive programming language
- use the good parts exclusively

Influences
- Self: prototypal inheritance, dynamic objects
- Java: syntax, conventions
- Scheme: lambda, loose typing (!strong typing)
- Perl: regular expressions  

Bad Parts
- global var
- + add and Concat
- semicolon insert
- typeof
- with and eval
- phony arrays, not a real array, simulated array
- ==, != (use triple equal)

Good but interact badly
- for in
- object inherit

Bad heritage
- blockless statement if () oneline
- expression statement
- floating point arithmetic
- ++, -- (avoid)
- switch 

Good parts
- lambda
- dynamic objects
- loose typing
- object literals

inheritance
- classical
- prototypal

Prototypal inheritance
- class-free
- objA contains a link to objB: delegation, differential inheritance
- avoid use `new`

```js
var newObj = Object.create(oldObj);
// newObject.__proto__  ----->  oldObject
```

Closure
- a function object that contains
  - a function (name, parameters, body)
  - a reference to the env in which it was created (context)

```js
// global variable is not recommendated
var names = ['zero', 'one', 'two'];
var digitName = function (n) {
  return name[n];
}

// put into inner scope, but slow
var digitName = function (n) {
  var names = ['zero', 'one', 'two'];
  return name[n];
}

// closure
var digitName = function () {
  var names = ['zero', 'one', 'two'];
  return function (n) {
    return name[n];
  }
}
```

less likely to cause problems



# 3	JavaScript Style Guide

code linting

airbnb js style

literal syntax: expression

method shorthand

```js
// old way
var obj = {
  foo: function() {},
  bar: function() {}
};

// new way
var obj = {
  foo() {},
  bar() {}
};
```

property value shorthand

```js
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

array.map
- The map() method creates a new array with the results of calling a provided function on every element in this array.

prefer rest parameters over `arguments` 

side effects
- modify arguments in function

parentheses `()`

curly brackets `{}`

square brackets `[]` 

use class over directly manipulating prototype

use extends for inheritance, `instanceOf`

import
  - import { member } from "module-name";
  - import defaultMember from "module-name";
  - import defaultMember, {member1, member2} from "module-name";

no for loop, no for...in
- to iterate over array
  - map() / 
  - every() / 
  - filter() / 
  - find() / 
  - findIndex() / 
  - reduce() / 
  - some() / ... to 

- to produce arrays so you can iterate over objects.
  - Object.keys() / 
  - Object.values() / 
  - Object.entries() 

hoisting
- `var` declarations get hoisted to the top of their scope, their assignment does not. 
- `const` and `let` declarations are blessed with a new concept called Temporal Dead Zones (TDZ). 
- It's important to know why `typeof` is no longer safe.


conditional compassion
- Objects evaluate to true
- Undefined evaluates to false
- Null evaluates to false
- Booleans evaluate to the value of the boolean
- Numbers evaluate to false if +0, ‐0, or NaN, otherwise true
- Strings evaluate to false if an empty string '', otherwise true


page 45

# 4	Errors

# 5	Preventing Errors

# 6	Catching Errors

# 7	Quiz: What We've Learned So Far
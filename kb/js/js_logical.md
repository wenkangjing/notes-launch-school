https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators


# Basics

> the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.


expr1 && expr2

-	Returns `expr1` if it can be converted to false; 
- otherwise, returns `expr2`. 
- Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.


expr1 || expr2

- Returns `expr1` if it can be converted to true; 
- otherwise, returns `expr2`. 
- Thus, when used with Boolean values, || returns true if either operand is true.


!expr

- Returns false if its single operand can be converted to true; 
- otherwise, returns true.


# Short-circuit evaluation

>`false && (anything)` is short-circuit evaluated to false.
>
>`true || (anything)` is short-circuit evaluated to true.

# convert to boolean
```js
!!(null)       // false
!!(NaN)        // false
!!(0)          // false
!!('')         // false
!!(false)      // false
!!(undefined)  // false

!!('abc')      // true
!!(123)        // true
!!('true')     // true
!!('false')    // this is also true! All strings are truthy in JavaScript
```

# Logical AND (&&)

The following code shows examples of the && (logical AND) operator.

```js
a1 = true  && true      // t && t returns true
a2 = true  && false     // t && f returns false
a3 = false && true      // f && t returns false
a4 = false && (3 == 4)  // f && f returns false
a5 = "Cat" && "Dog"     // t && t returns "Dog"
a6 = false && "Cat"     // f && t returns false
a7 = "Cat" && false     // t && f returns false
a8 = "" && false        // returns ""
a9 = false && ||        // returns false
```

# Logical OR (||)

The following code shows examples of the || (logical OR) operator.

```js
o1 = true  || true       // t || t returns true
o2 = false || true       // f || t returns true
o3 = true  || false      // t || f returns true
o4 = false || (3 == 4)   // f || f returns false
o5 = "Cat" || "Dog"      // t || t returns "Cat"
o6 = false || "Cat"      // f || t returns "Cat"
o7 = "Cat" || false      // t || f returns "Cat"
o8 = ""    || false      // returns false
o9 = false || ""         // returns ""
```
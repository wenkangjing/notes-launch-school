/*
The || operator returns true if either or both of its operands are truthy, false if both operands are falsey. The && operator returns true if both of its operands are truthy, and false if either operand is falsey. This works great until you need only one of two conditions to be true, the so-called "exclusive or", or XOR.

Write a function named isXor that takes two arguments, and returns true if exactly one argument is truthy, false otherwise. Your function should work with the boolean values of true and false, but also any JavaScript values based on their "truthiness".

Example

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
*/

// conver to boolean
// precondition: && = true return false
//               || = false return false
// otherwise return true;
//
function isXor_1(arg1, arg2) {
  var b1 = !!arg1;
  console.log(arg1 + ' -> ' + b1);
  
  var b2 = !!arg2;
  console.log(arg2 + ' > ' + b2);
  
  if (b1 && b2)
    return false;

  if (!(b1 || b2))
    return false;

  return true;
}

// 
function isXor_2(value1, value2) {
  if ((value1 && !value2) || (!value1 && value2)) 
    return true;

  return false;
}

function isXor_3(value1, value2) {
  return !!((value1 && !value2) || (!value1 && value2));
}

function isXor_4(value1, value2) {
  return !!value1 !== !!value2;
}

function isXor(value1, value2) {
  return Boolean(value1) !== Boolean(value2); 
}

console.log(isXor(false, true));   
console.log(isXor(true, false));   
console.log(isXor(false, false));  
console.log(isXor(true, true));    

console.log(isXor(false, 3));       
console.log(isXor('a', undefined)); 
console.log(isXor(null, ''));       
console.log(isXor('2', 23));        


/*
Our function can explicitly check both conditions and return true when:

the first value is truthy and the second falsey,
the first value is falsey and the second truthy.
The function should return false otherwise.

You can write a solution that is even more concise:

Alternative 1:

function isXor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}
The two exclamation points (!!) coerce the return value to a boolean value (true or false). By default, logical operators return the value of the values of the operands, not a boolean value. Without the !!, the function returns the truthy (i.e 'a' or 2) or falsey (i.e '') values; the !! guarantees that the result is boolean.

Example:

// expression form
((expr1 && expr2) || (expr3 && expr4))

isXor('a', undefined);  // true
// series of evaluations
!!(('a' && !undefined) || (undefined && !'a'))
!!(('a' && true) || (undefined && false))
!!( true || undefined)
!!( true ) // true


isXor(null, '')   // false
// series of evaluations
!!((null && !'') || ('' && !null))
!!((null && true) || ('' && true))
!!( null || '' )
!!( '' )  // false
Alternative 2:

function isXor(value1, value2) {
  return Boolean(a) !== Boolean(b);
}
While these solutions are more concise, they take a little more effort to understand.

Questions to Think About

|| and && are so-called short circuit operators; JavaScript evaluates the second operand only when needed. For instance, in a || b, you don't need to evaluate b if a is truthy. Does the isXor function perform short-circuit evaluation? Why or why not? Does short-circuit evaluation in XOR operations make sense?

Can you think of a situation where a boolean isXor function is useful? Suppose you were modeling a light at the top of a flight of stairs wired such that you can turn the light on or off from either upstairs or downstairs. This is an XOR configuration, and you can model it in JavaScript using the isXor function. Try to think of some more examples.

*/
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
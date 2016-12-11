// Matching Parentheses

// Write a function that takes a string as argument, and returns true if the parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching "(" and ")" pairs.


// return () to array and remove the rest chars
// () array length must be even
// first half are (, last half are )
function isBalanced_1(string) {
  let pairs = string.replace(/[^()]/g, ''); // -> this is not a must

  let balance = 0;
  for (var i = 0; i < pairs.length; i++) {
    
    if (pairs[i] === '(') {
      balance = balance + 1;
    } else if (pairs[i] === ')'){
      balance = balance - 1;
    } else {
      return false;
    }

    // should always start with (, which means positive integer
    if (balance < 0) {
      return false;
    }
  }

  return (balance === 0); 
}


// Examples:

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

//Note that balanced pairs must each start with a "(", not a ")".


// Logic and Structure


// A string is balanced if for each left parentheses we have a matching right parentheses. We can keep track of this by keeping a tally of the total parentheses count. Left parentheses are +1 and right parentheses are -1. If our string is balanced, then the total, parens will always be zero after parsing string. There's also a condition, where a right paren would come first before a "matching" left paren. In this situation, we should terminate the iteration earlier and return false.

// Since the logic here involves a potential early return, instead of relying on any list processing abstractions, a low level loop is actually the best way to go.


function isBalanced(string) {
  let balance = 0;
  for (var i = 0; i < string.length; i++) {
    
    if (string[i] === '(') {
      balance = balance + 1;
    } else if (string[i] === ')'){
      balance = balance - 1;
    } else {
      continue;
    }

    // should always start with (, which means positive integer
    if (balance < 0) {
      return false;
    }
  }

  return (balance === 0); 
}


// Solution
// function isBalanced(string) {
//   var parensCount = 0;

//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === '(') {
//       parensCount++;
//     } else if (string[i] === ')') {
//       parensCount--;
//     }

//     if (parensCount < 0) {
//       return false;
//     }
//   }

//   return parensCount === 0;
// }
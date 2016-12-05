// closure

// function doubler(number, caller) {
//   console.log('This function was called by ' + caller + '.');
//   return number + number;
// }

// doubler(5, 'Victor');       // 10
// This function was called by Victor.


//Can you create a makeDoubler function, which returns a function that's functionally equivalent to doubler, but with the caller preset?

function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}

var doubler = makeDoubler('Victor');
console.log(doubler(5));  

// What's interesting here is that the returned function expression that's assigned to variable doubler still retains access to the caller variable in its closure, even after the makeDoubler function returns.

//
// Array is objecrt
//

var arr = ['Apples', 'Peaches', 'Grapes'];
arr[3.4] = 'Oranges';
arr[-2] = 'Watermelon';

console.log(arr);
// prints

[ 'Apples',
  'Peaches',
  'Grapes',
  '3.4': 'Oranges',
  '-2': 'Watermelon' ]

console.log(Object.keys(arr));
[ '0', '1', '2', '3.4', '-2' ]
// 0, 1, and 2 are the indices/properties for
// Apples, Peaches, and Grapes

console.log(arr[0]);   // Apples
console.log(arr[1]);   // Peaches
console.log(arr[2]);   // Grapes

// 3.4 and -2 are keys the exists in the "Array Object"


//
// The Red Pill
//


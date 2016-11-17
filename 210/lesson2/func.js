console.log('Function parameters and arguments');

function takeTwo(a, b) {
  return a + b;
}

console.log('1 + 2 = ' + takeTwo(1, 2));
console.log('1 + undefined = ' + takeTwo(1, undefined));
console.log('1 + NaN = ' + takeTwo(1, Number.NaN));
console.log('1 = ' + takeTwo(1));

// 1.
console.log('--- 1 ---');
function average(a, b, c) {
  return sum(a, b, c) / 3;
} 

console.log(average(2, 5, 5));
 
// 2.
console.log('--- 2 ---');
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 5, 5));

// 3. 

console.log('--- 3 ---');
function average (values) {
  return sum(values) / values.length
}

var arr = [1,2,3,4,5];
console.log(average(arr));
 

 // 4.
 console.log('--- 4 ---');
 function sum (values) {
   var total = 0;
   var len = values.length;
   for (var i = 0; i < len; i++) {
     total += values[i];
   }
   return total;
 }

 console.log(sum([1,1,1,1,1]));
 

 // 5.
 console.log('--- 5 ---');
 var temperatures = [13.2, 45.1, 23.4,32.6, 40];
 console.log(average(temperatures));
  
 // nested function
 console.log('--- nested function ---');
 function circumference(radius) {
  function double(number) {  // nested function:
    return 2 * number;
   }

  return 3.14 * double(radius);  // call the nested function
} 
console.log(circumference(5));

var num = '1';
console.log(num);

var str = Number('1');
console.log(str);


var abc = Number('abc');
console.log(abc);

console.log(parseInt('123'));
console.log(parseInt('123.45'));
console.log(parseFloat('123.45'));

console.log(String(123));
console.log(String(1.23));
console.log(String(abc)); // NaN

console.log((123).toString());
console.log((123.45).toString());


console.log(Boolean(null));        // false
console.log(Boolean(NaN));         // false
console.log(Boolean(0));           // false
console.log(Boolean(''));          // false
console.log(Boolean(false));       // false
console.log(Boolean(undefined));   // false

console.log(Boolean('abc'));       // other values will be true
console.log(Boolean(123));         // true
console.log(Boolean('true'));      // including the string 'true'
console.log(Boolean('false'));     // but also including the string 'false'!
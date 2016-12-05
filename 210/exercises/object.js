//
// Literal
//

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd'
};
myObject[1];
//myObject[a]; //ReferenceError, a is not defined
myObject.a;  

//In order to access the value of a key using square bracket notation ([someKey]), the key has to be a string value. When the value is numeric it gets converted to a string using the toString() method. If it's a variable, it looks up the value (converts to a string if necessary) and uses the value to get the corresponding property value for it. The statement myObject[a] triggered a ReferenceError because it tried to get the value of a variable that isn't declared.


//
// Literal Method
//

var myName = {
  first: function() {
    return 'Victor';
  },
  last: function() {
    return 'Reyes';
  },
};

console.log(myName.first + ' ' + myName.last);

// You need to call object literal methods for it to return the expected behavior. Methods are called in the same way that functions are. It has to be appended with parentheses (i.e name.first()).

//
// Mutation
//

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];

var array2 = [];

// to get reflected to array2
//var array2 = array1;

for (var i = 0; i < array1.length; i++) {
  array2.push(array1[i]); // primitives are pass-by-value 
}

for (var i = 0; i < array1.length; i++) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

//If you were expecting that array2 remains unchanged then you are correct. But why should this be the case if array1 values got pushed to array2? If you thought to yourself that JavaScript is 'Pass-by-Value', then, 'Great!', you are correct. array2.push() just passes copies of the values and not the references to array1 values themselves.

//Further Exploration

//How will you change the code so that the changes made to array1 in the second for loop gets reflected to array2?


//
// Dynamic
//


var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); //678
console.log(myObject.prop2); //456

// Was the result what you expected? The tricky part here are the names of the properties, the variable name, and of course the fact that you can use an expression to create and access properties. The difference of line 11 to line 12, while they may look the same, is that in line 11 it's the value of prop used as the key ('456'). This did not return undefined because it was also added as a property on line 9 where it got assigned the value of '678'. Line 12's value is different from its original assignment in the object literal at line 3 because of the reassignment at line 8.

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
};

console.log(myObj); // ojb myFunc definition as key, 'hello as value

myObj[myFunc()] = 'world!';

console.log(myObj); // ojb myFunc definition as key, 'hello as value

// myFunc() is actually convert to string 'funcProp' 


//
// Array Object 1
//

var myArray = ['a', 'b', 'c'];
console.log(myArray[0]);
console.log(myArray[-1]);
myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray); //length is 4, calculated by positive integer including zero, other object-like key/value pair are not consider as array. but still part of the array

// Arrays are JavaScript Objects! If you think about it from that perspective, then it would make sense that using a -1 as an index does not return the last value of the array but instead returns undefined; which is the expected result accessing the key of an object that is not defined or does not exist. If you take a look at the array you can see that for any of the values that don't have a key value of a positive integer (including zero) the key is also displayed when the array is logged out.

//
// Array Object 2
// 

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
function average(array) {
  var sum = 0;
  for (var i = -2; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// A non-positive integer key is not considered as part of an array's length. As such the length is only 2 when the sum of the elements were divided (20 / 2).

//
// What's my Bonus
//

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

// Notice that while no parameters are explicitly defined for the calculateBonus function there are still arguments that are available locally within the function. This is because all functions have an arguments object that is available locally. The arguments object contains an entry for every argument passed to the function.

//
// The End is Near But Not Here
//



function penultimate_wrong(string) {
  return string.split(' ')[-2];
}


function penultimate_ok1(string) {
  var words = string.split(' '); 
  if (words.length < 2) {
    return undefined; // not needed, if length is 1, words[-1] will return undefined anyway 
  } else {
    return words[words.length - 2]; 
  }
}

function penultimate_ok2(string) {
  var words = string.split(' ');
  return words[words.length - 2];
}

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

penultimate('last word')               // 'last'
penultimate('Launch School is great!') // 'is'


// In JavaScript, unlike other programming languages like Ruby, providing a negative index will not start getting the values from the end. It does not also return an error but it instead returns undefined. This is the result because in JavaScript Arrays are Objects. By passing in -1 (i.e myArray[-1]) we are actually telling JavaScript to return the value of the property with -1 as the key.

// In order to get the expected result, the solution uses the Array.prototype.slice() method which now behaves similarly to passing in a negative index. The main difference is that you have to provide the endingIndex; otherwise the slice method assumes that we want to get all elements from the startingIndex (i.e -2) provided up to the end. In the case of the problem the solution passed in the -1 so that it stops at the -2. This is because the slice method gets elements up to but not including the endingIndex. Following this the solution returns the only element of the array so that the return value of penultimate is a string.



//
// After Midnight Part 1
//
var MILLISECONDS_PER_MINUTE = 60000;
function timeOfDay(deltaMinutes) {
  var midnight = new Date('1/1/2000 00:00');
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  var hours = padWithZeroes(afterMidnight.getHours(), 2);
  var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return hours + ':' + minutes;
}

function padWithZeroes(number, count) {
  var string = String(number);
  while (string.length < count) {
    string = '0' + string; 
  }
  return string;
}


timeOfDay(0);       // "00:00"
timeOfDay(-3);      // "23:57"
timeOfDay(35);      // "00:35"
timeOfDay(-1437);   // "00:03"
timeOfDay(3000);    // "02:00"
timeOfDay(800);     // "13:20"
timeOfDay(-4231);   // "01:29"


//
// After Midnight Part 2
//

// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

//The functions below do the reverse of the previous exercise. It takes a 24hour time argument and returns the number of minutes before and after midnight, respectively. Both methods should return a value in the range of 0..1439.

// Refactor the functions below so that it uses the Date object.




function afterMidnight(timeString) {
  var midnight = new Date('1/1/2000 00:00');
  var dataString = new Date('1/1/2000 ' + timeString);
  var deltaMinutes = (dataString.valueOf() - midnight.valueOf()) / MILLISECONDS_PER_MINUTE; 
  return deltaMinutes;
}


function beforeMidnight(timeString) {
  return afterMidnight(timeString) > 0 ? 1440 - afterMidnight(timeString) : 0;
}

afterMidnight('00:00');        // 0
beforeMidnight('00:00');       // 0
afterMidnight('12:34');        // 754
beforeMidnight('12:34');       // 686
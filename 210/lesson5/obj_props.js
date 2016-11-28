// 1. Write a function, objectHasProperty, that takes two arguments: 
// an Object and a String. 
// If the Object contains a property with the specified name, the function should return true. 
// Otherwise, it should return false.



function objectHasProperty_1(obj, prop) {
  var name;
  for (name in obj) {
    if (name === prop) {
      return true;
    }
  }
  return false;
}

// use Object.keys
function objectHasProperty_2(obj, prop) {
  var keys = Object.keys(obj);
  if (keys.indexOf(prop) !== -1) {
    return true;
  }
  return false;
}

// return expresson instead of using if else
function objectHasProperty(obj, prop) {
  var keys = Object.keys(obj);
  return keys.indexOf(prop) !== -1; 
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};


objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true




// 2. Write a function, incrementProperty, 
// that takes two arguments: 
// an Object and a String. 
// If the Object contains a property with the specified name, the function should increment the value of that property. 
// If the property doesn't exist, the function should add a new property with a value of 1. 
// The function should return the new value of the property.

function incrementProperty_1(obj, prop) {
  var keys = Object.keys(obj);
  if(keys.indexOf(prop) === -1) {
    obj[prop] = 1;
  } else {
    obj[prop]++;
  }
}

// same as C#
// Remember that attempting to access a property that doesn't exist in an object will return undefined
function incrementProperty(obj, prop) {
  if (obj[prop]) {
    obj[prop]++;
  } else {
    obj[prop] = 1;
  }
}

var wins = {
  steve: 3,
  susie: 4,
};


incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);  



// 3.Write a function, copyProperties, 
// that takes two Objects as arguments. 
// The function should copy all of the properties from the first object to the second one. 
// The function should return the number of properties copied.
function copyProperties_1(source, target) {
   var prop;
   for (prop in source) {
     target[prop] = source[prop];
   }
   return Object.keys(target).length;
}

// instead of calling Object.key, using a internal counter 
function copyProperties(source, target) {
  var count = 0;
  for (var prop in source) {
    target[prop] = source[prop];
    count++;
  }
  return count;
}

var hal = {
  model: 9000,
  enabled: true,
};
var sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }



// 4. Write a function, wordCount, 
// that takes a single String as an argument. 
// The function should return an Object containing the count that each word appears in the provided String. 
// The Object's keys should be the words, and the value of each key should be the number of occurrences of that word were.

// assume the separator is empty space
function wordCount(str) {
  var count = {};
  var words = str.split(' ');
  var word = ''; 
  
  for (var i = 0; i < words.length; i++) {
    word = words[i];
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  }
  return count;
}

console.log(wordCount('box car cat bag box'));    // { box: 2, car: 1, cat: 1, bag: 1 }
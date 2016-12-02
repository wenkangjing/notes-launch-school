function myFilter_1(array, func) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (func(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function myFilter(array, func) {
  var newArray = [];
  array.forEach(function(element) {
    if(func(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

var isPythagoreanTriple = function(triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13},
          {a: 1, b: 2, c: 3}], isPythagoreanTriple));
// returns [{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13}]



// Let's build a program that filters out numbers that are not a multiple of either 3 or 5 from an array of integers and returns it.

function multiplesOfThreeOrFive_1(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

var isMultipleOfThreeOrFive = function(value) {
  return value % 5 === 0 || value % 3 === 0;
};

// or make the callback inline

function multiplesOfThreeOrFive(values) {
  return myFilter(values, function(value){
    return value % 5 === 0 || value % 3 === 0;
  });
}


console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));    // [ 3, 5, 18, 15 ]
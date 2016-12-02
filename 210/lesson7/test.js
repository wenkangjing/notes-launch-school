
// forEach have to iterate every elements, doesn't fit the requirements
function myOwnEvery_1(array, func) {
  var result = true;
  array.forEach(function(current) {
    result = result && func(current);
  });
  return result;
}

// Notice we use a for loop here. 
// Whenever your code may need an early return while processing a list, 
// you want to consider to use just a for loop. 
function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }
  return true;
}


var isAString = function(value) {
  return typeof value === 'string';
};

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
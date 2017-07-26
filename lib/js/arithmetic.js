
var multiple = function(array) {
  return array.reduce(function(sum, e) {
    return sum * e;
  }, 1);
};
console.log(multiple([0,2,3, 5]));

// lift
function lift(array) {
  return array.map(v =>  v + 1);
}
console.log(lift([1,2,3]));
console.log(lift([0,5,5]));

[3,5,7,9].forEach(v => console.log(v));

// sum
function getSum(array) {
  return array.reduce((sum, e) => sum + e);
}
console.log('sum', getSum([1,2,3,4,5]));


// average
function getAverage(array) {
  var sum =  array.reduce((sum, e) => sum + e, 0);
  return sum / array.length;
}
console.log('average', getAverage([1,2,3,4,5]));


// min
function getMinimum(array) {
  return array.reduce(function(min, current) {
    return min <= current ? min : current;
  });
}
console.log('min', getMinimum([1,2,3,4,5]));

// max
function getMaximum(array) {
  return array.reduce(function(max, current) {
    return max >= current ? max : current;
  });
}
console.log('max', getMaximum([1,2,3,4,5]));


// random integer from min to max inclusive
// it is not well balanced, half weigth of min and max
function randomInteger(min, max){
  if (min === max)
    return min;

  var range = max - min;
  var float = Math.random() * range + min;
  return Math.round(float); // round
}

// floor is well balanced
function randomInt(min, max) {
  var difference;
  var swap;

  if (min === max) {
    return min;
  } else if (min > max) {
    swap = min;
    min = max;
    max = swap;
  }

  difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
}

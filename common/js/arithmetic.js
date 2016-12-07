
// sum
function getSum(array) {
  return array.reduce(function(sum, e) {
    return sum + e;
  }, 0);
}

console.log('sum', getSum([1,2,3,4,5]));


// average
function getAverage(array) {
  return array.reduce(function(sum, e) {
    return sum + e;
  }, 0) / array.length;
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
function add(previousValue, element, array) {
  var sum = previousValue + element;
  console.log(previousValue, element, sum);  
  return previousValue + element;
}

var count = [1, 2, 3, 4, 5];
console.log(count.reduce(add));            // 15

// build it to understand it
function myReduce(array, func, initial) {
  var value;
  var index;

  if (initial) {
    value = initial;
    index = 0;
  } else {
    value = array[0];
    index = 1;
  }

  array.slice(index).forEach(function(element) {
    value = func(value, element);
  });

  return value;
}

// smallerst nubmer
var smallest = function(result, value) {
  return result <= value ? result : value;
};

myReduce([5, 12, 15, 1, 6], smallest);           // 1



// longest words

function longestWord(words) {
  return myReduce(words, function(result, currentWord) {
    return currentWord.length >= result.length ? currentWord : result;
  });
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
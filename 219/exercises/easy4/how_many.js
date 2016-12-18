// How Many

// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.


/*

Understanding
- input
  - an array

- ouput
  - print out element and count

- question
  ? case sensitive // probably yes, as SUV is upper case
  ? element primitive value or array/object


Algorithm
- a obejct for counting, counter {}, element as key, count as value, increasing in each iteration
- iterating the array, in each iteration
  - if exist, increase
  - else push, and set value to 1

- print out
  - for each key in counter.keys
    - log key => counter[key]
*/

function countOccurrences_1(array) {
  let counter = {};

  array.forEach(function (element) {
    if (counter[element]) {
      counter[element]++;
    } else {
      counter[element] = 1;
    }
  });

  print(counter);
}

// use || to provide a default value 
function countOccurrences(array) {
  let counter = {};

  array.forEach(function (element) {
    counter[element] = counter[element] || 0; // decent way to providing a default value
    counter[element]++;
  });
  
  print(counter);
}


// function name could be better e.g. displayOccurrences after countOccurrences
function print_1(obj) { 
  Object.keys(obj).forEach(function (key) {
    console.log(key + ' => ' + obj[key]);
  })
}


// another way to iterating object
function print(obj) {
  for (let element in obj) {
    console.log(element + ' => ' + obj[element]);
  }
}





 var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
 countOccurrences(vehicles);

// // console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2









// Hide Solution & Discussion
// Solution

// function countOccurrences(vehicles) {
//   var occurrences = {};
//   for (var i = 0; i < vehicles.length; i++) {
//     occurrences[vehicles[i]] = occurrences[vehicles[i]] || 0;
//     occurrences[vehicles[i]]++;
//   }

//   displayOccurrences(occurrences);
// }

// function displayOccurrences(occurrences) {
//   for (var item in occurrences) {
//     console.log(item + ' => ' + occurrences[item]);
//   }
// }



// Discussion

// The solution uses two functions. The second function, displayOccurrences, is more for readability purposes. Its sole use is to display each key: value pair in the format specified in the exercise description.

// The function of interest is the countOccurrences. It starts of by creating and initiating an occurrences object. This object holds the result of the counting. It uses a loop that iterates over all elements in the vehicles array argument. At every iteration, it initializes a key based on the current vehicle iterated over to 0 if it hasn't. After this, it increments it by 1.
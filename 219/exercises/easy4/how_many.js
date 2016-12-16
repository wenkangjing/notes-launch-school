// How Many

// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

// var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
// countOccurrences(vehicles);

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
// Write a Function, processReleaseData, that processes the following new release data:

var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

//The Function should generate an array of objects of only id and title pairs. Here are the rules:

//keep only the releases that have both id and title data present
//keep only id and title data for each release


//
//  filter by contains both id and title
//  reduce to objects that only contain id and title
//
function processReleaseData(data) {

  // filter
  var filtered = data.filter(function (e) {
    return (e.id !== undefined && e.title !== undefined); 
  });

  //  **reduce and return result** wrong, should use map to return modified elements
  return filtered.map(function(e) {
    return {
      id: e.id,
      title: e.title
    };
  });

};

console.log(processReleaseData(newReleases));

// should return:
//[ { id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' } ];

// Thinking in Abstractions
//Our input data is an array of objects. The first rule needs a filter solution to select only the releases that satisfy a certain condition; the second rule is needs a map solution to transform the array of objects, each keeping only the id and title fields.

//So the shape of the solution should be:

// function processReleaseData(data) {
//   return data.filter(function(release){
//     // select only the releases with both id and title properties
//   }).map(function(release) {
//     // map each release to an object with only id and title
//   });
// }
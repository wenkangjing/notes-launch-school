// Exercise: Formatting Bands

// We are given the following array for some popular bands:

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// However, we need to process this data before we can use it:

// the band countries are wrong: all the bands should have country as "Canada"
// the band name should have all words capitalized.
// remove the dots in band names

// Write a function that can process the band array into its proper format:

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];


// input: bands
// output: formatted
//   country: Canada -> map
//   name: no dots -> map
//   name: capitalized -> map
function processBands(data) {
  var formatted = data.map(function(current) {
    var formattedName = capitalize(removeDots(current.name));
    return {
      name: formattedName,
      country: 'Canada',
      active: current.active
    };
  });
  return formatted;
}

function removeDots(string) {
  return string.replace(/\./g, '');
}

function capitalize(string) {
  var words = string.split(' ').map(function(current) {
    return current.charAt(0).toUpperCase() + current.slice(1);
  });
  return words.join(' ');
}


console.log(processBands(bands));

// should return:

// [ { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]



// Thinking in Abstractions
// We have an array of objects, and in the end, we need to get an array of objects. So the general shape of the solution should be a map:

// bands.map(function(band) {
//   // transform a single band here
// });
// There are three steps to transform data for a single band:

// update country
// capitalize band name
// remove dots in the band name
// Following the abstractions, we can have code that looks like this:

// bands.map(function(band) {
//   updateCountry(band);
//   capitalizeBandName(band);
//   removeDotsInBandName(band);
//   return band;
// });

// function updateCountry(band) {
//   //
// }

// function capitalizeBandName(band) {
//   //
// }

// function removeDotsInBandName(band) {
//   //
// }
// We'll use the side effects of the three functions to mutate the argument, and in the end, return it as the transformation target. When you work with capitalizeBandName, don't be afraid to create your own abstraction functions to make the process easier for yourself.
// Solution with Side Effects
// function processBands(bands) {
//   return bands.map(function(band) {
//     updateCountry(band);
//     capitalizeBandName(band);
//     removeDotsInBandName(band);
//     return band;
//   });
// }

// function updateCountry(band) {
//   band.country = 'Canada';
// }

// function capitalizeBandName(band) {
//   band.name = band.name.split(' ').map(function(word) {
//     return capitalizeString(word);
//   }).join(' ');
// }

// function capitalizeString(string) {
//   var initial = string[0].toUpperCase();
//   var rest = string.slice(1, string.length);
//   return initial + rest;
// }

// function removeDotsInBandName(band) {
//   band.name = band.name.replace('.', '');
// }
// Taming Side Effects
// Our solution above works, but since every step along the way, we rely on side effects of mutating each band, after we call processBands, the original bands array is mutated! In some situations where you know you will no longer need the original bands data, this may be OK, but it's general recommended that you reduce the side effects of your functions if possible to have them more contained.

// A side effect free version of the solution could be like this:

// function processBands(bands) {
//   return bands.map(function(band) {
//     var capitalizedName = capitalizePhrase(band.name);
//     var newBandName = removeDotsInString(capitalizedName);

//     return {
//       name: newBandName,
//       country: 'Canada',
//       active: band.active,
//     };
//   });
// }

// function capitalizePhrase(phrase) {
//   var capitalizedPhrase = phrase.split(' ').map(function(word) {
//     return capitalizeString(word);
//   }).join(' ');
//   return capitalizedPhrase;
// }

// function capitalizeString(string) {
//   var initial = string[0].toUpperCase();
//   var rest = string.slice(1, string.length);
//   return initial + rest;
// }

// function removeDotsInString(string) {
//   return string.replace('.', '');
// }
// In fact, this is a better solution also from the abstraction point of view - the concepts of a band doesn't leak into the capitalizePhrase and removeDotsInString functions anymore, which are in fact just string processing functions anyway!
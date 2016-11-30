"use strict";

// 1.
// var title = "The Three-Body Problem";

// single quote
// const (unexpect ES6 feature)
var title = 'The Three-Body Problem';

// The style guide recommends surrounding Strings with single quotes ('):
// var title = 'The three-Body Problem';

// 2
/**
 * var title = 'The Three-Body Problem',
 *   author = 'Cixin Liu',
 *   page_count = 400;
 */

// one var per line
//camel cased
var title = 'The Three-Body Problem';
var author = 'Cixin Liu';
var pageCount = 400;

// The style guide recommends declaring each variable on its own line and var. Additionally, variable names should be camel-cased:


// 3
// var completed = lastPageRead == 400;

// The style guide recommends using the strict equality operators:


// 4
// function read(pages) {
//       console.log('You started reading.');
//       for (var i=0; i<pages; i++) {
//               var message = 'You read page '+i;
//               console.log(message);
//       }
// }
//
// read(400);

// 2-space indent
// space between operators
function read(pages) {
  console.log('You started reading.');
  for (var i = 0; i < pages; i++) {
    var message = 'You read page ' + i;
    console.log(message);
  }
}

read(400);


// The style guide recommends using two spaces to indent code and surrounding operators with spaces:
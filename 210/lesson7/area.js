//For this exercise, we'll represent rectangles as Arrays with two elements: a height and a width.

//Write a Function, totalArea, that takes an Array of rectangles as an argument. 
//The Function should return the total area covered by all of the rectangles.


// input: array: [height, width]
// output: total area
// 
//    reduce to sum of e.[0] * e.[1] 
//    return the sum
// 

function totalArea(list) {
  return list.reduce(function(sum, current) {
    return sum + current[0] * current[1]; 
  }, 0);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles)); // 141



// The solution should first map the two dimensional array into a single dimensional array of rectangle areas, then reduce this array into a single number by adding up all the areas.

// function totalArea(rectangles) {
//   var areas = rectangles.map(function(rectangle) {
//     return rectangle[0] * rectangle[1];
//   });

//   return areas.reduce(function(sum, area) {
//     return sum + area;
//   });
// }


//Now, write a second Function, totalSquareArea. This Function should be like totalArea, except it should only count the area of a rectangle if it is a square.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rect) {
    return rect[0] === rect[1];
  });
  
  var areas = squares.map(function(rect) {
    return rect[0] * rect[1];
  });

  return areas.reduce(function(sum, area) {
    return sum + area;
  }, 0);
}

console.log(totalSquareArea(rectangles)); // 121


//The solution should first filter to select out the squares, 
//then map the result array into an array of areas, 
//then reduce this array into a single number by adding up all the areas.

// function totalSquareArea(rectangles) {
//   var squares = rectangles.filter(function(rectangle) {
//     return rectangle[0] === rectangle[1];
//   });

//   var areas = squares.map(function(rectangle) {
//     return rectangle[0] * rectangle[1];
//   });

//   return areas.reduce(function(sum, area) {
//     return sum + area;
//   });
// }
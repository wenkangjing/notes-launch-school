/**
 * 
 * transfer a 2D matrix
 * from
 *   [
 *      [1,2,3], 
 *      [1,2,3], 
 *      [1,2,3]
 *   ]
 * to
  *  [
  *     [1,1,1], 
  *     [2,2,2], 
  *     [3,3,3]
  *  ]
 * 
 */

// using array[0].map for columnIndex
function transpose(array) {
  return array[0].map(function(col, columnIdx) {
    return array.map(function(row) {
      return row[columnIdx];
    });
  });
}
/*

Write a function printMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

printMultiples(17);
// output (5x, 3x and 1x)
85
51
17

printMultiples(21);
// output (3x and 1x)
63
21

*/ 

// descending 
// multiples
// odd only
// 0 -100
function printMultiples_1(num) {
  for (var i = 99; i >= 0; i -= 2) {
    if (i % num === 0) {
      console.log(i);
    }
  }
}

// set step is num
function printMultiples_2(num) {
  var muptiple = Math.floor(100 / num) * num;
  while (muptiple > 0) {
    if (muptiple % 2 !== 0) {
      console.log(muptiple);
    }
    muptiple -= num;
  }
}

function printMultiples_3(num) {
   var muptiple = Math.floor(100 / num) * num;
   for (var i = muptiple; i > 0; i -= num) {
     if (i % 2 !== 0) {
       console.log(i);
     }
   }
}

function largestMuptile(num) {
  if (!num) {
    return 0;
  }
  return Math.floor(100 / num) * num;
}

function printMultiples(num) {
  for (var i = largestMuptile(num); i > 0; i -= num) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printMultiples(17);

printMultiples(21);
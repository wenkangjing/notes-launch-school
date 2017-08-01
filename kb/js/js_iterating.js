//
// iterator, next() return  done, value
//
function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

//
// generator
// 

function* largeGen() {
  let i = 0;
  while(true) {
    yield i++;
  }
}

let large = largeGen();
console.log(large.next());
console.log(large.next());
console.log(large.next());


// create a iterator object
// We used the yield keyword to pause the generator function twice and send values to the caller. 
function *myGenerator() {
  
  // 1
  console.log(1);
  let a = yield 'first yield';

  // 2
  console.log("a", a); 
  let b = yield 'second yield';
  
  // 3
  console.log("b", b);
  return 'hi';
}

// the myGenerator hasn't exxcuted, just return a iterator object
let iterator = myGenerator(); 

// next() -> start execute myGenerator until the 1st yield
let firstYield = iterator.next(); // { value: 'first yield', done: false }
console.log(firstYield);

// execute myGenerator until the 2nd yield
let secondYield = iterator.next(); // { value: 'first yield', done: false }
console.log(secondYield);

// execute myGenerator until the 3rd yield
let thirdYield = iterator.next(); // { value: 'first yield', done: false }
console.log(thirdYield);


// 
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();


//
// use for...of to iterate a iterable objects
//

// iterating a string
for (let x of 'a\uD83D\uDC0A') {
    console.log(x);
}

// iterating a Map object
let map = new Map().set('a', 1).set('b', 2);
for (let pair of map) {
    console.log(pair);
}

// iterating a Set object
let set = new Set().add('a').add('b');
for (let x of set) {
    console.log(x);
}

// iterating arguments
function printArgs() {
    for (let x of arguments) {
        console.log(x);
    }
}
printArgs('a', 'b', 'c', 'd');

var sum = [1,2,3].reduce((sum, c) => {return sum + c}, 0);
console.log(sum);


// make plain object iterables
function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);
    for (let propKey of propKeys) {
        // `yield` returns a value and then pauses
        // the generator. Later, execution continues
        // where it was previously paused.
        yield [propKey, obj[propKey]];
    }
}

let jane = { first: 'Jane', last: 'Doe' };
for (let [key,value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}

// in depth
function* gen() {
  yield "start";
  for (var i = 0; i < 3; i++) {
    yield i;
  }
  yield "end";
}

var it = gen();
console.log(it.next()); // start
console.log(it.next()); // 0
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next()); // end
console.log(it.next()); // undefine true
// equavelent
it = gen();
for (let v of it) {
  console.log(v);
}


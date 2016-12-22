// // implicity context
// // example 1
// var object = {
//   foo: function() {
//     return 'this here is: ' + this;
//   },
// };

// object.foo();              // "this here is: [object Object]"

// bar = object.foo;
// bar();                // "this here is: [object Window]"


// explicity context
// example 1
/*

var a = 1;

var object = {
  a: 'hello',
  b: 'world',
};

function foo() {
  console.log(this);
  return this.a;
}

foo();                  // 1 => context is global, the caller
foo.call(object);       // 'hello' => context is object. 
*/

// example 2
/*

var iPad   = {
  name: 'iPad',
  price: 40000,
};
var kindle = {
  name: 'kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(lineNumber + ': ' + this.name + ', ' + this.price / 100 + ' dollars' + punctuation);
}

printLine.call(iPad, 1, ';');        // "1: iPad, 400 dollars;"
printLine.call(kindle, 2, '.');      // "2: kindle, 300 dollars."

*/

// binding the context
// example 3 
/*
var a = 'goodbye';

var object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    console.log(this);
    return this.a + ' ' + this.b;
  },
};

var bar = object.foo; 
bar();                                // 'goodbye undefined' because bar is in global context, 

var baz = object.foo.bind(object);    // permanent binding
baz();                                // 'hello world'

var object2 = {
  a: 'hi',
  b: 'there',
};

baz.call(object2); //'hello world' - the function's "this" is permanently bound to "object"
*/

// example 4
/*

var greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    var currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  },
};

greetings.greeting('Jose');
greetings.greeting('Juan');

var spanishWords = {
  morning: 'Buenos días, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buena noches, ',
}

var spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');
spanishGreeter('Juan');
*/



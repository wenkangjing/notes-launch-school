// Write a function that extends an object (destination object) with contents from multiple objects (source objects).


function extend(destination) {
  var destination = destination || {};

  for (var i = 1; i < arguments.length; i++) {
    for(var prop in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], prop)) { // own property only
        destination[prop] = arguments[i][prop];
      }
    }
  }

  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe',
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // 1
console.log(object.sayHello());   // Hello, Joe
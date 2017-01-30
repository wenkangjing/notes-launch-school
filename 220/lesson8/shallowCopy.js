/*
Write a function to provide a shallow copy of an object. The copied object should share the same prototype chain as the original object, and it has the same own properties that return the same values or objects when accessed. Use the code below to verify your implementation:
*/

function shallowCopy(object) {
  var copy =   Object.create(Object.getPrototypeOf(object));
  for (var prop in object) {
    //if (object.hasOwnProperty(prop)) { error if hasOWnPRoperty override
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      copy[prop] = object[prop];
    }
  }

  return copy;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log("c is " + this.c);
}

var baz = shallowCopy(bar);
console.log(baz.a);       // 1
baz.say();                // c is 3
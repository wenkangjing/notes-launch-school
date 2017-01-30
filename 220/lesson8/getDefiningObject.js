// Write a function that returns the object on a given object's prototype chain where a property is defined. See the example code below:

function getDefiningObject(object, propKey) {
  while (!!object && !object.hasOwnProperty(propKey)) {
    //object = object.__proto__; non standard property
    object = Object.getPrototypeOf(object);
  }
  return object;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // true
console.log(getDefiningObject(qux, 'e'));             // null


/*
You'll need to traverse up the prototype chain of the object and for each object, see if the property is defined, with the hasOwnProperty method. Object.prototype is at the top of the prototype chain, if you can't find the property there and keep using Object.getPrototypeOf to get its prototype, you'll get null and that's what you should return.
*/
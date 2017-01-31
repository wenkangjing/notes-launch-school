/*
make it works without new keyword
*/

// Vehicle
function Vehicle() {
  // works without new keyword
  if (!(this instanceof Vehicle)) {
    return new Vehicle();
  }
  return this;
}

Vehicle.prototype = {
  doors: 4,
  wheels: 4
}

var sedan = new Vehicle();
var coupe = new Vehicle();

console.log(sedan);
console.log(sedan.hasOwnProperty("doors")); // false

coupe.doors = 2;
console.log(coupe);
console.log(coupe.hasOwnProperty("doors")); // true

// Coupe - sub
function Coupe() {
  if (!(this instanceof Coupe)) {
    return new Coupe();
  }
  return this;
}
Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;

var crx = new Coupe();
console.log(crx);
console.log(crx instanceof Coupe); // true
console.log(sedan instanceof Coupe); // false
console.log(sedan instanceof Vehicle); // true

// Motorcyle
function Motorcycle() {
  var o = this;
  if (!(o instanceof Motorcycle)) {
    o = new Motorcycle();
  }
  o.doors = 0;
  o.wheels = 2;

  return o;
}

Motorcycle.prototype = new Vehicle();
var monster = new Motorcycle();
console.log(monster);

// function Motorcycle() {
//   this.prototype = new Vehicle();
//   this.prototype.constructor = this;
// }

// var coupe = new Coupe(),
//     motorcycle = new Motorcycle();

// console.log(coupe instanceof Coupe);
// console.log(motorcycle instanceof Motorcycle);


// function Sedan() {
//   return Object.create({}, Vehicle.prototype);
// }
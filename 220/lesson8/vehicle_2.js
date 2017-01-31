/*
inital state inside constructor
owned by the created object instand of prototype object 
not shared
*/

// Vehicle
function Vehicle() {
  this.doors = 4;
  this.wheels = 4;
}

var sedan = new Vehicle();
var coupe = new Vehicle();

console.log(sedan);
console.log(sedan.hasOwnProperty("doors")); // false

coupe.doors = 2;
console.log(coupe);
console.log(coupe.hasOwnProperty("doors")); // true

// Coupe 
function Coupe() {}
Coupe.prototype = new Vehicle(); // pointing to the object that delegated to
Coupe.prototype.doors = 2;
console.log(Coupe.prototype instanceof Vehicle) // true

var crx = new Coupe();
console.log(crx);
console.log(crx instanceof Coupe); // true
console.log(crx instanceof Vehicle); // true
console.log(sedan instanceof Coupe); // false

// Motorcyle
function Motorcycle() {}
Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.doors = 0; 
Motorcycle.prototype.wheels = 2;

var monster = new Motorcycle();
console.log(monster);
console.log(monster);
console.log(monster instanceof Motorcycle); // true
console.log(monster instanceof Vehicle); // true
console.log(monster instanceof Coupe); // false







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
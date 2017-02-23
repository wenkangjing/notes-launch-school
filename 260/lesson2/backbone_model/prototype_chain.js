// to confirm the prototype chain

console.log("Backbone.Model.__proto__ === Function.prototype", Backbone.Model.__proto__ === Function.prototype);
var Car = Backbone.Model.extend({
  defaults: {
    doors: 4,
    wheels: 4
  },
  setFullName: function() {
    this.set("full_name", this.get("make") + " " + this.get("model"));
  }
});
console.log("Car.__proto__ === Function.prototype", Car.__proto__ === Function.prototype);

var my_car = new Car();
//console.log("my_car", my_car.toJSON());
console.log("my_car instanceof Car", my_car instanceof Car);
console.log("my_car.__proto__ === Car.prototype", my_car.__proto__ === Car.prototype);
console.log("Car.prototype.constructor === Car", Car.prototype.constructor === Car);

var Ford = Car.extend({
  defaults: function() {
    return _.extend({
      make: "Ford"
    }, Car.prototype.defaults);
  }
});
console.log("Ford.__proto__ === Function.prototype", Ford.__proto__ === Function.prototype);
var my_ford = new Ford();
//console.log("my_ford", my_ford.toJSON());
console.log("my_ford instanceof Ford", my_ford instanceof Ford);
console.log("my_ford.__proto__ === Ford.prototype", my_ford.__proto__ === Ford.prototype);
console.log("Ford.prototype.constructor === Ford", Ford.prototype.constructor === Ford);

// chain
console.log("Ford.prototype.__proto__ === Car.prototype", Ford.prototype.__proto__ === Car.prototype);
console.log("Car.prototype.__proto__ === Backbone.Model.prototype", Car.prototype.__proto__ === Backbone.Model.prototype);

console.log("my_ford.__proto__ === Ford.prototype", my_ford.__proto__ === Ford.prototype);
console.log("my_ford.__proto__.__proto__ === Car.prototype", my_ford.__proto__.__proto__ === Car.prototype);
console.log("my_ford.__proto__.__proto__.__proto__ === Backbone.Model.prototype", my_ford.__proto__.__proto__.__proto__ === Backbone.Model.prototype);


function Person() { return this; }
function Kid() { return this; }
Kid.prototype = new Person();

var a_kid = new Kid();
var a_person = new Person();
console.log(Kid.__proto__ === Function.prototype)
var DogObject = {
  say: function() {
    console.log(this.name + ' says Woof!');
  },
  run: function() {
    console.log(this.name + ' runs away.');
  }
};

var fido  = Object.create(DogObject);
fido .name = "Fido";
fido .say();
fido .run();

fido.__proto__ === DogObject // true
DogObject.__proto__ === Object.prototype // true

var DogFunction = function() {};

DogFunction.prototype.say = function() {
  console.log(this.name + ' says Woof!');
}

DogFunction.prototype.run = function() {
  console.log(this.name + ' runs away.');
}

var spot = new DogFunction();
spot .name = "Spot";
spot .say();
spot .run();

spot.__proto__ === DogFunction.prototype // true
DogFunction.__proto__ === Function.prototype // true
Function.__proto__ === Object.__proto__ //  true

DogFunction.prototype.constructor === DogFunction // true
DogFunction.prototype === spot.__proto__ // true
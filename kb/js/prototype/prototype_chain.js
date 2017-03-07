/*
Thank you very much the annotation, looks really good except this part:

> Depending on the whether it is critical to "know" that an object is created from the Honda constructor or the Vehicle constructor, the statement "Honda.constructor = Honda" might not be necessary. If it's important then there is a need to re-assign the value of the constructor property of the Honda constructor function.
*/
function Honda() {};
function Vehicle() {};

Honda.prototype = Object.create(Vehicle.prototype);
var a_honda = new Honda();

console.log("Is a_honda instanceof Honda?", a_honda instanceof Honda); // true
console.log("Is a_honda instanceof Vehicle?", a_honda instanceof Vehicle); // true
console.log(Honda.constructor); // [Function: Function]
console.log(Vehicle.constructor); // [Function: Function]

Honda.constructor = Honda;
var another_honda = new Honda();

console.log("Is another_honda instanceof Honda?", another_honda instanceof Honda); // true
console.log("Is another_honda instanceof Vehicle?", another_honda instanceof Vehicle); // true
console.log(Honda.constructor); // { [Function: Honda] constructor: [Circular] }
console.log(Vehicle.constructor); // [Function: Function]

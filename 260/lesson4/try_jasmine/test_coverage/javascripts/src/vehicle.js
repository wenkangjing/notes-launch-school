function Vehicle (options) {
  if (!(this instanceof Vehicle)) {
    return new Vehicle(options);
  }
  if (!!options) {
    this.make = options.make;
    this.model = options.model;  
  }
}

Vehicle.prototype = {
  toString: function() {
    return this.make + " " + this.model;
  },
  honkHorn: function() {
    return "Beep beep!";
  }
};
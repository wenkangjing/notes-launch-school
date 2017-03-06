function Honda (model) {
  if (this.verify(model)) {
      this.make = "Honda";
      this.model = model;
      this.price = this.getPrice(this.model);
    } else {
      throw new Error("Model " + this.model + " does not exist");
    }
}

//
// identical to using `new`
//
Honda.prototype = {
  verify: function(model) {
    var model_list = this.getModels();
    return model_list.indexOf(model) !== -1;
  },
  getPrice: function(model) {
    var price = undefined,
        index = this.getModels().indexOf(this.model);
    if (index !== -1) {
      price = [16500,14500,21000,15800,12000,13100,16000,18100,22500,19300][index];
    }
    return price;
  },
  getModels: function() {
    return ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
  }
};
Honda.prototype.__proto__ = Vehicle.prototype;
Honda.prototype.constructor = Vehicle;
//Honda.constructor = Honda;

//
// use `new`, better solution
//
/*
Honda.prototype = new Vehicle();
Honda.prototype.verify = function() {
  var model_list = this.getModels();
  if (model_list.indexOf(this.model) !== -1) {
    throw new Error("Model " + this.model + " does not exist");
  } else {
    this.make = "Honda";
    this.model = this.model;
  }
}
Honda.prototype.getPrice = function(model) {
  var price = undefined,
      index = this.getModels().indexOf(this.model);
  if (index !== -1) {
    price = [16500,14500,21000,15800,12000,13100,16000,18100,22500,19300][index];
  }
  return price;
}
Honda.prototype.getModels = function() {
  return ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
}
*/

function Honda (model) {
  this.model = model;
}

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


/*
Honda.prototype = {
  verify: function() {
    var model_list = this.getModels();
    if (model_list.indexOf(this.model) !== -1) {
      throw new Error("Model " + this.model + " does not exist");
    } else {
      this.make = "Honda";
      this.model = this.model;
    }
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

Honda.prototype.constructor = Vehicle;
*/
describe("Vehicle constructor", function() {
  beforeEach(function(){
    this.vehicle = new Vehicle({
      make: "Ford",
      model: "CR4"
    });
  });

  xit("sets the make and model properties when an object is passed in", function() {
    expect(this.vehicle).not.toBeNull();
    expect(this.vehicle.toString).not.toBeNull();
    expect(this.vehicle.honkHorn).not.toBeNull();
  });
  xit("returns a concatenated string with make and model", function() {
    expect(this.vehicle.toString()).toEqual("Ford CR4");
    this.vehicle.model = "XYZ";
    expect(this.vehicle.toString()).toEqual("Ford XYZ");
    this.vehicle.make = "Toyota";
    expect(this.vehicle.toString()).toEqual("Toyota XYZ");
  });
  xit("eturns a message when the horn is honked", function() {
    expect(this.vehicle.honkHorn()).toMatch("Beep beep!");
  });
});
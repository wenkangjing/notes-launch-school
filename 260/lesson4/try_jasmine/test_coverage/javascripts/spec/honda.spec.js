describe("Honda constructor", function() {
  
  it("inherits the Vehicle prototype", function() {
    var honda = new Honda("Civic");
    expect(honda.toString).not.toBeNull(); 
  });

  it("sets the model property when a valid model is passed in", function() {
     var honda = new Honda("Civic");
     expect(honda.make).toEqual("Honda");
     expect(honda.model).toEqual("Civic");
     expect(honda.toString()).toMatch("Honda Civic");
  });

  it("throws an error if an invalid model is passed in", function() {
    // Create a local function that you can pass to the expect function that will create a new Honda with an invalid model. Use the toThrowError assertion to check for the presence of the invalid model's name in the error message.
    var makeInvalidCar = function() {
      new Honda("ABC")
    };
    expect(makeInvalidCar).toThrowError(Error, /does not exist/);
  });
  
  it("returns a list of valid models", function() {
    //Check both that a length property on the returned array is present using toBeDefined and that one of the expected models is present in the array using toContain
    var honda = new Honda("Civic");
    expect(honda.getModels()).toContain("Civic");
    expect(honda.getModels()).toContain("CR-V");
    expect(honda.getModels()).not.toContain("empty");
  });
  
  it("calls getPrice when a new car is created", function() {
    //Create a spy on the getPrice method on the Honda object. When you create a new Honda afterwards, the spy should register that the getPrice method was called, and that it was called with the model you gave to the constructor.
    spyOn(Honda.prototype, 'getPrice');
    var car = new Honda("Accord");
    expect(Honda.prototype.getPrice).toHaveBeenCalled();

  });
  
  it("returns a price for the passed in model", function() {
    //Assert that the price be greater than zero
    var honda = new Honda("Accord");
    expect(honda.verify.bind(honda)).not.toThrowError();
    expect(honda.getPrice()).toEqual(16500);
  });

  it("returns a price less than 15000 when a Civic is created", function() {
    var honda = new Honda("Civic");
    expect(honda.verify.bind(honda)).not.toThrowError();
    expect(honda.getPrice()).toEqual(14500);
    
  });
  
  it("returns a price greater than 10000 when a CR-Z is created", function() {
    var honda = new Honda("CR-Z");
    expect(honda.verify.bind(honda)).not.toThrowError();
    expect(honda.getPrice()).toEqual(12000);
  });
});
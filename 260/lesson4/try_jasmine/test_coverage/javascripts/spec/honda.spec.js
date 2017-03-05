describe("Honda constructor", function() {
  
  it("inherits the Vehicle prototype", function() {
    var honda = new Honda("ABC");
    expect(honda.toString()).toMatch("Honda ABC");
    console.log(honda);
  });

  it("sets the model property when a valid model is passed in", function() {
     var honda = new Honda("Civic");
     expect(honda.make).toMatch("Honda");
     expect(honda.model).toMatch("Civic");
     expect(honda.toString()).toMatch("Honda Civic");
  });

  /*
  it "throws an error if an invalid model is passed in"
  Create a local function that you can pass to the expect function that will create a new Honda with an invalid model. Use the toThrowError assertion to check for the presence of the invalid model's name in the error message.
  it "returns a list of valid models"
  Check both that a length property on the returned array is present using toBeDefined and that one of the expected models is present in the array using toContain
  it "calls getPrice when a new car is created"
  Create a spy on the getPrice method on the Honda object. When you create a new Honda afterwards, the spy should register that the getPrice method was called, and that it was called with the model you gave to the constructor.
  it "returns a price for the passed in model"
  Assert that the price be greater than zero
  it "returns a price less than 15000 when a Civic is created"
  it "returns a price greater than 10000 when a CR-Z is created"
  */
});
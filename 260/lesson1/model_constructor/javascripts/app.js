var Car = ModelConstructor({
      change: render
    }),
    bmw = new Car({
      make: "BMW",
      model: "328i"
    });

bmw.addCallback(function() {
  console.log("another callback");
});

var Truck = new ModelConstructor({
  change: function() {
    console.log("I'm a truck!");
  }
});
var sedan = new Car({ doors: 4 });
sedan.set("engine", "3.0l V6"); // Logs "I'm a car!"

var coupe = new Car({ doors: 2 });
coupe.set("engine", "1.4l I4"); // Logs "I'm a car!"

var pickup = new Truck({ capacity: "3/4 ton" });
pickup.set("engine", sedan.get("engine")); // Logs "I'm a truck!"


render();

$("form").on("submit", function(e) {
  e.preventDefault();
  var make = $(this).find("[name=make]").val(),
      model = $(this).find("[name=model]").val();

  if (make !== bmw.attributes.make) {
    bmw.set("make", make);
  }
  if (model !== bmw.attributes.model) {
    bmw.set("model", model);
  }
});

function render() {
  $("#make").text(bmw.get("make"));
  $("#model").text(bmw.get("model"));
}

var templates = {};
$("[type='text/x-handlebars']").each(function() {
  var $template = $(this);
  templates[$template.attr("id")] =  Handlebars.compile($template.html());
});

var product_json = {
  "name": "Bananas",
  "date": (new Date()).valueOf(),
  "description": "A fruit, usually yellow or green, with a soft flesh and a thick rind that is peeled off before consuming.",
  "categories": ["fruit", "berry", "starch", "potassium"]
};

var ProductModel = Backbone.Model.extend({
  initialize: function() {
    var stamp = moment(parseInt(this.get("date"), 10));
    this.set("datetime", stamp.format());
    this.set("date_formatted", stamp.format("LLL"));
    this.on("change", renderModel);
  }
});

function renderModel(model) {
  $("article").html(templates.product(model.toJSON()));
  $("form fieldset").html(templates.form(model.toJSON()));
  $("form").on("submit", function(e) {
    e.preventDefault();
    var $f = $(this),
        inputs = $f.serializeArray(),
        attrs = {};
        inputs.forEach(function(input) {
          attrs[input.name] = input.value;
        });
        attrs.date = new Date().valueOf();
        var stamp = moment(parseInt(attrs.date, 10));
        attrs.datetime = stamp.format();
        attrs.date_formatted = stamp.format("LLL");
    model.set(attrs);
  });
}

var product = new ProductModel(product_json);
renderModel(product);

var templates = {},
    items_json = [{
  name: "Bananas",
  quantity: 3
}, {
  name: "Apples",
  quantity: 4
}];

$("[type='text/x-handlebars']").each(function() {
  var $t = $(this);
  templates[$t.attr("id")] = Handlebars.compile($t.html());
});

var ItemModel = Backbone.Model.extend({

});
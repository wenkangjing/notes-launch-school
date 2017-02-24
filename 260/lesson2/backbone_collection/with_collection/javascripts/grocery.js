var items_json = [{
  name: "Bananas",
  quantity: 3
}, {
  name: "Apples",
  quantity: 4
}];



var items_template = Handlebars.compile($("#items").html());
Handlebars.registerPartial("item", $("#item").html());

var ItemModel = Backbone.Model.extend({
  initialize: function(obj) {
    this.set("name", obj.name);
    this.set("quantity", obj.quantity);
    !obj.id && this.set("id", ++lastId);
  }
});

var ItemsModel = Backbone.Model.extend({
  model: ItemModel,
  lastId: 0,
});


var items = {
  collection: [],
  create: function(obj) {
    var item = new ItemModel(obj);
    this.collection.push(item);
  },
  seedCollection: function() {
    items_json.forEach(this.create.bind(this));
  },
  clear: function() { this.collection = []; },
  delete: function(e) {
    e.preventDefault();
    var id = $(e.target).data("id"),
        model = _.findWhere(this.collection, {id: id});
    this.collection = _.without(this.collection, model)
    this.render();
  },
  sortBy: function(prop) {
     _.sort(this.collection, prop);
  },
  render: function() {
    $("table tbody").html(items_template({items: this.collection}));
  },
  bind: function() {
    $("table").on("click", "a", this.delete.bind(this));
  },
  init: function() {
    items.seedCollection();
    items.bind();
    items.render();
  }
};

// sort
$("table th").on("click", function(e) {
  e.preventDefault();
  var column = $(e.target).data("prop"),
      plain_items = items.collection.map(function(it) {
        return it.toJSON();
      });
  plain_items = _.sortBy(plain_items, column);
  items.collection = plain_items.map(function(it) {
    return new ItemModel(it);
  })
  items.render();
});

// delete all
$("p").on("click", "a", function(e) {
  items.clear();
  items.render();
});    

// submit
$("form").on("submit", function(e) {
  e.preventDefault();
  var $f = $(this),
      inputs = $f.serializeArray(),
      obj = {};
  inputs.forEach(function(input) {
    obj[input.name] = input.value;
  });
  items.create(obj);
  items.render();
  this.reset();
});

items.init();




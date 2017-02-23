var items_json = [{
  name: "Bananas",
  quantity: 3
}, {
  name: "Apples",
  quantity: 4
}];



var lastId = 0;
var items_template = Handlebars.compile($("#items").html());
Handlebars.registerPartial("item", $("#item").html());

var ItemModel = Backbone.Model.extend({
  initialize: function(obj) {
    this.set("name", obj.name);
    this.set("quantity", obj.quantity);
    !obj.id && this.set("id", ++lastId);
  }
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
  delete: function(id) {
    items.collection = items.collection.filter(function(it) {
      return it.id !== id;
    });
  },
  sortBy: function(prop) {
     _.sort(this.collection);
  },
  render: function() {
    $("table tbody").html(items_template({items: this.collection}));
  },
  bind: function() {
    $("table").on("click", "a", function(e) {
      e.preventDefault();
      var id = $(e.target).data("id");

      renderItems(items.collection);
    });

    $("p").on("click", "a", function(e) {
      items.clear();
      renderItems([]);
    });    
    $("table th").on("click", function(e) {
      e.preventDefault();
      var column = $(e.target).data("prop"),
          plain_items = items.map(function(it) {
            return it.toJSON();
          });
      plain_items = _.sortBy(plain_items, column);
      items = plain_items.map(function(it) {
        return new ItemModel(it);
      })
      renderItems(items);
    });

    $("form").on("submit", function(e) {
      e.preventDefault();
      var $f = $(this),
          inputs = $f.serializeArray(),
          obj = {};
      inputs.forEach(function(input) {
        obj[input.name] = input.value;
      });
      items.push(new ItemModel(obj));
      renderItems(items);
    });
  }
};

items.seedCollection();
items.render();




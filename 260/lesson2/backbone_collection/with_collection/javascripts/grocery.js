var App = {
  removeItem: function(e) {
    e.preventDefault();
    var model = this.items.get(+$(e.target).attr("data-id"));
    this.items.remove(model);
  },
  removeAll: function(e) {
    e.preventDefault();
    this.items.reset();
  },
  addItem: function(e) {
    e.preventDefault();
    var $f = $("form"),
        inputs = $f.serializeArray(),
        attrs = {};

    inputs.forEach(function(input) {
      attrs[input.name] = input.value;
    });

    this.items.add(attrs);
    $f.get(0).reset();
  },
  sortItems: function(e) {
    e.preventDefault();
    var prop = $(this).attr("data-prop");
    this.items.comparator = prop;
    this.items.sort();
  },
  bindEvents: function() {
    $("p a").on("click", this.removeAll.bind(this));
    $("table").on("click", "a", this.removeItem.bind(this));
    $("form").on("submit", this.addItem.bind(this));
    $("th").on("click", this.sortItems.bind(this));
  },
  cacheTemplate: function() {
    this.template = Handlebars.compile($("#items").html());
    Handlebars.registerPartial("item", $("#item").html());
  },
  init: function() {
    this.items = new ItemCollection(items_json);
    this.cacheTemplate();
    this.bindEvents();
    this.items.render();
  }
}

var ItemModel = Backbone.Model.extend({
  idAttribute: "id",
  initialize: function(obj) {
    this.collection.incrementID();
    this.set("id", this.collection.last_id);
  }
});

var ItemCollection = Backbone.Collection.extend({
  model: ItemModel,
  last_id: 0,
  incrementID: function() {
    this.last_id++;
  },  
  initialize: function() {
    this.on("remove reset add sort", this.render);
    //this.on("add ", this.sortBy);
  },
  render: function() {
    $("table tbody").html(App.template({items: this.models}));
  },
});

App.init();
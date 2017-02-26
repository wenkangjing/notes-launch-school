var App = {
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
    var prop = $(e.target).attr("data-prop");
    this.items.comparator = prop;
    this.items.sort();
  },   
  bindEvents: function() {
    // out of view.el
    $("p a").on("click", this.removeAll.bind(this));
    $("form").on("submit", this.addItem.bind(this));
    $("table th").on("click", this.sortItems.bind(this));
  },
  init: function() {
    this.items = new ItemCollection(items_json);
    this.view = new ItemsView({ collection: App.items });
    this.bindEvents();
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
});

var ItemsView = Backbone.View.extend({
  el: "tbody",
  template:  Handlebars.compile($("#items").html()),
  events: {
    "click a": "removeItem",
  },
  removeItem: function(e) {
    e.preventDefault();
    var id = +$(e.target).attr("data-id");
    var model = this.collection.get(id);
    this.collection.remove(model);
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON()
    }));
    return this;
  },
  initialize: function() {
    Handlebars.registerPartial("item", $("#item").html());
    this.listenTo(this.collection, 'remove reset add sort rerender', this.render)
    this.render();
  }  
});



App.init();
var App = {
  $el: $("main"),
  $todos: $("#todos"),
  addItem: function(e) {
    e.preventDefault();
    var name = $(e.target).find("#todo_name").val(),
        model, 
        view;
    
    if (!name) { return; }

    model = this.Todos.add({ 
      name: name, 
      complete: false 
    });
    view = new this.TodoView({ model: model });
    view.$el.appendTo(this.$todos);
    e.target.reset();
  },  
  clearComplete: function(e) {
    e.preventDefault();
    var completed = this.Todos.filter(function(model) {
      return model.attributes.complete;
    });
    completed.forEach(function(model) {
      this.Todos.remove(model);
    });
  },
  bindEvents: function() {
    this.$el.find("form").on("submit", this.addItem.bind(this));
    this.$el.find("#clear").on("click", this.clearComplete.bind(this));
  },
  init: function() {
    this.Todos = new App.TodosModel([{
        name: "abc",
        complete: false,
      }, {
        name: "xyz",
        complete: true
      },
    ]);
    this.Todos.models.forEach(function(m) {
      var t = new App.TodoView({ model: m });
      this.$todos.append(t.$el);
    }, this);
    this.bindEvents();
  },
};

App.TodoModel = Backbone.Model.extend({ ///////////////// Todo
  idAttribute: "id",
  initialize: function(obj) {
    this.collection.incrementID();
    this.set("id", this.collection.last_id);
  }
});

App.TodosModel = Backbone.Collection.extend({ //////// Todos Collection
  model: App.TodoModel,
  last_id: 0,
  incrementID: function() {
    this.last_id++;
  },
  initialize: function() {

  }
});

App.TodoView = Backbone.View.extend({  /////////////// Todo view
  tagName: "li", 
  template: Handlebars.compile($("#todo").html()),
  edit_template: Handlebars.compile($("#todo_edit").html()),
  events: {
    "click a.toggle": "toggleItem",
    "click": "showEdit", // selector is not needed, tagName is li
  },
  toggleItem: function(e) {
    e.preventDefault();  // or return false at the end;
    e.stopPropagation();
    var idx = +this.$el.attr("data-id"),
        model = App.Todos.get(idx);
    model.set("complete", !model.get("complete"));
    this.$el.toggleClass("complete", model.get("complete"));
  },  
  showEdit: function(e) {
    e.preventDefault();
    var idx = +this.$el.attr("data-id"),
        $editor = $(this.edit_template(this.model.attributes));
    this.$el.after($editor);
    this.$el.remove();
    $editor.find("input").on("blur", this.hideEdit.bind(this));
  },
  hideEdit: function(e) {
    e.preventDefault();
    var $input = $(e.currentTarget),
        $li = $input.closest("li"),
        name = $input.val();
    this.model.set("name", name);
    $li.after(this.$el);
    $li.remove();
    $input.off(e);
    this.delegateEvents();
  },
  render: function() {
    this.$el.attr("data-id", this.model.get("id"));
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "all", this.render);
  }
});

App.init();
var template_edit_form = Handlebars.compile($("#todo_edit").html()),
    template_todo = Handlebars.compile($("#todo").html());

var App = {
  $el: $("main"),
  $todos: $("#todos"),
  newTodo: function(e) {
    e.preventDefault();
    var name = $(e.target).find("#todo_name").val(),
        model, 
        view;
    
    if (!name) { return; }

    model = this.list.add({ 
      name: name, 
      complete: false 
    });
    view = new this.TodoView(model);
    view.$el.appendTo(this.$todos);
    
    e.target.reset();
  },
  editTodo: function(e) {
    e.preventDefault();
    var $li = $(e.target).closest("li"),
        idx = +$li.attr("data-id"),
        model = App.list.get(idx);
     $li.html(template_edit_form(this.model.attributes));
     $li.on("blur", "input", App.hideEdit.bind(App));
  },
  hideEdit: function(e) {
    e.preventDefault();
    var $li = $(e.target).closest("li"),
        idx = +$li.attr("data-id"),
        model = App.list.get(idx);
    model.set("name", $li.find("input").val());
    $(e.target).off(e);
  },
  toggleComplete: function(e) {
    e.preventDefault();  // or return false at the end;
    var $li = $(e.target).closest("li"),
        idx = +$li.attr("data-id"),
        model = App.list.get(idx);
    model.set("complete", !model.get("complete"));
    $li.toggleClass("complete", model.get("complete"));
  },
  clearComplete: function(e) {
    e.preventDefault();
    var completed = App.list.models.filter(function(model) {
      return model.attributes.complete;
    });
    completed.forEach(function(model) {
      App.list.remove(model);
    });
  },
  bind: function() {
    this.$el.find("form").on("submit", this.newTodo.bind(this));
    this.$el.find("#clear").on("click", this.clearComplete.bind(this));
  },
  init: function() {
    this.bind();
    this.list.set([ {
        name: "abc",
        complete: false,
      }, {
        name: "xyz",
        complete: true
      },
    ]);

    this.list.models.forEach(function(model) {
      var view = new App.TodoView(model);
      view.$el.appendTo(this.$todos);
    }, this);
  },
};

App.Todo = new ModelConstructor();
App.Todos = new CollectionConstructor();
App.list  = new App.Todos(App.Todo);
App.TodoView = new ViewConstructor({
  tag_name: "li",
  template: template_todo,
  events: {
    "dblclick": App.editTodo,
    "click a.toggle": App.toggleComplete,
  }
});

App.init();
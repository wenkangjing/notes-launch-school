var template_edit_form = Handlebars.compile($("#todo_edit").html()),
    template_todo = Handlebars.compile($("#todo").html());

var Todo = new ModelConstructor();
var Todos = new CollectionConstructor();
var TodoView = new ViewConstructor({
      tag_name: "li",
      template: template_todo,
      events: {
        "dblclick": function() {
          this.$el.html(template_edit_form(this.model.attributes));
        },
        "click li": function(e) {
          if (e.target instanceof HTMLLIElement) {
            e.preventDefault();
            this.model.set("name", $("#edit_todo input").val());
          }
        },
        "keydown": function(e) {
          if (e.which === 13) {
            e.preventDefault();
            this.model.set("name", $(e.target).val());
            this.$el.find("#edit_todo").remove();
          }
        },
        "click .toggle": function(e) {
          this.$el.toggleClass("complete");
        },
      }
    });

var $todos = $("#todos");
var list  = new Todos(Todo);
list.set([ {
    name: "abc"
  }, {
    name: "xyz"
  },
]);

list.models.forEach(function(model) {
  var view = new TodoView(model);
  $todos.append(view.$el);
});

$("#todo_name").on("keydown", function(e) {
  if (e.which === 13) {
    e.preventDefault();
    var name = $(e.target).val();
    model = list.add({name: name});
    $todos.append((new TodoView(model)).$el);
    list.reset();
    $(e.target).val("")
  }
});

$("#clear").on("click", function(e) {
  $todos.find("li.complete").remove();
});
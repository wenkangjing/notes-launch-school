var templates = {},
    data,
    controller, 
    view;

//
// Helper functions
//
var generateId = function() {
  var last_id = 1;
  return function() {
    return last_id++;
  }
}();

function Todo(obj) {
  obj = obj || {};

  if (!(this instanceof Todo)) {
    return new this;
  }
  if (obj.id) {
    this.id = +obj.id;
  } else {
    this.id = generateId();
  }
  this.title       = obj["title"];
  this.day         = obj["day"]         || "Day";
  this.month       = obj["month"]       || "Month";
  this.year        = obj["year"]        || "Year";
  this.description = obj["description"] || "";
  this.completed   = obj["completed"]   || false;
  this.due_date    = this.formatDate();
}

Todo.prototype = {
  formatDate: function() {
    var date_string = "No Due Date";
    if (this.month !== "Month" && this.year !== "Year") {
        date_string = this.month + "/" + this.year.toString().slice(2)
    }
    return date_string;
  },
  same: function(todo) {
    return this.id === todo.id;
  }
};

(function(){
  data = {
    todos: [],
    contains: function(todo) {
      return this.todos.some(function(t) {
        return todo.same(t);
      });
    },
    insertOrUpdate: function(todo) {
      if (!(todo instanceof Todo)) {
        console.error("wrong type expecting a instance of Todo");
        return;
      }
      if (this.contains(todo)) {
        this.todos.forEach(function(o) {
          if (o.id === todo.id) {
            Object.assign(o, todo);
          }
        });
      } else {
        this.todos.push(todo);
      }
      this.save();
    },
    delete: function(id) {
      this.todos = this.todos.filter(function(o){
        return o.id !== id;
      });
      this.save();
    },
    load: function() {
      var arr = JSON.parse(localStorage.getItem("todos")) || [];
      if (!!arr) {
        arr.forEach(function(o){
          this.todos.push(new Todo(o));
        }, this);
      }

      if (this.todos.length < 5) {
        this.todos.push(new Todo({title:"buy milk", day: 23, month: 3, year: 2016, description: "to coles"}));
        this.todos.push(new Todo({title:"hair cut", day: 23, month: 3, year: 2016, description: "to coles"}));
        this.todos.push(new Todo({title:"check xxx", day: 23, month: 3, year: 2016, description: "", completed: true}));
        this.todos.push(new Todo({title:"meet John", }));
        this.save();
      }
    },
    save: function() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    init: function () {
      this.load();
    }
  };

  view = {
    renderTodos: function(todo_list) {
      var $todos = $("#content tbody")
      todo_list.forEach(function(t) {
         var $item = $(templates["todo-template"](t));
         $item.data("todo", t);
         if (t.completed) {
           $item.addClass("completed-task");
         }
         $todos.append($item);
      });
    },
    renderSidebar: function() {

    },
    showForm: function(todo) {
      var $form = $("#modal_form"),
          $background = $("#modal_background");

      $background.fadeIn(500);
      $form.fadeIn(500);
      $background.off("click").on("click", this.hideForm);

      if (todo === undefined) {
        $form.find("[name]").val("");
        return;
      }
      if (!(todo instanceof Todo)) {
        console.error("wrong type expecting the instance of Todo.");
        return;
      }
      if (!!todo) {
        $form.data("todo", todo);
        $form.find("[name=id]").val(todo.id);
        $form.find("[name=title]").val(todo.title);
        if (todo.day !== "Day"){
          $form.find("[name=day]").val(todo.day);
        }
        if (todo.month !== "Month"){
          $form.find("[name=month]").val(todo.month);
        }
        if (todo.year !== "Year") {
          $form.find("[name=year]").val(todo.year);
        }
        $form.find("[name=description]").val(todo.description);
      }
    },
    hideForm: function() {
      var $form = $("#modal_form"),
          $background = $("#modal_background");
      $background.fadeOut(500);
      $form.fadeOut(500);
      $form.removeData("todo");
    },
    init: function() {

    }
  };

  controller = {
    cacheTemplates: function() {
      templates["todo-template"] = Handlebars.compile($("#todo-template").html());
    },
    add: function(e) {
      e.preventDefault();
    },
    submit: function(e) {
      e.preventDefault();
      var $form = $("#modal_form");
          modified_todo = $form.data("todo");
     data.insertOrUpdate(modified_todo);
      view.hideForm();
    },
    completeOnForm: function(e) {
      e.preventDefault();
      var $form = $("#modal_form");
      $form.data("todo").completed = true;
    },
    completeOnList: function(e) {
      e.preventDefault();
    },
    bindEvents: function() {
      $(".add").on("click", this.add.bind(this));
      $("#modal_form").on("submit", this.submit.bind(this));
      $("#mark-as-complete").on("click", this.completeOnForm.bind(this));
      $("#content").on("click", "td", this.completeOnList.bind(this));
       $("#content").on("click", "label.title", this.completeOnList.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.cacheTemplates();
      data.init();
      view.init();
      view.renderTodos(data.todos);
      view.renderSidebar();
    }
  };
})();

$(controller.init.bind(controller));
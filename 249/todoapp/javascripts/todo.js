var templates = {}, 
    data,
    controller,
    view;

//
// Helper functions
//
function dumpData() {
  data.todos.forEach(function(t) {
    console.log(t);
  });
  console.log(data.last_id);
}

function clearData() {
  data.todos = [];
  data.last_id = 0;
  localStorage.removeItem("todos");
  localStorage.removeItem("last_id");
}

function getItemTodo(e) {
  return $(e.target).closest("tr").data("todo");
}

function getFormObject() {
  var todo,
      obj = {};
  $("form").serializeArray().forEach(function(field) {
    obj[field.name] = field.value.trim();
  });
  return obj;
}

// Constructor
function Todo(obj) {
  obj = obj || {};

  if (!(this instanceof Todo)) {
    return new this;
  }
  if (obj.id) {
    this.id = +obj.id;
  } else {
    this.id = data.newId();
  }
  this.title       = obj["title"];
  this.day         = obj["day"]         || "Day";
  this.month       = obj["month"]       || "Month";
  this.year        = obj["year"]        || "Year";
  this.description = obj["description"] || "";
  this.completed   = (obj["completed"] === true  || obj["completed"] === "true") || false;
  this.due_date    = this.formatDate();
}

Todo.prototype = {
  formatDate: function() {
    var date_string = "No Due Date";
    if (this.month !== "Month" && this.year !== "Year") {
        date_string = this.month + "/" + String(this.year).slice(2)
    }
    return date_string;
  },
  same: function(todo) {
    return this.id === todo.id;
  },
  complete: function() {
    this.completed = true;
    return this;
  },
  toggle: function() {
    this.completed = !this.completed;
    return this;
  }
};

(function(){
  data = {
    last_id: 0,
    todos: [],
    newId: function() {
      this.last_id++;
      return this.last_id;
    },
    getDone: function() {
      return this.todos.filter(function(t) {
        return t.completed;
      });
    },
    getUndone: function() {
      return this.todos.filter(function(t) {
        return !t.completed;
      });
    },
    getSorted: function() {
      return this.getUndone().concat(this.getDone());
    },
    contains: function(todo) {
      return this.todos.some(function(t) {
        return todo.same(t);
      });
    },
    push: function(todo) {
      if (!(todo instanceof Todo)) {
        todo = new Todo(todo);
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
      this.last_id = parseInt(localStorage.getItem("last_id"), 10) || 0;
      if (this.todos.length === 0) {
        this.todos.push(new Todo({title:"meet John", completed: true}));
        this.todos.push(new Todo({title:"buy milk", day: 23, month: 3, year: 2016, description: "to coles"}));
        this.todos.push(new Todo({title:"hair cut", day: 23, month: 3, year: 2016, description: "to coles"}));
        this.todos.push(new Todo({title:"check xxx", day: 23, month: 3, year: 2016, description: "", completed: true}));
        this.save();
      }
    },
    save: function() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("last_id", this.last_id);
    },
    init: function () {
      this.load();
    }
  };

  /*
  A dumb view
    - render the data passing in
    - no directl access to data layer
  */
  view = {
    renderTodos: function(todo_list) {
      var $todos = $("#content tbody"),
          $title = $("#content .title"),
          $badge = $("#content .badge");
      
      todo_list = todo_list || [];

      // render title
      $title.text("All Todos");
      $badge.text(todo_list.length);

      // render list
      todo_list = todo_list || [];
      $todos.children().remove();
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
        for (var p in todo) {
          if (["Day", "Month", "Year"].indexOf(todo[p]) === -1) {
            $form.find("[name=" + p + "]").val(todo[p]);
          } 
        }
      }
    },
    // hide form and claer all fields
    hideForm: function() {
      $("#modal_background").fadeOut(500);
      $("#modal_form").fadeOut(500, function() {
        $("form").find("[name]").val("");
      });
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
      view.showForm();
    },
    edit: function(e) {
      e.preventDefault();
      e.stopPropagation();
      view.showForm(getItemTodo(e));
    },
    delete: function(e) {
      e.preventDefault();
      data.delete(getItemTodo(e).id);
      view.renderTodos(data.getSorted());
    },
    submit: function(e) {
      e.preventDefault();
      data.push(new Todo(getFormObject()));
      view.renderTodos(data.getSorted());
      view.hideForm();
    },
    completeByForm: function(e) {
      e.preventDefault();
      var obj = getFormObject(),
          todo;
      if (!obj.id) {
        confirm("Cannot mark as complete as item has not been created yet!");
        return;
      }
      todo = new Todo(obj);
      data.push(todo.complete());
      view.renderTodos(data.getSorted());
      view.hideForm();
    },
    completeByClick: function(e) {
      e.preventDefault();
      var todo = getItemTodo(e);
      data.push(todo.toggle());
      view.renderTodos(data.getSorted());
      view.hideForm();
    },
    bindEvents: function() {
      $(".add").on("click", this.add.bind(this));
      $("#content").on("click", ".todo .delete", this.delete.bind(this)); 
      $("#content").on("click", ".todo td:first-child", this.completeByClick.bind(this)); 
      $("#content").on("click", ".todo .title", this.edit.bind(this)); 
      $("form").on("submit", this.submit.bind(this));
      $("form input[type=button]").on("click", this.completeByForm.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.cacheTemplates();
      data.init();
      view.init();
      view.renderTodos(data.getSorted());
      view.renderSidebar();
    }
  };
})();

$(controller.init.bind(controller));
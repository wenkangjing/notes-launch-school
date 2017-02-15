var templates = {}, 
    data,
    controller,
    view;

//
// Helper functions
//
function dumpData() {
  data.getTodos().forEach(function(t) {
    console.log(t);
  });
  console.log(data.last_id);
}

function fakeData() {
  data.push(new Todo({title:"meet John", completed: true}));
  data.push(new Todo({title:"buy milk", day: 23, month: 3, year: 2016, description: "to coles"}));
  data.push(new Todo({title:"hair cut", day: 23, month: 3, year: 2016, description: "to coles"}));
  data.push(new Todo({title:"check xxx", day: 23, month: 3, year: 2016, description: "", completed: true}));
}
function clearData() {
  data.todos = [];
  data.last_id = 0;
  localStorage.removeItem("todos");
  localStorage.removeItem("last_id");
}

// Get attached data of a given item in todo panel
function getTodoId(e) {
  return parseInt($(e.target).closest(".todo").attr("data_id"), 10);
}

// Get filter (completed + due_date) of a given item in sidebar
function getFilter($el) {
  var filter = {};
  filter.status = $el.closest("section")[0].className;
  filter.due_date = $el.find(".due-date").text() || undefined;
  return filter;
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
};

function Group(obj) {
  if (!(this instanceof Group)) {
    return new Group(obj);
  }
  this.name = obj.name;
  this.count = obj.count;
}

(function(){
  data = {
    last_id: 0,
    todos: [],
    newId: function() {
      this.last_id++;
      return this.last_id;
    },
    getTodos: function() {
      return this.todos;
    },
    getAllGroups: function() {
      var groups = {},
          result = [];
      this.todos.forEach(function(t) {
        if (groups[t.due_date]) {
          groups[t.due_date]++;
        } else {
          groups[t.due_date] = 1;
        }
      });
      for (var g in groups) {
        result.push({
          due_date: g,
          count: groups[g]
        });
      }
      return result;
    },
    getCompletedGroups: function() {
      var groups = {},
          result = [];
      this.todos.filter(function(t) {
        return t.completed;
      }).forEach(function(t) {
        if (groups[t.due_date]) {
          groups[t.due_date]++;
        } else {
          groups[t.due_date] = 1;
        }
      });
      for (var g in groups) {
        result.push({
          due_date: g,
          count: groups[g]
        });
      }
      return result;
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
    getTodoById: function(id) {
      var todo;
      this.todos.forEach(function(t) {
        if (id === t.id) {
          todo = t;
          return false;
        }
      });
      return todo;
    },
    toggleTodoById: function(id, completed) {
      id = parseInt(id, 10);
      this.todos.forEach(function(t) {
        if (t.id === id) {
          if (completed === undefined) {
            t.completed = !t.completed;
          } else {
            t.completed = completed;
          }
          return false;
        }
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
    },
    save: function() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("last_id", this.last_id);
    },
  };

  view = {
    filter: {
       status: "all", 
       due_date: undefined,
    },
    reset: function() {
      this.filter = { status: "all", due_date: undefined};
    },
    render: function() {
      this.renderTodos();
      this.renderSidebar();
    },
    isEmpty: function() {
      return $("#content .todo").length === 0;
    },
    renderTodos: function() {
      var $content = $("#content"),
          $todos = $content .find("tbody"),
          $title = $content .find(".title"),
          $title_badge = $content .find(".badge"),
          todos = data.getTodos() || [];

      // filter data
      todos = todos.filter(function(t) { // by whether completed
        if (this.filter.status === "completed") {
          return t.completed
        }
        return true;
      }, this).filter(function(t) { // by due date
        if (this.filter.due_date) {
          return t.due_date === this.filter.due_date;
        }
        return true;
      }, this); 

      // render todo title
      if (this.filter.due_date) {
        $title.text(this.filter.due_date);
      } else if (this.filter.status === "completed"){
        $title.text("Completed");
      } else if (this.filter.status === "all"){
        $title.text("All Todos");
      }
      $title_badge.text(todos.length);

      // render todo items
      $content.find("table").remove();
      todos = todos.sort(function(a, b) {
        return a.completed;
      });
      $content.append(templates["todos-template"]({ todos: todos }));
    },
    renderSidebar: function() {
      this.renderGroups($("#sidebar .all"), data.getAllGroups() || []);
      this.renderGroups($("#sidebar .completed"), data.getCompletedGroups() || []);
      this.highlightSidebar();
    },
    highlightSidebar: function() {
      var $sidebar = $("#sidebar"),
          $section = $sidebar.find("." + this.filter.status),
          $group_list = $section.find("li.group"),
          $group_title = $section.find("h1.group");

      $sidebar.find(".active").removeClass("active");
      if (!this.filter.due_date) {
        $group_title.addClass("active");
      } else {
        $group_list.each(function(idx) {
          if ($(this).find(".due-date").text() === view.filter.due_date) {
            $(this).addClass("active");
          }
        });
      }
    },
    renderGroups: function($section, groups) {
      var $group_list = $section.find("ul"),
          $group_badge = $section.find(".badge"),
          $group_title = $section.find("h1"),
          $highlight,
          total = 0;

      $group_list .children().remove();
      groups.sort(function(a, b) {
        return a.due_date > b.due_date;
      }).forEach(function(g) {
        var $item = $(templates["group-template"](g));
        total += g.count;
        if ($section.hasClass("completed")) {
          $item.addClass("completed");
        }
        $group_list.append($item);
      });
      $group_badge.text(total);
    },
    showForm: function(id) {
      var $form = $("#modal_form"),
          $background = $("#modal_background"),
          todo = data.getTodoById(id);

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
  };

  controller = {
    cacheTemplates: function() {
      templates["todos-template"] = Handlebars.compile($("#todos-template").html());
      templates["group-template"] = Handlebars.compile($("#group-template").html());
    },
    add: function(e) {
      e.preventDefault();
      view.showForm();
    },
    edit: function(e) {
      e.preventDefault();
      e.stopPropagation();
      view.showForm(getTodoId(e));
    },
    delete: function(e) {
      e.preventDefault();
      data.delete(getTodoId(e));
      view.render();
      if (view.isEmpty()) {
        view.reset();
        view.render();
      }
    },
    submit: function(e) {
      e.preventDefault();
      data.push(new Todo(getFormObject()));
      view.hideForm();
      view.render();
      if (view.isEmpty()) {
        view.reset();
        view.render();
      }
    },
    completeByForm: function(e) {
      e.preventDefault();
      var obj = getFormObject(),
          todo;
      if (!obj.id) {
        confirm("Cannot mark as complete as item has not been created yet!");
        return;
      }
      data.toggleTodoById(obj.id, true);
      view.hideForm();
      view.render();
      if (view.isEmpty()) {
        view.reset();
        view.render();
      }
    },
    completeByClick: function(e) {
      e.preventDefault();
      var id = getTodoId(e);
      data.toggleTodoById(id);
      view.hideForm();
      view.render();
      if (view.isEmpty()) {
        view.reset();
        view.render();
      }
    },
    filter: function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      var $el = $(e.currentTarget),
          $sidebar = $("#sidebar"),
          $content = $("#content");

      $sidebar.find(".active").removeClass("active");
      $el.addClass("active");
      view.filter = getFilter($el);
      view.renderTodos();
    },
    bindEvents: function() {
      // content - right panel
      $("#content .add").on("click", this.add.bind(this));
      $("#content").on("click", ".todo td:last-child", this.delete.bind(this)); 
      $("#content").on("click", ".todo td:first-child", this.completeByClick.bind(this)); 
      $("#content").on("click", ".todo .title", this.edit.bind(this)); 
      // sidebar
      $("#sidebar").on("click", "h1, li", this.filter.bind(this));
      // modal - form
      $("form").on("submit", this.submit.bind(this));
      $("form input[type=button]").on("click", this.completeByForm.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.cacheTemplates();
      data.load();
      view.render();
    }
  };
})();

$(controller.init.bind(controller));
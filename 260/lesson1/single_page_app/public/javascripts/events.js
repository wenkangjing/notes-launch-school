var templates = {};

var events = {
  create: function(e) {
    e.preventDefault();
    var $form = $("form");
    $.ajax({
      method: "POST",
      url: "/events/new",
      data: $form.serializeArray(),
      success: function(json) {
        events.load();
      },
    });
  },
  load: function() {
    $.ajax({
      method: "GET",
      url: "/events",
      success: function(obj) {
        var html = templates["events"]({events: obj});
        $("#events_list").children().remove();
        $("#events_list").append(html);
      },
    });
  },
  remove: function(e) {
    e.preventDefault();
    var id = $(e.target).closest("li").data().id;
    $.ajax({
      method: "POST",
      url: "/events/delete",
      data: { id: id },
      success: function(obj) {
        events.load();
      },
    });
  },
  bindEvents: function() {
    $("form").on("submit", this.create.bind(this));
    $("#events_list").on("click", ".remove", this.remove.bind(this));
  },
  cacheTemplates: function() {
    templates["events"] = Handlebars.compile($("#events").html());
    Handlebars.registerPartial("event", $("#event").html());
  },
  init: function() {
    this.bindEvents();
    this.cacheTemplates();
    this.load();
  }
};

$(events.init.bind(events));
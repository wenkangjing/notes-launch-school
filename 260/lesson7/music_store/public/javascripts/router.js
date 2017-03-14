var router = new (Backbone.Router.extend({
  routes: {
    "albums/new": "new"
  },
  new: function() { 
    App.newAlbum();
    console.log("route to new");
  },
  index: function() {
    App.indexView();
    console.log("route to index");
  },
  initialize: function()  {
    this.route(/^\/?$/, "index", this.index);
  }
}))();

// history is a singleton instance
Backbone.history.start({
  pushState: true
});

// get ride of '/', backbone assumming / will be there
$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  var fregment = $(e.currentTarget).attr("href").replace(/^\//, "");
  router.navigate(fregment, {trigger: true});
});

$(document).on("submit", "form", function(e) {
  e.preventDefault();
  var action = $(e.target).attr("action");
  router.navigate("/");
});

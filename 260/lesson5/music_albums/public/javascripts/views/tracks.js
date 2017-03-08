var $overlay = $("#tracks_background");

var TracksView = Backbone.View.extend({
  // no element for mounting to, set css id on the outer most element
  attributes: {
    id: 'tracks_container',
  },  
  // no element for mounting to, div is the outer most element of this view
  tagName: "div",
  events: {
    "click a.close": "close",
  },
  render: function() {
    this.$el.html(this.template({
      tracks: this.collection.toJSON(),
      album: this.album.toJSON(),
    }));
    this.open();
  },
  open: function() {
    this.$el.add($overlay).fadeIn();
    this.bindEvents();
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
  },
  fadeOut: function() {
    $overlay.fadeOut();
    this.$el.fadeOut(500, function() {
      this.remove();
    }.bind(this));
  },
  initialize: function(options) {
    this.template = Handlebars.compile($("#tracks").html());
    this.album = options.album;
    this.listenTo(this.collection,"change", this.render);
    this.$el.appendTo(document.body);
  }
});
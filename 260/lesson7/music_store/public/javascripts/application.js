var App = {
  templates: JST, //App.templates.album
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView.bind(this));
  },
  renderAlbumView: function(album) {
    new AlbumView({model: album});
  },
  init: function() {
    this.$el = $("main");
    this.renderAlbums();
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});
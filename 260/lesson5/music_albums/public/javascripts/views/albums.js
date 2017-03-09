var AlbumsView = Backbone.View.extend({
  el: "#albums_container",
  tagName: "li",
  render: function() {
    this.$el.html(this.template({albums: this.collection.toJSON()}));
  },
  initialize: function() {
    Handlebars.registerPartial("album", $("#album").html());
    this.template = Handlebars.compile($("#albums").html());
    this.listenTo(this.collection, 'change', this.render);
  } 
});


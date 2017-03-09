var App = {
  albumsLoaded: function() {
    console.log("Albums loaded");
    this.view.render();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.view = new AlbumsView({ collection: this.albums });
    this.albums.fetch({
      success: this.albumsLoaded.bind(this),
    });
  },
  tracksLoaded: function(tracks) {
    console.log("Tracks loaded");
    var tracks_view = new TracksView({ 
      album: this.selected_album,
      collection: tracks 
    });  
    tracks_view.render();
    this.tracks = tracks_view;
  },  
  fetchTracks: function(name) {
    // var tracks = new Tracks();
    // tracks.url = "/albums/" + name + ".json";
    var tracks = new (Tracks.extend({
      url: '/albums/' + name + '.json',
    }))();
    tracks.fetch({success: this.tracksLoaded.bind(this)});
    this.selected_album = this.albums.findWhere({ title: name });
  },
  init: function() {
    this.fetchAlbums();
  }
};

var Router = Backbone.Router.extend({
  routes: {
    "albums/:name": "getAlbum",
  },
  getAlbum: function(name) {
    App.fetchTracks(name);
  },
  index: function() {
    if (!App.tracks.$el.is(":animated")) {
      App.tracks.$el.fadeOut();
    }
  },
  initialize : function() {
    // can be router string or regex
    this.route(/^\/?$/, "index", this.inidex);
  },
});

var router = new Router();

Backbone.history.start({
  pushState: true,
  silent: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  var fragment = $(e.currentTarget).attr("href").replace(/^\//, "");
  console.log(fragment);
  router.navigate(fragment);
  //router.navigate(fragment, { trigger: true });
});

App.init();
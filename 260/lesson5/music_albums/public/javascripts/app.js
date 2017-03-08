var App = {
  albumsLoaded: function() {
    console.log("Albums loaded");
    this.albums_view.render();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.albums_view = new AlbumsView({ collection: this.albums });
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
    var tracks = new Tracks();
    tracks.url = "/albums/" + name + ".json";
    tracks.fetch({success: this.tracksLoaded.bind(this)});
    this.selected_album = this.albums.findWhere({ title: name });
  },
  selectAlbum: function(e) {
    e.preventDefault();
    this.fetchTracks($(e.target).text());
  },
  init: function() {
    this.fetchAlbums();
  }
};

App.init();


var Router = Backbone.Router.extend({
  routers: {
    "albums:name": "getAlbum",
  },
  getAlbum: function(name) {
    App.fetchTracks(name);
  },
  index: function() {
  },
  initialize : function() {
    // can be router string or regex
    this.route(/^\?$/, "index", this.inidex);
  },

});
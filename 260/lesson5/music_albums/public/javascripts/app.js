var App = {
  albumsLoaded: function() {
    console.log("Albums loaded");
    this.view.render();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.view = new AlbumsView({ collection: this.albums });
    this.albums.fetch({
      // success: function(model, response) {
      //   App.albumsLoaded(response);
      // }
      success: this.albumsLoaded.bind(this),
    });
  },
  init: function() {
    this.fetchAlbums();
  }
};

App.init();
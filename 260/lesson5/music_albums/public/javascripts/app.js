var App = {
  albumsLoaded: function() {
    console.log("Albums loaded");
    
  },
  fetchAlbums: function() {
    this.albums = new Albums();
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
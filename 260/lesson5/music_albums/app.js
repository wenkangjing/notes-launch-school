var static = require('node-static'),
    http = require('http');
    
var fileServer = new static.Server('./public');
 
http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (err, result) {
            console.log(request.url);
            if (err) { // There was an error serving the file 
                console.error("Error serving " + request.url + " - " + err.message);
 
                // Respond to the client 
                response.writeHead(err.status, err.headers);
                response.end();
            }
        });
    }).resume();
}).listen(3000);


var App = {
  albumsLoaded: function() {

  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.albums.fetch({
      success: function(model, response) {
        this.albumsLoaded(response);
      }
    });
  },
  init: function() {
    this.fetchAlbums();
  }
};
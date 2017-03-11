var path = require('path');
var fs = require('fs');
var filepath = path.resolve(path.dirname(__dirname), "data/albums.json"); 

function getAlbums() {
  return JSON.parse(fs.readFileSync(filepath, "utf8")).data;
}

function nextID() {
  return JSON.parse(fs.readFileSync(filepath, "utf8")).last_id + 1;
}

function writeAlbums(albums) {
  fs.writeFileSync(filepath, JSON.stringify(albums), "utf8");
}

module.exports = function(router) {
  router.post('/albums', function(req, res, next) {
    var album = req.body;
    console.log(album);
    var albums = getAlbums();

    album.id = nextID();
    albums.push(album);
    writeAlbums({last_id: album.id, data: albums});
    res.json(album);
  });

  router.get('/albums/new', function(req, res, next) {
    res.render('new');
  });
};
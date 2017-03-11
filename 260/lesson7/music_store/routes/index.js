var path = require('path');
var fs = require('fs');

function getAlbums() {
  var filepath = path.resolve(path.dirname(__dirname), "data/albums.json"); 
  var albums = fs.readFileSync(filepath, "utf8");
  return JSON.parse(albums);
}

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', { 
      title: 'Music Store',
      data: getAlbums(),
    });
  });
}

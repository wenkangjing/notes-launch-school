var path = require('path');
var fs = require('fs');

function getAlbums() {
  var filepath = path.resolve(path.dirname(__dirname), "data/albums.json"); 
  return JSON.parse(fs.readFileSync(filepath, "utf8")).data;
}

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', { 
      title: 'Music Store',
      data: getAlbums(),
    });
  });
}

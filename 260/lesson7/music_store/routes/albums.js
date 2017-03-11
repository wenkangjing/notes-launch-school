
var singleton = require('../modules/singleton');

// function getAlbums() {
//   return JSON.parse(fs.readFileSync(filepath, "utf8")).data;
// }

// function nextID() {
//   return JSON.parse(fs.readFileSync(filepath, "utf8")).last_id + 1;
// }

// function writeAlbums(albums) {
//   fs.writeFileSync(filepath, JSON.stringify(albums), "utf8");
// }

module.exports = function(router) {
  router.post('/albums', function(req, res, next) {
    var album = req.body;
    var albums = singleton.get();

    albums.push(album);
    singleton.set(albums);
    res.json(album);
  });

  router.get('/albums/new', function(req, res, next) {
    res.render('new');
  });
};
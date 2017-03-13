
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
  router.get('/albums/new', function(req, res, next) {
    res.render('new');
  });
  router.post('/albums', function(req, res, next) {
    var album = req.body;
    var albums = singleton.get();

    albums.push(album);
    singleton.set(albums);
    res.json(album);
  });
  router.put('/', function(req, res) {
    console.log(req.body);
    var id = parseInt(req.body.id, 10);
    var album = _(singleton.collection).findWhere({id: id});
    album = req.body.album;
    singleton.set(albums);

    res.json(album);
  });
  router.delete('/', function(req, res) {
    console.log(req.body);
    var id = parseInt(req.body, 10);
    var albums = _(singleton.collection).reject({id: id});
    singleton.set(albums);
    res.status(200).end();
  });
};
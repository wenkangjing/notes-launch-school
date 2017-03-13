var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json"); 

var singleton = {
  last_id: 0,
  collection: [],
  get: function() {
    var o = JSON.parse(fs.readFileSync(file_path, "utf8"));
    this.last_id = o.last_id;
    this.collection = o.data;
    return this.collection;
  },
  getLastID: function() {
    return this.last_id;
  },
  set: function(albums) {
    fs.writeFileSync(file_path, JSON.stringify({last_id: this.last_id + 1, data: albums}), "utf8");
  },
};

module.exports = singleton;

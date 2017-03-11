var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json"); 

var singleton = {
  obj: {},
  get: function() {
    this.obj = JSON.parse(fs.readFileSync(file_path, "utf8"));
    return this.obj.data;
  },
  getLastID: function() {
    return this.obj.last_id;
  },
  set: function(albums) {
    fs.writeFileSync(file_path, JSON.stringify({last_id: this.obj.last_id + 1, data: albums}), "utf8");
  },
};

module.exports = singleton;
var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json"); 

var singleton = {
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).data;
  },
  set: function(data) {
    fs.writeFileSync(file_path, JSON.stringify(data), "utf8");
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  },
};

module.exports = singleton;

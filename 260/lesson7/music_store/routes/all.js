var express = require("express");
var router = express.Router();
var path = require("path");
var route_files = ["index", "albums"];

for (var i = 0; i < route_files.length; i++) {
  var file_path = path.resolve(path.dirname(__dirname), "routes/" + route_files[i]);
  require(file_path)(router);
}

module.exports = router;

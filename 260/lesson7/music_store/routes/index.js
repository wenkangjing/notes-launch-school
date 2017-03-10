var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var filepath = path.resolve(path.dirname(__dirname), "data/albums.json"); 
var albums = fs.readFileSync(filepath, "utf8");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Music Store',
    data: JSON.parse(albums),
  });
});

module.exports = router;

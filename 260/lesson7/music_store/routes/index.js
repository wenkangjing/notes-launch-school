var singleton = require('./singleton');
module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', { 
      albums: singleton.get(),
    });
  });
}

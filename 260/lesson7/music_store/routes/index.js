var singleton = require('../modules/singleton');

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', { 
      title: 'Music Store',
      data: singleton.get(),
    });
  });
}

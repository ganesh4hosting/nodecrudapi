var express = require('express');
var router = express.Router();

/* GET home page. */
// hello how are you
// Devendra Changes 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

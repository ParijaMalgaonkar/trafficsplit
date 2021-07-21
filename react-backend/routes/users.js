var express = require('express');
var router = express.Router();
var count = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(count);
});

module.exports = router;

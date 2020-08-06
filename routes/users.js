var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{name: 'user1', age:18}, {name: 'user2', age:29}]);
});

module.exports = router;

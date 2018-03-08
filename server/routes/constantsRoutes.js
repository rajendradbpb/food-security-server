var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
router.post('/',function(req, res, next) {
  controllers.constantsCtrl.addConstants(req, res);
});
router.get('/', function(req, res, next) {
  controllers.constantsCtrl.getConstants(req, res);
});
router.put('/', function(req, res, next) {
  controllers.constantsCtrl.updateConstants(req, res);
});
module.exports = router;

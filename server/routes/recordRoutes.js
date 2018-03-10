var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
router.post('/',function(req, res, next) {
  controllers.recordCtrl.addRecord(req, res);
});
router.get('/', function(req, res, next) {

  controllers.recordCtrl.getRecord(req, res);
});
router.put('/', function(req, res, next) {
  controllers.recordCtrl.udpateRecord(req, res);
});
//router.delete('/:id', function(req, res, next) {
  //controllers.configCtrl.deleteConfig(req, res);
//});

module.exports = router;

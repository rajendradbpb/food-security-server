var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
router.post('/',function(req, res, next) {
  controllers.dataCollectionCtrl.adddataCollection(req, res);
});
router.get('/', function(req, res, next) {
  
  controllers.dataCollectionCtrl.getdataCollection(req, res);
});
router.put('/', function(req, res, next) {
  controllers.dataCollectionCtrl.udpatedataCollection(req, res);
});
//router.delete('/:id', function(req, res, next) {
  //controllers.configCtrl.deleteConfig(req, res);
//});

module.exports = router;

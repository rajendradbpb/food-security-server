var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
router.post('/',function(req, res, next) {
  controllers.brokerCtrl.addBroker(req, res);
});
router.get('/', function(req, res, next) {
  controllers.brokerCtrl.getBroker(req, res);
});
router.put('/', function(req, res, next) {
  controllers.brokerCtrl.udpateBroker(req, res);
});
router.delete('/:id', function(req, res, next) {
  controllers.brokerCtrl.deleteBroker(req, res);
});

module.exports = router;

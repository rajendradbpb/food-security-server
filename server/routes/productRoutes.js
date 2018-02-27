var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
console.log("hii i here");
router.post('/',function(req, res, next) {
  controllers.productCtrl.addProduct(req, res);
});
router.get('/', function(req, res, next) {
  controllers.productCtrl.getProduct(req, res);
});
router.put('/', function(req, res, next) {
  controllers.productCtrl.udpateProduct(req, res);
});
//router.delete('/:id', function(req, res, next) {
  //controllers.configCtrl.deleteConfig(req, res);
//});

module.exports = router;

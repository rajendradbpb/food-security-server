var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
router.post('/',function(req, res, next) {
  controllers.rawMaterialCtrl.addRawMaterial(req, res);
});
router.get('/', function(req, res, next) {
  controllers.rawMaterialCtrl.getRawMaterial(req, res);
});
router.get('/groups', function(req, res, next) {
  controllers.rawMaterialCtrl.getRawmaterialGroups(req, res);
});
router.put('/', function(req, res, next) {
  controllers.rawMaterialCtrl.udpateRawMaterial(req, res);
});
router.delete('/:id', function(req, res, next) {
  controllers.rawMaterialCtrl.deleteRawMaterial(req, res);
});

module.exports = router;

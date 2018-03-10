var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
router.post('/',function(req, res, next) {
  controllers.supplierCtrl.addSupplier(req, res);
});
router.get('/', function(req, res, next) {
  controllers.supplierCtrl.getSupplier(req, res);
});
//supplier
// router.get('/:plantId', function(req, res, next) {
//   controllers.supplierCtrl.getSupplierByPlantId(req, res);
// });
router.put('/', function(req, res, next) {
  controllers.supplierCtrl.udpateSupplier(req, res);
});
router.delete('/:id', function(req, res, next) {
  controllers.supplierCtrl.deleteSupplier(req, res);
});

module.exports = router;

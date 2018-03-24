var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
var passport = require("passport");
var config = require("config");

// multer configuration starts
var multer = require('multer');
var storage = multer.diskStorage({
  // destination
  destination: function (req, file, cb) {
    if(req.path.indexOf("sampleCollection") != -1){
      cb(null, config.get(config.get("env")+".uploadPath")+"/sampleCollection" )
    }
    else{

      cb(null, config.get(config.get("env")+".uploadPath") ) // document upload
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
// multer configuration ends

router.post('/',function(req, res, next) {
  controllers.recordCtrl.addRecord(req, res);
});
router.get('/', function(req, res, next) {

  controllers.recordCtrl.getRecord(req, res);
});

router.get('/search/:search', function(req, res, next) {

  controllers.recordCtrl.getSearch(req, res);
});

router.put('/', function(req, res, next) {
  controllers.recordCtrl.udpateRecord(req, res);
});

router.post("/attachment", upload.any(), function (req, res) {
  console.log('files', req.files);
  controllers.recordCtrl.saveAttachments(req, res);
  //res.send(req.files);
});


// sample
router.get('/sample/:recordId', function(req, res, next) {
  controllers.recordCtrl.getSample(req, res);
});
router.get('/sample/checkSupplierLot/:recordId:/:supplierLot', function(req, res, next) {
  controllers.recordCtrl.checkSupplierLot(req, res);
});
router.post('/samplePreparation', function(req, res, next) {
  controllers.recordCtrl.saveSamplePreparaion(req, res);
});
router.post('/sampleCollection', upload.any(),function(req, res, next) {
  // console.log("sampleCollection "+JSON.stringify(req.files));
  // res.send(req.files);
  controllers.recordCtrl.saveSampleCollection(req, res);
});



//router.delete('/:id', function(req, res, next) {
  //controllers.configCtrl.deleteConfig(req, res);
//});

module.exports = router;

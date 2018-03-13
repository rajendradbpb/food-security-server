/*var express = require('express');
var path = require('path');
var router = express.Router();
var controllers = require("./../controllers/index");
router.post('/',function(req, res, next) {
  controllers.configCtrl.addConfig(req, res);
});
router.get('/', function(req, res, next) {
  controllers.configCtrl.getConfig(req, res);
});
router.get('/:id', function(req, res, next) {
  controllers.configCtrl.getConfigById(req, res);
});
router.put('/', function(req, res, next) {
  controllers.configCtrl.udpateConfig(req, res);
});
router.delete('/:id', function(req, res, next) {
  controllers.configCtrl.deleteConfig(req, res);
});

module.exports = router;*/
 
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
    cb(null, config.get(config.get("env")+".uploadPath") )
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
// multer configuration ends

router.post('/',function(req, res, next) {
  controllers.ConfigCtrl.addConfig(req, res);
});
router.get('/', function(req, res, next) {

  controllers.ConfigCtrl.getConfig(req, res);
});
router.put('/', function(req, res, next) {
  controllers.ConfigCtrl.udpateConfig(req, res);
});

router.get("/attachmentImage", upload.any(), function (req, res) {
  console.log('image', req.files);
  controllers.ConfigCtrl.getImageAttachments(req, res);
  //res.send(req.files);
});


//router.delete('/:id', function(req, res, next) {
  //controllers.configCtrl.deleteConfig(req, res);
//});

module.exports = router;

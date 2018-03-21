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
    console.log("req  ",req);
    console.log("req  body ",req.body);
    cb(null, (req.query.po || new Date() )+"_"+file.originalname);
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
//router.delete('/:id', function(req, res, next) {
  //controllers.configCtrl.deleteConfig(req, res);
//});

module.exports = router;

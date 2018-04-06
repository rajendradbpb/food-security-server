var express = require('express');
var path = require('path');
var router = express.Router();
var passport = require('passport');


// custom files
response = require("./../component/response");
var controllers = require("./../controllers/index");
router.post('/',function(req, res, next) {
  controllers.userCtrl.addUser(req, res);
});
router.get('/', passport.authenticate('superAdmin', {session:false}),function(req, res, next) {
  controllers.userCtrl.getUser(req, res);
});

// router.put('/', function(req, res, next) {
//   controllers.userCtrl.udpateUser(req, res);
// });
// router.put('/changePassword', passport.authenticate('token', {session:false}), function(req, res, next) {
//   controllers.userCtrl.changePassword(req, res);
// });
router.get('/userName/:forgotPassword', function(req, res, next) {
  controllers.userCtrl.resetPassword(req, res);
 });
 router.post('/userName/:forgotPassword', function(req, res, next) {
  controllers.userCtrl.resetPassword(req, res);
 });

// router.delete('/:id', function(req, res, next) {
//   controllers.userCtrl.deleteUser(req, res);
// });
// router.get('/dashboard', passport.authenticate('token', {session:false}),function(req, res, next) {
//   controllers.userCtrl.getDashboardData(req, res);
// });

// token authentication
router.post('/login', passport.authenticate('login', {session:false}) ,controllers.userCtrl.login);
router.get('/token', passport.authenticate('token', {session:false}) ,function(req,res) {
  console.log(">>>>>>>>   verify user" , req.user._doc);
});
router.get('/loggedin',passport.authenticate('token', {session:false}), function(req,res) {
  console.log(">>>>>>>>>>>>>>>>");
  res.status(200).json({status:"OK",user:req.user._doc});
});

router.get('/:id', function(req, res, next) {
  controllers.userCtrl.getUserBasicInfo(req, res);
});
module.exports = router;

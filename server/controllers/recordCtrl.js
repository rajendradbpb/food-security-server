var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('recordCtrl');


exports.addRecord = function(req,res){
  try {
    new models.recordModel(req.body).save(function (err,data) {
      if(err){
        logger.error("addRecord ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveRecord,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveRecord,data);
      }
    })

  } catch (e) {

    logger.error("addRecord ", e);
  }
}


exports.getRecord = function(req,res){
  try {
    var params = {
      isDelete:false,
     //type:{$in:["aa","consultant","bm"]}
    };
    if(req.query._id){
      params['_id'] = req.query._id;
    }
    models.recordModel.find(params,function(err,data){
      if(err){
        logger.error("getRecord ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.getData,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.getData,data);
    })

  } catch (e) {
    logger.error("getRecord ", e);
  }
}
/*
* Name : saveAttachments
* Info : this is used to save attachment , after multer uploaded file the server
*/
exports.saveAttachments = function(req,res) {
  var billOfLanding = [];
  var commercialInvoice = [];
  var packingList = [];
  var coa = [];
  var ccpVerification = [];
  var environmentalMonitoring = [];
  var otherSupporting = [];
  console.log("req.body._id   ",req.body._id);
  if(req.files.length) {
    for(var i in req.files) {
      console.log("******* ",req.files[i].fieldname.toLowerCase() ,String("billOfLanding").toLowerCase() , req.files[i].fieldname.toLowerCase().indexOf(String("billOfLanding").toLowerCase()) );
      if(req.files[i].fieldname.toLowerCase().indexOf(String("billOfLanding").toLowerCase())  != -1){
        console.log("Inside bill of landing  ");
        billOfLanding.push(req.files[i].path);
      }
      if(req.files[i].fieldname.toLowerCase().indexOf(String("commercialInvoice").toLowerCase())  != -1) {
        commercialInvoice.push(req.files[i].path);
      }
      if(req.files[i].fieldname.toLowerCase().indexOf(String("packingList").toLowerCase())  != -1){
        packingList.push(req.files[i].path);
      }
      if(req.files[i].fieldname.toLowerCase().indexOf(String("coa").toLowerCase())  != -1){
        coa.push(req.files[i].path);
      }
      if(req.files[i].fieldname.toLowerCase().indexOf(String("ccpVerification").toLowerCase())  != -1){
        ccpVerification.push(req.files[i].path);
      }
      if(req.files[i].fieldname.toLowerCase().indexOf(String("environmentalMonitoring").toLowerCase())  != -1){
        environmentalMonitoring.push(req.files[i].path);
      }
      if(req.files[i].fieldname.toLowerCase().indexOf(String("otherSupporting").toLowerCase())  != -1){
        otherSupporting.push(req.files[i].path);
      }
    }
  }

  // update record
  models.recordModel.update({_id:req.body._id},
    {
      billOfLanding:billOfLanding,
      commercialInvoice:commercialInvoice,
      packingList:packingList,
      coa:coa,
      ccpVerification:ccpVerification,
      environmentalMonitoring:environmentalMonitoring,
      otherSupporting:otherSupporting,
    }  ,
    { multi:true} ,
    function(err,data) {
      if(err){
        return response.sendResponse(res, 500,"error",constants.messages.error.saveData,err);
      }
      else{
        return response.sendResponse(res,200,"success",constants.messages.success.saveData,data);
      }
    }
  )
}
exports.udpateRecord = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    models.recordModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.udpateRecord,data);
    })
    .catch(function(err) {
      logger.error("updaterecord", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.updateRecord,err);
    })

  } catch (e) {
    logger.error("updateRecord ", e);
  }
}

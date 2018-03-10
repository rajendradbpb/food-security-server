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
    new models.recordModel(req.body).save(function (err) {
      if(err){
        logger.error("addRecord ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveRecord,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveRecord);
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
    if(req.query.type){
      params['type'] = req.query.type;
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

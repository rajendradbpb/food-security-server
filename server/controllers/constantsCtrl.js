
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('constantsCtrl');

exports.addConstants = function(req,res){
  try {
    new models.constantsModel(req.body).save(function (err) {
      if(err){
        logger.error("addConstants ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveData,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveData);
      }
    })

  } catch (e) {
    logger.error("addConstants ", e);
  }
}
exports.getConstants = function(req,res){
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
    models.constantsModel.find(params,function(err,data){
      if(err){
        logger.error("getConstants", err);
        return response.sendResponse(res,500,"error",constants.messages.error.getConstants,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.getConstants,data);
    })

  } catch (e) {
    logger.error("getConstants ", e);
  }
}
exports.updateConstants = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    models.constantsModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.updateData,data);
    })
    .catch(function(err) {
      logger.error("updateConstants ", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.updateData,err);
    })

  } catch (e) {
    logger.error("updateConstants ", e);
  }
}



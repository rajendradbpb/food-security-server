var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('configCtrl');
exports.addConfig = function(req,res){
  try {
    new models.configModel(req.body).save(function (err) {
      if(err){
        logger.error("addConfig ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveData,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveData);
      }
    })

  } catch (e) {
    logger.error("addConfig ", e);
  }
}
exports.getConfig = function(req,res){
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
    models.configModel.find(params,function(err,data){
      if(err){
        logger.error("getConfig ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.getData,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.getData,data);
    })

  } catch (e) {
    logger.error("getConfig ", e);
  }
}
exports.udpateConfig = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    models.configModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.updateData,data);
    })
    .catch(function(err) {
      logger.error("udpateConfig ", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.updateData,err);
    })

  } catch (e) {
    logger.error("udpateConfig ", e);
  }
}
exports.deleteConfig = function(req,res){
  try {
    var query = {
      "_id":req.params.id
    }
    delete req.body['_id'];
    models.configModel.findOneAndUpdate(query,{"isDelete":true},{"new" :true},function(err,data) {
      if(err){
        logger.error("deleteConfig ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.deleteData,err);
      }
      else
      return response.sendResponse(res,200,"success",constants.messages.success.deleteData);
    })

  } catch (e) {
    logger.error("deleteConfig ", e);
  }
}

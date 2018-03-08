var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('dataCollectionsCtrl');


exports.addDataCollection = function(req,res){
  try {
    new models.dataCollectionsModel(req.body).save(function (err) {
      if(err){
        logger.error("addDataCollection ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveDataCollection,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveDataCollection);
      }
    })

  } catch (e) {
   
    logger.error("addDataCollection ", e);
  }
}


exports.getDataCollection = function(req,res){
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
    models.dataCollectionsModel.find(params,function(err,data){
      if(err){
        logger.error("getDataCollection ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.getData,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.getData,data);
    })

  } catch (e) {
    logger.error("getDataCollection ", e);
  }
}


exports.udpateDataCollection = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    models.dataCollectionsModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.udpateDataCollection,data);
    })
    .catch(function(err) {
      logger.error("updateDataCollection", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.updateDataCollection,err);
    })

  } catch (e) {
    logger.error("updateDataCollection ", e);
  }
}

var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('brokerCtrl');
exports.addBroker = function(req,res){
  try {
    new models.brokerModel(req.body).save(function (err) {
      if(err){
        logger.error("addBroker ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveData,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveData);
      }
    })

  } catch (e) {
    logger.error("addBroker ", e);
  }
}
exports.getBroker = function(req,res){
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
    models.brokerModel.find(params,function(err,data){
      if(err){
        logger.error("getBroker ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.fetchData,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.fetchData,data);
    })

  } catch (e) {
    logger.error("getBroker ", e);
  }
}
exports.udpateBroker = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    models.brokerModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.udpateData,data);
    })
    .catch(function(err) {
      logger.error("udpateBroker ", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.udpateData,err);
    })

  } catch (e) {
    logger.error("udpateBroker ", e);
  }
}
exports.deleteBroker = function(req,res){
  try {
    var query = {
      "_id":req.params.id
    }
    delete req.body['_id'];
    models.brokerModel.findOneAndUpdate(query,{"isDelete":true},{"new" :true},function(err,data) {
      if(err){
        logger.error("deleteBroker ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.deleteData,err);
      }
      else
      return response.sendResponse(res,200,"success",constants.messages.success.deleteData);
    })

  } catch (e) {
    logger.error("deleteBroker ", e);
  }
}

exports.getBrokerByPlantId = function(req,res){
  try {
    // validation
    models.brokerModel.find({plants:{"$in":[req.params.plantId]}}).exec()
    .then(function(broker) {
      return response.sendResponse(res,200,"success",constants.messages.success.getData,broker);
    })
    .catch(function(err){

    })

  } catch (e) {
    logger.error("updateproduct ", e);
  }
}

exports.getBrokerBySupplierId = function(req,res){
  try {
    // validation
    models.brokerModel.find({ suppliers:{"$in":[req.params.supplierId]}}).exec()
    .then(function(broker) {
      return response.sendResponse(res,200,"success",constants.messages.success.getData,broker);
    })
    .catch(function(err){

    })

  } catch (e) {
    logger.error("updateproduct ", e);
  }
}
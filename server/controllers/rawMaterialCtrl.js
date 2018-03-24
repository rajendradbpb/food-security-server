var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('rawMaterialCtrl');
exports.addRawMaterial = function(req,res){
  try {
    new models.rawMaterialModel(req.body).save(function (err) {
      if(err){
        logger.error("addRawMaterial ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveData,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveData);
      }
    })

  } catch (e) {
    logger.error("addRawMaterial ", e);
  }
}
exports.getRawMaterial = function(req,res){
  try {
    var params = {
      isDelete:false,
      //type:{$in:["aa","consultant","bm"]}
    };
    if(req.query._id){
      params['_id'] = req.query._id;
    }
    //updating query object with plant , supplier ,country,broker
    if(req.query.plant) {
      params["plant"] = req.query.plant;
    }
    if(req.query.supplier) {
      params["supplier"] = req.query.supplier;
    }
   if(req.query.country) {
      params["country"] = req.query.country;
    }
    if(req.query.broker) {
      params["broker"] = req.query.broker;
    }

    models.rawMaterialModel.find(params,function(err,data){
      if(err){
        logger.error("getRawMaterial ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.getData,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.getData,data);
    })

  } catch (e) {
    logger.error("getRawMaterial ", e);
  }
}

exports.getRawmaterialGroups = function(req,res) {
  var query = {};
  if(req.query.plant) {
    query["plant"] = req.query.plant;
  }
  if(req.query.supplier) {
    query["supplier"] = req.query.supplier;
  }
 if(req.query.country) {
    query["country"] = req.query.country;
  }
  if(req.query.broker) {
    query["broker"] = req.query.broker;
  }
  models.rawMaterialModel.distinct("rmGroupName",query).exec()
  .then(function(data) {
    return response.sendResponse(res,200,"success",constants.messages.success.getData,data);
  })
  .catch(function(err) {
    return response.sendResponse(res,500,"error",constants.messages.error.getData,err);
  })
}
exports.udpateRawMaterial = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    models.rawMaterialModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.udpateData,data);
    })
    .catch(function(err) {
      logger.error("udpateRawMaterial ", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.udpateData,err);
    })

  } catch (e) {
    logger.error("udpateRawMaterial ", e);
  }
}
exports.deleteRawMaterial = function(req,res){
  try {
    var query = {
      "_id":req.params.id
    }
    delete req.body['_id'];
    models.rawMaterialModel.findOneAndUpdate(query,{"isDelete":true},{"new" :true},function(err,data) {
      if(err){
        logger.error("deleteRawMaterial ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.deleteData,err);
      }
      else
      return response.sendResponse(res,200,"success",constants.messages.success.deleteData);
    })

  } catch (e) {
    logger.error("deleteRawMaterial ", e);
  }
}

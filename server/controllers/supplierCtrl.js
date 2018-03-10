var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('supplierCtrl');
var component = require("./../component");
exports.addSupplier = function(req,res){
  try {
    new models.supplierModel(req.body).save(function (err) {
      if(err){
        logger.error("addSupplier ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveData,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveData);
      }
    })

  } catch (e) {
    logger.error("addSupplier ", e);
  }
}
exports.getSupplier = function(req,res){
  try {
    var params = {
      isDelete:false,
      //type:{$in:["aa","consultant","bm"]}
    };
    if(req.params.plant){
      params["plants"] = {"$in":[req.params.plant]};
    }
    if(req.query.plant){
      params["plants"] = {"$in":[req.query.plant]};
    }
    // params = component.utility.prepareQuery(req,params,["query","params"]);

    console.log("query string getSupplier----- ",params);
    models.supplierModel.find(params,function(err,data){
      if(err){
        logger.error("getSupplier ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.getData,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.getData,data);
    })

  } catch (e) {
    logger.error("getSupplier ", e);
  }
}
exports.updateSupplier = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    models.supplierModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.updateData,data);
    })
    .catch(function(err) {
      logger.error("updateSupplier ", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.updateData,err);
    })

  } catch (e) {
    logger.error("updateSupplier ", e);
  }
}
exports.deleteSupplier = function(req,res){
  try {
    var query = {
      "_id":req.params.id
    }
    delete req.body['_id'];
    models.supplierModel.findOneAndUpdate(query,{"isDelete":true},{"new" :true},function(err,data) {
      if(err){
        logger.error("deleteSupplier ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.deleteData,err);
      }
      else
      return response.sendResponse(res,200,"success",constants.messages.success.deleteData);
    })

  } catch (e) {
    logger.error("deleteSupplier ", e);
  }
}


//
// exports.getSupplierByPlantId = function(req,res){
//   try {
//     // validation
//     models.supplierModel.find({plants:{"$in":[req.params.plantId]}}).exec()
//     .then(function(supplier) {
//       return response.sendResponse(res,200,"success",constants.messages.success.getData,supplier);
//     })
//     .catch(function(err){
//
//     })
//
//   } catch (e) {
//     logger.error("updateproduct ", e);
//   }
// }

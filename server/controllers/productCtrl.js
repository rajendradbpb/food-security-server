var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('productCtrl');


exports.addProduct = function(req,res){
  try {
    new models.productModel(req.body).save(function (err) {
      if(err){
        logger.error("addProduct ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.saveProduct,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.saveProduct);
      }
    })

  } catch (e) {
    logger.error("addProduct ", e);
  }
}


exports.getProduct = function(req,res){
  try {
    var params = {
     // isDelete:false,
      type:{$in:["aa","consultant","bm"]}
    };
    if(req.query._id){
      params['_id'] = req.query._id;
    }
    if(req.query.type){
      params['type'] = req.query.type;
    }
    models.productModel.find(params,function(err,data){
      if(err){
        logger.error("getProduct ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.fetchProduct,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.fetchProduct,data);
    })

  } catch (e) {
    logger.error("getProduct ", e);
  }
}


exports.updateProduct = function(req,res){
  try {
    var query = {
      "_id":req.body._id
    }
    delete req.body['_id'];
    var options = {new:true};
    models.productModel.findOneAndUpdate(query, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.updateProduct,data);
    })
    .catch(function(err) {
      logger.error("updateproduct", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.updateProduct,err);
    })

  } catch (e) {
    logger.error("updateproduct ", e);
  }
}

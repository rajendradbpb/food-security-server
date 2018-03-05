var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var bodyParser = require('body-parser');
var colors = require('colors');
var response = require("./../component/response");
var models = require("./../models/index");
var constants = require("./../../config/constants");
var logger = require("./../component/log4j").getLogger('plantCtrl');

exports.addPlant = function(req,res){
  try {
    new models.plantModel(req.body).save(function (err) {
      if(err){
        logger.error("addPlant ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.savePlant,err);
      }
      else {
        return response.sendResponse(res,200,"success",constants.messages.success.savePlant);
      }
    })

  } catch (e) {
    logger.error("addPlant ", e);
  }
}

exports.getPlant = function(req,res){

  try {
    var params = {
      isDelete:false,
    };

    models.plantModel.find(params,function(err,data){
      if(err){
        logger.error("getplant ", err);
        return response.sendResponse(res,500,"error",constants.messages.error.getPlant,err);
      }
      return response.sendResponse(res,200,"success",constants.messages.success.getPlant,data);
    })

  } catch (e) {
    logger.error("getplant ", e);
  }
}


exports.updatePlant = function(req,res){
  try {
    var id = req.body.id;
    delete req.body['_id'];
    var options = {new:true};
    models.plantModel.findByIdAndUpdate(id, req.body,options).exec()
    .then(function(data) {
      return response.sendResponse(res,200,"success",constants.messages.success.updateData,data);
    })
    .catch(function(err) {
      logger.error("updatePlant ", err);
      return response.sendResponse(res, 500,"error",constants.messages.error.updateData,err);
    })

  } catch (e) {
    logger.error("updatePlant ", e);
  }
}

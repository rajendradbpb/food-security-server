var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var constants = require("./../../config/constants")
var Schema = mongoose.Schema;
var constantSchema = new mongoose.Schema({
    // unit configuration
    unit      : [Schema.Types.Mixed],

    isDelete      : {type:Boolean,default:false},
    createdDate      : {type:Date,default:new Date()},


});
constantSchema.plugin(uniqueValidator, {message: constants.messages.error.plantExist});
var constantModel = mongoose.model('constant', constantSchema);
module.exports = constantModel;

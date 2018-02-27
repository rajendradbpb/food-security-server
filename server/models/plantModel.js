var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var constants = require("./../../config/constants")
var Schema = mongoose.Schema;
var plantSchema = new mongoose.Schema({
    plantId       : {type: String,required: true,unique:true},
    Name          : {type:String,required: true},
    address       : {type:String},
    fax           : {type:String,required: true},
    phone         : {type:String,required: true},
    isDelete      : {type:Boolean,default:false},
    createdDate      : {type:Date,default:new Date()},


});
plantSchema.plugin(uniqueValidator, {message: constants.messages.error.plantExist});
var plantModel = mongoose.model('plant', plantSchema);
module.exports = plantModel;

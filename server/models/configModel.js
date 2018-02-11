var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("./../../config/constants")
var configSchema = new mongoose.Schema({
    clientId            : {type: String,required: true,unique:true},
    backgroundImg            : {type: String,default:null},
    logoImg            : {type: String,default:null},
    themeCol1            : {type: String},
    themeCol2            : {type: String},
    createdDate       : {type: Date, default: new Date()},
    isDelete          : {type: Boolean, default:false},
});
configSchema.plugin(uniqueValidator, {message: constants.messages.error.roleExist});
var configModel = mongoose.model('config', configSchema);
module.exports = configModel;

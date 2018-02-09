var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var constants = require('./../../config/constants');
var validator = require('validator');
var Schema = mongoose.Schema;
var password = require('password-hash-and-salt');
var userSchema = new mongoose.Schema({
    role                : {type: Schema.Types.ObjectId, ref: 'role',required: true},
    username            : {type: String,unique : true,required: constants.messages.error.undefinedUsername},
    password            : {type: String,required: constants.messages.error.undefinedPassword},
    email               : {type: String,unique : true,required: constants.messages.error.undefinedEmail},
    clientId            : {type: String,required: constants.messages.error.clientIdExist},
    isDelete          : {type: Boolean, default:false},
});
userSchema.plugin(uniqueValidator, {message: "User Already Exist !"});

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;

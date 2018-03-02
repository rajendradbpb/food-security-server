var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("./../../config/constants")
var customerSchema = new mongoose.Schema({
    plants                       : [{type: Schema.Types.ObjectId, ref: 'plant'}],
    id                           : {type: String , required:true,unique:true},
    name                         :{type: String , required:true},
    brandName                    : [String],
    city                         :{type: String},
    state                        :{type: String},
    pin                          :{type: String},
    country                      :{type: String},
    phone                        :{type: String},
    fax                          :{type: String},
    directDial                   :{type: String},
    contactSalutation            :{type: String},
    contactFirstName             :{type: String},
    contactLastName              :{type: String},
    contactPosition              :{type: String},
    contactEmail                 :{type: String},
    contact24Hour                :{type: String},
    customerNote                 :{type: String},


    isDelete                      : {type: Boolean, default:false},
    createdDate                   :{type: Date, default:new Date()},
});
customerSchema.plugin(uniqueValidator, {message: constants.messages.error.customerExist});
var customerModel = mongoose.model('customer', customerSchema);
module.exports = customerModel;

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var constants = require("./../../config/constants")
var Schema = mongoose.Schema;
var productSchema = new mongoose.Schema({
    productId                    : {type: String,required: true,unique:true},
    customer                     : {type:String,required: true},
    manufacturingSite            : {type:String},
    description                  : {type:String,required: true},
    netWeight                    : {type:Number,required: true},
    unit                         : {type:Number,required: true},
    productUnit                  : {type:Number,required: true},
});
    
productSchema.plugin(uniqueValidator, {message: constants.messages.error.clientIdExist});
var productModel = mongoose.model('product', productSchema);
module.exports = productModel;

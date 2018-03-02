var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var constants = require("./../../config/constants")
var Schema = mongoose.Schema;
var productSchema = new mongoose.Schema({
    plants                       : [{type: Schema.Types.ObjectId, ref: 'plant'}],
    customer                     : [{type: Schema.Types.ObjectId, ref: 'customer'}],
    productId                    : {type: String,required: true,unique:true},
    name                         : {type:String},
    ProductCode                  : {type:String},
    netWeight                    : {type:String},
    unit                         : {type:String},
    Description                  : {type:String},
    rawMatrial                   : [Schema.Types.Mixed]
});

// productSchema.plugin(uniqueValidator, {message: constants.messages.error.clientIdExist});
var productModel = mongoose.model('product', productSchema);
module.exports = productModel;

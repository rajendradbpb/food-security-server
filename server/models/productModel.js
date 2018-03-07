var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var constants = require("./../../config/constants")
var Schema = mongoose.Schema;
var productSchema = new mongoose.Schema({
    plantId                        : [{type: Schema.Types.ObjectId, required: true, ref: 'plant'}],
    supplierId                     : [{type: Schema.Types.ObjectId, ref: 'supplier'}],
    customerId                     : [{type: Schema.Types.ObjectId, ref: 'customer'}],
    productId                      : {type: String,required: true, unique:true},
    name                           : {type:String},
    netWeight                      : {type:String},
    unit                           : {type:String},
    description                    : {type:String},
    country                        : {type:String},
    rawMatrial                     : [{type: Schema.Types.ObjectId, ref: 'rawMaterial'}]
});

// productSchema.plugin(uniqueValidator, {message: constants.messages.error.clientIdExist});
var productModel = mongoose.model('product', productSchema);
module.exports = productModel;

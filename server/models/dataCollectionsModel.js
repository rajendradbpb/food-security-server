var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("./../../config/constants")
var dataCollectionSchema = new mongoose.Schema({
    id                                 : {type: String , required:true,unique:true},
    plant                              : [{type: Schema.Types.ObjectId,required:true, ref: 'plant'}],
    supplier                           : {type: Schema.Types.ObjectId , required:true,ref: 'supplier'},
    broker                             : [{type: Schema.Types.ObjectId,required:true, ref: 'broker'}], 
    product                            : [{type: Schema.Types.ObjectId,required:true, ref: 'product'}],
    createdBy                          : [{type: Schema.Types.ObjectId,required:true, ref: 'user'}], 
    //approved                           : {type: Boolean,default:false},
    variety                            : {type: String},
    //coo                                : [{type: String}],
    //productCode                        : [{type: String}],
    //cert                               : {type: String},
    containerNo                        : {type: String},
    lotNo                              : {type: String},
    nonGmo                             : {type: Boolean,default:false},
    PO                                 : {type: String},
    
    isDelete                      : {type: Boolean, default:false},
    createdDate                   : {type: Date, default:new Date()},
});
//dataCollectionSchema.plugin(uniqueValidator, {message: constants.messages.error.dataCollectionExist});
var dataCollectionModel = mongoose.model('dataCollection',dataCollectionSchema);
module.exports = dataCollectionModel;

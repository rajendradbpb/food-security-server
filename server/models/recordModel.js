var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("./../../config/constants")
var recordSchema = new mongoose.Schema({

    plant                              : {type: Schema.Types.ObjectId,required:true, ref: 'plant'},
    supplier                           : {type: Schema.Types.ObjectId , required:true,ref: 'supplier'},
    broker                             : {type: Schema.Types.ObjectId,required:true, ref: 'broker'},
    country                            : {type:String},
    product                            : {type: Schema.Types.ObjectId,required:true, ref: 'product'} ,
    approved                           : {type:Boolean,default:false},


    po                                 : {type: String},
    containerNo                        : {type: String},
    lotNo                              : {type: String},
    billOfLanding                      :[{type:String}], // will contain list of image path
    commercialInvoice                  :[{type:String}], // will contain list of image path
    packingList                        :[{type:String}], // will contain list of image path
    coa                                :[{type:String}], // will contain list of image path
    ccpVerification                    :[{type:String}], // will contain list of image path
    environmentalMonitoring            :[{type:String}], // will contain list of image path
    otherSupporting                    :[{type:String}], // will contain list of image path
    variety                            : {type: String},
    nonGmo                             : {type: Boolean,default:false},

    isDelete                           : {type: Boolean, default:false},
    createdBy                          : [{type: Schema.Types.ObjectId,required:true, ref: 'user'}],
    createdDate                        : {type: Date, default:new Date()},
});
//recordSchema.plugin(uniqueValidator, {message: constants.messages.error.recordExist});
var recordModel = mongoose.model('record',recordSchema);
module.exports = recordModel;

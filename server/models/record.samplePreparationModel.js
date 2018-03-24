var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("./../../config/constants")
var samplePreparationSchema = new mongoose.Schema({
    record              : {type: Schema.Types.ObjectId,required:true, ref: 'record'},
    samples : [
      {
        supplierLot         :{type:String,required:true},
        newLot              :{type:Boolean,default:false},
        po                  :{type:String,required:true},
        totalQuantity       :{type:Number},
        quantityPlanned       :{type:Boolean,default:false},
        qualityAnalysis     :{type:Boolean,default:false},

        // tests
        indicatorTest       :{type:Boolean,default:false},
        pathogenTest       :{type:Boolean,default:false},
        virusTest       :{type:Boolean,default:false},
        pesticideTest       :{type:Boolean,default:false},

        // picture of case, to be used in sample collection
        caseImg           :{type:String},

      }
    ],
    createdDate       : {type: Date, default: new Date()},
    isDelete          : {type: Boolean, default:false},
});
// samplePreparationSchema.plugin(uniqueValidator, {message: constants.messages.error.roleExist});
var samplePreparationModel = mongoose.model('samplePreparation', samplePreparationSchema);
module.exports = samplePreparationModel;

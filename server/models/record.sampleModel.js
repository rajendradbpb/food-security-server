var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("./../../config/constants")
var sampleSchema = new mongoose.Schema({
    record              : {type: Schema.Types.ObjectId,required:true, ref: 'record'},
    samples : [
      {
        supplierLot         :{type:String,required:true},
        newLot              :{type:Boolean,default:false},
        po                  :{type:String,required:true},
        totalQuantity       :{type:Number},
        quantityPlanned       :{type:Number},
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
var sampleModel = mongoose.model('sample', sampleSchema);
module.exports = sampleModel;

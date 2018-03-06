var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("./../../config/constants")
var rawMatrialSchema = new mongoose.Schema({
    plant                  :[{type: Schema.Types.ObjectId, ref: 'plant'}],
    supplier               :  [{type: Schema.Types.ObjectId, ref: 'supplier'}],
     brokerId              :[{type: Schema.Types.ObjectId, ref: 'broker'}],
    
     name                  : {type: String , required:true},
     rmCode                : {type: String , required:true},
     format                : {type: String , required:true},
     variety               : [{type: String}],
     address               : [
       {
         city              : {type: String},
         region            : {type: String},
         state             : {type: String},
         pin               : {type: String},
         country           :{type: String}
       }
     ],
     isApproved            : {type: Boolean,default:false},
      certification        : {type: String,default:false},
      samplingMethod       : {type: String,default:false},
      pathogenTest         : {type: Boolean,default:false},
      virusTest            : {type: Boolean,default:false},
      pesticideTest        : {type: Boolean,default:false},

    createdDate            : {type: Date, default: new Date()},
    isDelete               : {type: Boolean, default:false},
});
// rawMatrialSchema.plugin(uniqueValidator, {message: constants.messages.error.roleExist});
var rawMatrialModel = mongoose.model('rawMaterial', rawMatrialSchema);
module.exports = rawMatrialModel;

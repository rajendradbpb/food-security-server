var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;
var constants = require("./../../config/constants")
var rawMatrialSchema = new mongoose.Schema({
    plants                  :[{type: Schema.Types.ObjectId, ref: 'plant'}],
    suppliers               :[{type: Schema.Types.ObjectId, ref: 'supplier'}],
    brokers                 :[{type: Schema.Types.ObjectId, ref: 'broker'}],
    rmGroupName		        	:{type: String , required:true},
     name                   : {type: String , required:true},
     rmCode                 : {type: String , required:true},
     format                 : {type: String , required:true},
     variety                : [{type: String}],
     country                : {type: String, required:true}, // required, this should match with country of supplier
     isApproved             : {type: Boolean,default:false},
     kosher                 : {type:String},
     organic                : {type:String},
     nonGmo                 : {type:String},
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

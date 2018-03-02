var config = require('config');
var constants = {
  debug:true,
  roles:['state-admin','district-admin','vle'],
  userStatus:['active','pending','inactive'],
  blockTypes:['GP','URBAN'],
  urbanTypes:['Municipality','Nsc','Others'],
  messages:{
    error:{
      // generic
      "saveData"  : "Error in saving data",
      "getData"  : "Error in get data",
      "updateData"  : "Error in update data",
      "deleteData"  : "Error in delete data",

      //Role
      "roleExist" : "Role Already Exists !",
      "saveRole" : "Error in saving Role",



      //user
      "undefinedUsername":"Undefined Username",
      "undefinedPassword":"Undefined Password",
      "clientIdExist":"Client id already exists !",
      "customerExist":"Customer  already exists !",
      "saveUser" : "Error in save user",
      "undefinedEmail" : "Email required",
      "undefinedPlantId" : "Plant id is required",
      "undefinedSalutation" : "Salutation is required",
      "undefinedFirstName" : "First Name is required",

      //plant

      "plantExist" : "Plant Already Exists !",
      "savePlant" : "Error in saving Plant",

      //product

      "productExist" : "Role Already Exists !",
      "saveProduct" : "Error in saving Role",


      },
    success:{

      // generic
      "saveData"  : "Success in saving data",
      "getData"  : "Success in get data",
      "updateData"  : "Error in update data",
      "deleteData"  : "Error in delete data",

      //role
      "saveRole" : "Role saved",

      //user
      "saveUser" : "Save User success",

      //plant
      "savePlant" : "plant saved",

      //product
      "saveProduct" : "Product saved",
    },
  },

}
module.exports = constants;

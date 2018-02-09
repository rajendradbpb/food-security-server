var config = require('config');
var constants = {
  debug:true,
  roles:['state-admin','district-admin','vle'],
  userStatus:['active','pending','inactive'],
  blockTypes:['GP','URBAN'],
  urbanTypes:['Municipality','Nsc','Others'],
  messages:{
    error:{
      //Role
      "roleExist" : "Role Already Exists !",
      "saveRole" : "Error in saving Role",



      //user
      "undefinedUsername":"Undefined Username",
      "undefinedPassword":"Undefined Password",
      "clientIdExist":"Client id already exists !",
      "saveUser" : "Error in save user",
      "undefinedEmail" : "Email required",

      },
    success:{
      "saveRole" : "Role saved",

      //user
      "saveUser" : "Save User success",
    },
  },

}
module.exports = constants;

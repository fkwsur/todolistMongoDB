const mongoose = require("mongoose");

// username, password

const UserSchema = new mongoose.Schema({
  username : { type : String, required: true, unique : true},
  password : { type : String, required : true},
  password2 : { type : String, required : true}
})

module.exports = mongoose.model('User', UserSchema);

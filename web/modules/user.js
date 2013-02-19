var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../config');
  
var UserSchema = new Schema({
  username: { type: String, index: true },
  password: { type: String },
  email: { type: String, unique: true }

});

mongoose.model('User', UserSchema);

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../config');
  
var GitUserSchema = new Schema({

  tokenId: { type: Number, unique: true },
  token: { type: String },
  username: { type: String}

});

mongoose.model('GitUser', GitUserSchema);


var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../config');
  
var GallerySchema = new Schema({
  name: { type: String, unique: true },
  owner: { type: String},
  version: { type: String},
  category: { type: Number},
  state: { type: Number}
});

mongoose.model('Gallery', GallerySchema);
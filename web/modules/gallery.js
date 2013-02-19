var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../config');
  
var GallerySchema = new Schema({
  name: { type: String, unique: true },
  owner: { type: String, unique: true },
  version: { type: String},
  category: { type: Number, unique: true },
  state: { type: Number, unique: true }
});

mongoose.model('Gallery', GallerySchema);

const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String
});

module.exports = mongoose.model('City', citySchema);



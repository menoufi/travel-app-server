const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  profilePicture: { type: String, required: true },
  rating: { type: Number, required: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
  hashtags: [String],
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'city', required: true }
});

module.exports = mongoose.model('itinerary', ItinerarySchema);

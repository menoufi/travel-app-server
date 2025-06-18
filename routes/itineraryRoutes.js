const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/Itinerary');
const cityModel = require('../model/cityModel');

router.get('/:cityName', async (req, res) => {
  try {
    const cityName = req.params.cityName.trim(); 
    const city = await cityModel.findOne({ name: cityName });

    if (!city) {
      return res.status(404).json({ error: 'City not found' });
    }

    const itineraries = await itineraryModel.find({ city: city._id });
    res.json(itineraries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;





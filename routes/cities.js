const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');

router.get('/test', (req, res) => {
  res.send({ msg: 'Cities test route.' });
});

router.get('/all', (req, res) => {
  cityModel.find()
    .then(cities => res.json(cities))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/', (req, res) => {
  const nuevaCiudad = new cityModel({
    name: req.body.name,
    country: req.body.country,
    img: req.body.img
  });

  nuevaCiudad.save()
    .then(ciudad => res.send(ciudad))
    .catch(err => res.status(500).send("Server error"));
});

module.exports = router;








const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cityRoutes = require('./routes/cities');
const itineraryRoutes = require('./routes/itineraryRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/cities', cityRoutes);
app.use('/api/itineraries', itineraryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});







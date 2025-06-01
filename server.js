const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./keys").mongoURI;

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(db)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/cities', require('./routes/cities'));

app.listen(port, () => {
  console.log("Server is running on " + port);
});




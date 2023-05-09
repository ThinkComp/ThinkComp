const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: String,
  image: {
    public_id: String,
    url: String,
  },
});

module.exports = mongoose.model("Service", serviceSchema);

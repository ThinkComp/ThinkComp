const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  name: String,
  image: {
    public_id: String,
    url: String,
  },
});

module.exports = mongoose.model("Board", boardSchema);

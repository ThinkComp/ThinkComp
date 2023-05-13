const mongoose = require("mongoose");

const posterSchema = new mongoose.Schema({
  public_id: String,
  url: String,
  link: String,
});

module.exports = mongoose.model("Poster", posterSchema);

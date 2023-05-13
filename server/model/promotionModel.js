const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema({
  public_id: String,
  url: String,
  link: String,
});

module.exports = mongoose.model("Promotion", promotionSchema);

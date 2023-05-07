const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  image: {
    public_id: String,
    url: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);

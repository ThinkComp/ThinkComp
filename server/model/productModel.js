const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  skuId: String,
  quantity: Number,
  orignalPrice: Number,
  category: String,
  description: String,
  offerPrice: Number,
  isOnOffer: {
    type: Boolean,
    default: false,
  },
  discount: Number,
  rating: Number,
  sold: Number,
});

module.exports = mongoose.model("Product", productSchema);

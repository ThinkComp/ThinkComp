const Product = require("../model/productModel");

exports.getOfferProducts = async (req, res) => {
  try {
    const products = await Product.find({ isOnOffer: true });

    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

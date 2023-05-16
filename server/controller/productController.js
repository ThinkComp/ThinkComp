const Product = require("../model/productModel");
const cloudinary = require("cloudinary");

exports.getOfferProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, { folder: "products" });

    req.body.image = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };

    const product = await Product.create(req.body);

    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.body.id);

    if (!product) return res.status(500).json({ message: "product doesn't exist" });

    await product.deleteOne();

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const Promotion = require("../model/promotionModel");
const Poster = require("../model/posterModel");
const cloudinary = require("cloudinary");

exports.getAllBanners = async (req, res) => {
  try {
    const promotions = await Promotion.find();
    const posters = await Poster.find();

    res.json({ promotions, posters });
  } catch (error) {
    console.log(error);
  }
};

exports.createPromotion = async (req, res) => {
  try {
    const image = req.body.avatar;

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "banners",
    });

    const promotion = await Promotion.create({ public_id: myCloud.public_id, url: myCloud.secure_url, link: req.body.link });

    res.status(200).json({
      promotion,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deletePromotion = async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);

    await cloudinary.v2.uploader.destroy(promotion.public_id);

    await promotion.deleteOne();

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.createPoster = async (req, res) => {
  try {
    const image = req.body.avatar;

    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "banners",
    });

    const poster = await Poster.create({ public_id: myCloud.public_id, url: myCloud.secure_url, link: req.body.link });

    res.status(200).json({
      poster,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deletePoster = async (req, res) => {
  try {
    const poster = await Poster.findById(req.params.id);

    await cloudinary.v2.uploader.destroy(poster.public_id);

    await poster.deleteOne();

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

const Promotion = require("../model/promotionModel");
const Poster = require("../model/posterModel");

exports.getAllBanners = async (req, res) => {
  try {
    const promotions = await Promotion.find();
    const posters = await Poster.find();

    res.json({ promotions, posters });
  } catch (error) {
    console.log(error);
  }
};

const Category = require("../model/categoriesModel");

exports.getAllCateogries = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

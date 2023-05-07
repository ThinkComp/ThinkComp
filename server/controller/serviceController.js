const Service = require("../model/serviceModel");

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.json(services);
  } catch (error) {
    console.log(error);
  }
};

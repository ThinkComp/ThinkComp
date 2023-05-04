const { getOfferProducts } = require("../controller/productController");

const router = require("express").Router();

router.get("/offer", getOfferProducts);

module.exports = router;

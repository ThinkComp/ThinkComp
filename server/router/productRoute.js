const { getOfferProducts, createProduct } = require("../controller/productController");

const router = require("express").Router();

router.route("/").post(createProduct);
router.get("/offer", getOfferProducts);

module.exports = router;

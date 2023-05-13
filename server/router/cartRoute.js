const router = require('express').Router();
const { addToCart, getCartProducts } = require('../controller/cartController');

router.route("/").post(addToCart).get(getCartProducts);

module.exports = router;
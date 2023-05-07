const { getAllCateogries } = require("../controller/categoryController");

const router = require("express").Router();

router.get("", getAllCateogries);

module.exports = router;

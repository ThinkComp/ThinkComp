const { getAllServices } = require("../controller/serviceController");

const router = require("express").Router();

router.get("", getAllServices);

module.exports = router;

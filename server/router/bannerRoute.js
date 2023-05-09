const { getAllBanners } = require("../controller/bannerController");

const router = require("express").Router();

router.get("/", getAllBanners);

module.exports = router;

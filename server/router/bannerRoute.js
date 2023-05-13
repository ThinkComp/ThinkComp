const { getAllBanners, createPromotion, deletePromotion, createPoster, deletePoster } = require("../controller/bannerController");

const router = require("express").Router();

router.get("/", getAllBanners);
router.post("/promotion", createPromotion);
router.route("/promotion/:id").delete(deletePromotion);
router.post("/poster", createPoster);
router.route("/poster/:id").delete(deletePoster);

module.exports = router;

const { getAllBoards } = require("../controller/boardController");

const router = require("express").Router();

router.get("/", getAllBoards);

module.exports = router;

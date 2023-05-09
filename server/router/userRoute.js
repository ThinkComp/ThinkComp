const { login, verifyOtp } = require('../controller/userController');

const router = require('express').Router();

router.post("/login", login);
router.post("/verify/otp", verifyOtp);

module.exports = router;
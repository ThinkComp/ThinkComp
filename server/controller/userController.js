const User = require('../model/userModel');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) return res.status(500).json({ message: "invalid credentials" });
        if (password != user.password) return res.status(500).json({ message: "invalid credentials" });

        await generateOtpAndSendMail(user);
        generatePinAndSendSms();

        res.status(200).json({
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

const generateOtpAndSendMail = async (user) => {

    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const hashedOtp = await bcrypt.hash(otp, 10);

    user.otp = hashedOtp;
    user.otpCreatedAt = Date.now();
    user.otpExpireAt = Date.now() + 3600000;

    await user.save();

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'window.shop.ecommerce@gmail.com',
            pass: 'lbxqvryygujpupjz',
        },
    });

    const mailOptions = {
        from: 'window.shop.ecommerce@gmail.com',
        to: user.email,
        subject: "OTP",
        html: `<p>OTP to login is <h1>${otp}</h1></p><br/><p> kindly ignore if you haven't requested this.</p>`,
    }

    await transporter.sendMail(mailOptions);
}

exports.verifyOtp = async (req, res) => {
    const { otp, email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user || user.otp === undefined) return res.status(500).json({ message: "Try logging in again" });

    if (user.otpExpireAt < Date.now()) return res.status(500).json({ message: "otp has expired please generate new one." });

    const validateOtp = bcrypt.compare(otp, user.otp);

    if (!validateOtp) return res.status(500).json({ message: "invalid otp" });

    user.otp = undefined;
    user.otpCreatedAt = undefined;
    user.otpExpireAt = undefined;

    await user.save();

    res.status(200).json({ success: true });
}

const generatePinAndSendSms = async () => {

    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
}
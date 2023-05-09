const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    otp: String,
    otpCreatedAt: Date,
    otpExpireAt: Date,
    pin: String,
    pinCreatedAt: Date,
    pinExpireAt: Date,
})

module.exports = mongoose.model('User', userSchema);
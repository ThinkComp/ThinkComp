const User = require('../model/userModel');

exports.addToCart = async (req, res) => {
    const { productId } = req.body;
    const user = await User.findById("6459430554ba19c1ff6e0aa1");

    user.cart.push(productId);

    await user.save();

    res.status(200).json({ sucess: true });
}

exports.getCartProducts = async (req, res) => {
    const user = await User.findById("6459430554ba19c1ff6e0aa1").populate('cart');

    res.status(200).json({ products: user.cart });
}
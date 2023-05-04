const express = require("express");
const app = express();
const cors = require("cors");
const BannerRouter = require("./router/bannerRoute");
const ProductRouter = require("./router/productRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/banner", BannerRouter);
app.use("/product", ProductRouter);

module.exports = app;

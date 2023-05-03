const express = require("express");
const app = express();
const cors = require("cors");
const BannerRouter = require("./router/bannerRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/banner", BannerRouter);

module.exports = app;

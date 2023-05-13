const express = require("express");
const app = express();
const cors = require("cors");
const BannerRouter = require("./router/bannerRoute");
const ProductRouter = require("./router/productRoute");
const CategoryRouter = require("./router/categoryRoute");
const ServiceRouter = require("./router/serviceRoute");
const BoardRouter = require("./router/boardRoute");
const UserRouter = require("./router/userRoute");
const CartRouter = require("./router/cartRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/api/v1/banner", BannerRouter);
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);
app.use("/service", ServiceRouter);
app.use("/board", BoardRouter);
app.use("/user", UserRouter);
app.use("/api/v1/cart", CartRouter);

module.exports = app;

const express = require("express");
const app = express();
const cors = require("cors");
const BannerRouter = require("./router/bannerRoute");
const ProductRouter = require("./router/productRoute");
const CategoryRouter = require("./router/categoryRoute");
const ServiceRouter = require("./router/serviceRoute");
const BoardRouter = require("./router/boardRoute");
const UserRouter = require('./router/userRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/banner", BannerRouter);
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);
app.use("/service", ServiceRouter);
app.use("/board", BoardRouter);
app.use('/user', UserRouter);

module.exports = app;

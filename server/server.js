const app = require("./app");
const connectToDB = require("./database");
const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./server/config.env" });

/* This code is configuring the Cloudinary API with the credentials stored in the environment variables
`CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`. These credentials are required
to authenticate and authorize access to the Cloudinary service. */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});

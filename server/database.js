const mongoose = require("mongoose");

/* This code is connecting to a MongoDB database using Mongoose. It is using the `DB_URI` environment
variable to specify the URI of the database to connect to. Once the connection is established, it
logs a message to the console indicating that the database is connected and the host it is connected
to. */
module.exports = connectToDB = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((res) => console.log(`database connected to ${res.connection.host}`));
};

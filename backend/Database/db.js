require("dotenv").config({ path: './.env' });
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;

console.log("MongoDB URI from .env file:", mongoURI);

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = connectToMongo;

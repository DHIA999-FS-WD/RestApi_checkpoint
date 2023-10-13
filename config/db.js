const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); //i import the MONGO_URI from the dotenv file
    console.log("database connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;

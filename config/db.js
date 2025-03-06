const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose
      .connect(
        process.env.DATABASE.replace("<db_password>", process.env.PASSWORD)
      )
      .then(() => {
        console.log("Db connected");
      });
  } catch (error) {
    console.log("Mongo connection error:", error);
  }
};

module.exports = connectDb;

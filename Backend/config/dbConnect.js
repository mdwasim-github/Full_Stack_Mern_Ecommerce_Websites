const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  const mongoUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/ecommerce";

  await mongoose.connect(mongoUrl);
  console.log("Database Connected Successfully");
};
module.exports = dbConnect;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/web-dev"); // is fixed in the code
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error); // Doesn't give context or message
    process.exit(1);
  }
};

module.exports = connectDB;
 
// No retry logic in code
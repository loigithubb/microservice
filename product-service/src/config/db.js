const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI); // ✅ LOG GIÁ TRỊ

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ Error connecting MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
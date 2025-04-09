require("dotenv").config(); // ✅ Dòng này phải nằm ngay đầu!

const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

connectDB(); // Gọi kết nối DB ở đây

app.get("/", (req, res) => {
  res.send("Product Service is running");
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`✅ Product Service running on port ${PORT}`);
});

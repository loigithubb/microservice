require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Order Service is running");
});

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`✅ Order Service running on port ${PORT}`);
});
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");

const app = express();
app.use(express.json());

connectDB();
app.use("/customers", customerRoutes);

app.get("/", (req, res) => {
  res.send("Customer Service is running");
});

const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
  console.log(`✅ Customer Service running on port ${PORT}`);
});

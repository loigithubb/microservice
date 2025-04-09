const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    email: { type: String, required: true },
    phone: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);

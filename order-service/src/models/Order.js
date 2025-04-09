const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    custemerId:{ type: String , required: true },
    Products: [
        {
        productId: String,
        quantity: Number,
        price: Number,
    }
    ],
    total: Number,
    status: {
        type: String,
        default: "pending",
    }
}, {timestamps: true});

module.exports = mongoose.model("Order", orderSchema);
const Order = require("../models/Order");
exports.createOrder = async (data) => {
    const order = new Order(data);
    return await order.save();
    console.log("Order created successfully");
};

exports.getAllOrders = async () => {
    return await Order.find();
    console.log("Orders retrieved successfully");
};

exports.getOrderById = async (id) => {
    return await Order.findById(id);
    console.log("Order retrieved successfully");
};

exports.updateOrder = async (id, data) => {
    return await Order.findByIdAndUpdate(id, data, { new: true });
    console.log("Order updated successfully");
};

exports.deleteOrder = async (id) => {
    return await Order.findByIdAndDelete(id);
    console.log("Order deleted successfully");
}

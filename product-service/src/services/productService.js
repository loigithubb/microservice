const Product = require("../models/Product");

exports.create = (data) => Product.create(data);
exports.getAll = () => Product.find();
exports.getById = (id) => Product.findById(id);
exports.update = (id, data) =>
  Product.findByIdAndUpdate(id, data, { new: true });
exports.delete = (id) => Product.findByIdAndDelete(id);

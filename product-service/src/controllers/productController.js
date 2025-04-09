const productService = require("../services/productService");

exports.createProduct = async (req, res) => {
  const product = await productService.create(req.body);
  res.status(201).json(product);
};

exports.getAllProducts = async (req, res) => {
  const product = await productService.getAll();
  res.json(product);
};
exports.getProductById = async (req, res) => {
  const product = await productService.getById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};
exports.updateProduct = async (req, res) => {
  const product = await productService.update(req.params.id, req.body);
  console.log("Product updated successfully");
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await productService.delete(req.params.id);
  console.log("Product deleted successfully");
  res.status(204).end();
};

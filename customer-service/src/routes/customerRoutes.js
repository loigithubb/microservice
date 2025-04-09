const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/customerController");

router.post("/", CustomerController.createCustomer);
router.get("/", CustomerController.getCustomers);
router.get("/:id", CustomerController.getCustomerById);
router.put("/:id", CustomerController.updateCustomer);
router.delete("/:id", CustomerController.deleteCustomer);

module.exports = router;

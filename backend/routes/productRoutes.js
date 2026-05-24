import express from "express";
const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import { createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  }),
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  }),
);

export default router;

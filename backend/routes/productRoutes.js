import express from "express";
const router = express.Router();
import products from "../data/products";

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  console.log(product);
  res.json(product);
});

export default router;

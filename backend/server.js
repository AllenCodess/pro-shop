import express from "express";
import products from "../backend/data/products.js";
const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.filter((p) => p._id === req.params.id);
  console.log(product);
  res.json(product);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

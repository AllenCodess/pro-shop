import express from "express";
import products from "../backend/data/products.js";
import connectDB from "./config/db.js"; // importing the file
const port = process.env.PORT;

connectDB(); // calling the function

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

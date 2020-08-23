const express = require("express");
const bodyParser = require("body-parser");
const { getAllProduct, getProductByCode,getCheckout } = require("./product-service");

const app = express();
app.use(bodyParser.json());

app.get("/product", (req, res) => {
  res.json(getAllProduct());
});

app.get("/product/:code", (req, res) => {
  const product = getProductByCode(req.params.code);
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

//Need to calculate total and discount
app.get("/checkout", (req, res) => {
  res.json(getCheckout());
});

app.listen(3000);
console.log("Express started on port 3000");

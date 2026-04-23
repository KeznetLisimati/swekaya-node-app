const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

const products = [
  { name: "Tomatoes", price: 1.5 },
  { name: "Onions", price: 1.2 },
  { name: "Bread", price: 2.0 }
];

app.get("/", (req, res) => {
  res.render("index", { products });
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/admin", (req, res) => {
  res.render("admin", { products });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
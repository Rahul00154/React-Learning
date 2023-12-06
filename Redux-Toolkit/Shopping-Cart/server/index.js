const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(express.json()); //configure middleware function
app.use(cors()); //this allow access nodejs api from react apps

app.get("/", (req, res) => {
  res.send("Welcome to our online shop api");
});
app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log("server running on port" + " " + port));

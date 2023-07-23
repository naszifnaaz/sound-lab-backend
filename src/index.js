const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

// User Routes
const userController = require("./controllers/user.controller");
app.use("/users", userController);

// Product Routes
const productController = require("./controllers/product.controller");
app.use("/products", productController);

// User register and login controller for manual auth
const { register, login } = require("./controllers/auth.controller");

// Express Validation
const {
  validationBodyRules,
  checkRules,
} = require("./middlewares/auth.validator");

app.post("/register", validationBodyRules, checkRules, register);
app.post("/login", login);

module.exports = app;

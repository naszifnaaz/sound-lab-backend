const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

// User Routes
const userController = require("./controllers/user.controller");
app.use("/users", userController);

module.exports = app;

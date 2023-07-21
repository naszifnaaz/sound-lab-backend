const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// User Routes for creating and accessing users

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    console.log(users);
    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(200).send({ users });
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;

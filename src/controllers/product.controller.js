const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send({ product });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send({ product });
  } catch (err) {
    return res.status(204).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).send({ product });
  } catch (err) {
    return res.status(204).send(err);
  }
});

module.exports = router;

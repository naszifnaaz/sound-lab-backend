const mongoose = require("mongoose");

// Creating Product Schema
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgs: { type: String, required: true },
    price: { type: Number, required: true },
    strikedPrice: { type: Number, required: true },
    offer: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: false, default: 5 },
    reviews: { type: Number, required: false, default: 1 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Creating Product Model
const Product = mongoose.model("product", productSchema);

module.exports = Product;

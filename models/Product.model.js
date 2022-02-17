const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: false,
    },
    images: [
      {
        filename: {
          type: String,
          required: true,
        },
        height: {
          type: Number,
          required: false,
        },
        width: {
          type: Number,
          required: false,
        },
        url: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        size: {
          type: Number,
          required: true
        },
      },
    ],
    shipping: {    ////перевозки, доставка
      type: Boolean,
      required: false,
    },
    reviews: {
      type: Number,
      required: false,
    },
    featured: {
      type: Boolean,
      required: false,
    },
    stars: {
      type: Number,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    district: { // район
      type: String,
      required: true,
    },
    footage: { // метраж
      type: Number,
      required: false,
    },
    floor: { // этаж
      type: String,
      required: false,
    },
    colors: [
      { // этаж
        type: String,
        required: false,
      }
    ]
  },
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;



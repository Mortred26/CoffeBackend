const mongoose = require("mongoose");

const productchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  surname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
});

exports.Product = mongoose.model("Product", productchema);

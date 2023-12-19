const express = require("express");
const router = express.Router();
const { Product } = require("../models/product");

// GET ALL API
router.get("/", async (req, res) => {
  try {
    let product = await Product.find(req.params.id);
    if (!product) {
      res.send("product not found");
    } else {
      res.json(product);
    }
  } catch (err) {
    res.json(err);
  }
});

// GET BY ID API
router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      res.send("product not found");
    } else {
      res.json(product);
    }
  } catch (err) {
    res.json(err);
  }
});

// POST API
router.post("/", async (req, res) => {
  let name = req.body.name;
  let surname = req.body.surname;
  let email = req.body.email;
  let phone = req.body.phone;

  const newProduct = Product({
    name: name,
    surname: surname,
    email: email,
    phone: phone,
  });
  newProduct
    .save()
    .then((createdProduct) => {
      res.send(createdProduct);
    })
    .catch((err) => {
      console.error(err);
    });
});

// PUT API

router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
      },
      { new: true }
    );
    // validate
    if (!product) {
      res.send("Product not found");
    } else {
      res.status(202).json(product);
    }
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.send("Product not found");
  } else {
    res.status(202).json(product);
  }
});

module.exports = router;

const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/product");

const api = process.env.API_URL;

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors("*"));

app.use(`${api}product`, productRouter);

mongoose
  .connect("mongodb+srv://user:user1234@cluster0.2yhkubr.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "coffeeroster",
  })
  .then(() => {
    console.log("MongoDB is working");
  })
  .catch((err) => {
    console.error("Something is wrong", err);
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log("port is running");
});

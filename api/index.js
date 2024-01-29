const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const modemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
const port = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/app")
  .then(() => console.log("db connected"))
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

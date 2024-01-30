const mongoose = require("mongoose");

const schma = mongoose.Schema;

const userSchma = new schma({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  verificationToken: { type: String },
  addresses: [
    {
      name: String,
      mobileno: String,
      houseno: String,
      landmark: String,
      city: String,
      country: String,
      postalcode: String,
    },
  ],

  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {type:Date,default:Date.now},
});

const userData = mongoose.model("user", userSchma);

module.exports = userData;

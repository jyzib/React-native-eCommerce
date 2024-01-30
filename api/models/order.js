const mongoose = require("mongoose");

const Schma = mongoose.Schema;

const orderSchma = new Schma({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  prodects: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
    },
  ],
  totalPrice:{type:Number,required:true},
  shippingAddress:{
    name: String,
    mobileno: String,
    houseno: String,
    landmark: String,
    city: String,
    country: String,
    postalcode: String,
  },
  paymentMethord:{type:String},
  createdAt:{type:Date,default:Date.now}
});



const Order = mongoose.model('Order',orderSchma)
module.exports = Order
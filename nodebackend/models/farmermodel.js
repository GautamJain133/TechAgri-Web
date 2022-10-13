// model for user or seller

const mongoose = require("mongoose");

let farmerSchema = new mongoose.Schema({
  farmer_name: {
    type: String,
    trim: true,
    required: true,
  },

  farmer_id: {
    type: String,
    required: true,
    trim: true,
  },

  farmer_phno: {
    type: String,
    required: true,
    trim: true,
  },

  warehouse_address: {
    type: String,
    required: true,
    trim: true,
  },
  farmer_pincode: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Farmer = mongoose.model("Farmer", farmerSchema);
module.exports = Farmer;

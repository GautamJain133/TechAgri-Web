// model for user or seller

const mongoose = require("mongoose");

let cropinfo = new mongoose.Schema({
  farmer_id: {
    type: String,
    required: true,
    trim: true,
  },

  sowing_month: {
    type: Number,
    required: true,
    trim: true,
  },

  sowing_year: {
    type: Number,
    required: true,
    trim: true,
  },

  crop_name: {
    type: String,
    required: true,
    trim: true,
  },
  pesticide_used: {
    type: String,
    required: true,
    trim: true,
  },
  fertilizer_used: {
    type: String,
    required: true,
    trim: true,
  },
  expected_harvest_year: {
    type: Number,
    required: true,
    trim: true,
  },
  expected_harvest_month: {
    type: Number,
    required: true,
    trim: true,
  },
  expected_quantity_produce: {
    type: Number,
    required: true,
    trim: true,
  },

  soil_contained_nitrogen: {
    type: Number,
    required: true,
    trim: true,
  },
  soil_contained_phosphurus: {
    type: Number,
    required: true,
    trim: true,
  },

  soil_ph: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Cropinfo = mongoose.model("Cropinfo", Cropinfo);
module.exports = Cropinfo;

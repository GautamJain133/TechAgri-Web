const mongoose = require("mongoose");

let cropSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    trim: true,
    required: true,
  },

  humidity: {
    type: Number,
    trim: true,
    required: true,
  },

  ph: {
    type: Number,
    trim: true,
    required: true,
  },
  rainfall: {
    type: Number,
    trim: true,
    required: true,
  },

  cropname: {
    type: String,
    trim: true,
    require: true,
  },
});

const Crops = mongoose.model("Crops", cropSchema);
module.exports = Crops;

// model for user or seller

const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },

  userid: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

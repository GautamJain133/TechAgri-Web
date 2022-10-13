// model for user or seller

const mongoose = require("mongoose");

let companySchema = new mongoose.Schema({
  company_name: {
    type: String,
    trim: true,
    required: true,
  },

  company_id: {
    type: String,
    required: true,
    trim: true,
  },

  company_phno: {
    type: String,
    required: true,
    trim: true,
  },

  company_address: {
    type: String,
    required: true,
    trim: true,
  },

  company_pincode: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;

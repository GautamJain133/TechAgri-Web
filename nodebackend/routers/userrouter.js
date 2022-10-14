const express = require("express");
const auth = require("../middleware/user");
const userRouter = express.Router();
const Farmer = require("../models/farmermodel");
const Company = require("../models/companymodel");

userRouter.post("/data", auth, async (req, res) => {
  try {
    console.log(req);
    if (req.type === 1) {
      // he is a farmer'

      let farmer = Farmer({
        farmer_name: req.name,
        farmer_id: req.currentUser.uid,
        farmer_phno: req.phno,
        warehouse_address: req.address,
        farmer_pincode: req.pincode,
      });

      farmer = await farmer.save();

      res.json(farmer);
    } else {
      //  he is a company
      let company = Company({
        company_name: req.name,
        company_id: req.currentUser.uid,
        company_phno: req.phno,
        company_address: req.address,
        company_pincode: req.pincode,
      });

      company = await company.save();

      res.json(company);
    }

    console.log(req.currentUser);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = userRouter;

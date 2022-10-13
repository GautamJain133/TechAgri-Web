const express = require("express");
const auth = require("../middleware/user");
const userRouter = express.Router();
const Farmer = require("../models/farmermodel");
const Company = require("../models/companymodel");

userRouter.post("/data", auth, async (req, res) => {
  try {
    if (req.type === 1) {
      // he is a farmer'

      let farmer = Farmer({
        farmer_name: req.currentUser.name,
        farmer_id: req.currentUser.uid,
        farmer_phno: req.farmer_phno,
        warehouse_address: req.warehouse_address,
        farmer_pincode: req.farmer_pincode,
      });

      farmer = await farmer.save();

      res.json(farmer);
    } else {
      //  he is a company
      let company = Company({
        company_name: req.company_name,
        company_id: req.currentUser.uid,
        company_phno: req.comapny_phno,
        company_address: req.company_address,
        company_pincode: req.company_pincode,
      });

      company = await company.save();

      res.json(company);
    }

    console.log(req.currentUser);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

userRouter.get("/check-authentication", auth, async (req, res) => {
  try {
    const cid = Company.findOne({ company_id: req.currentUser.uid });
    const fid = Farmer.findOne({ farmer_id: req.currentUser.uid });
    if (fid != null) res.json(1);
    if (cid != null) res.json(2);
    res.json(0);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = userRouter;

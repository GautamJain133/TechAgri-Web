const express = require("express");
const { auth } = require("firebase-admin");
const Cropinfo = require("../models/cropinfomodel");
const companyRouter = express.Router();

companyRouter.get("/cropinfo", auth, async (req, res) => {
  try {
    //  select * from cropinfo where cropname = 'this' and  harvestmonth between this to this

    let start = req.smonth;
    let end = req.emonth;
    let cropname = req.cropname;
    const cropdata = await Cropinfo.find({
      expected_harvest_month: { $lte: start, $gte: end },
      crop_name: cropname,
    });

    console.log(cropdata);
    res.json(Cropinfo);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const express = require("express");
const { auth } = require("firebase-admin");
const Cropinfo = require("../models/cropinfomodel");
const Farmer = require("../models/farmermodel");
const companyRouter = express.Router();

companyRouter.post("/cropinfo", auth, async (req, res) => {
  try {
    //  select * from cropinfo where cropname = 'this' and  harvestmonth between this to this

    let start = req.body.smonth;
    let end = req.body.emonth;
    let cropname = req.body.cropname;
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

companyRouter.post("/cropinfo", auth, async (req, res) => {
  try {
    // shortest path
    // input --> company pincode
    // input --> cropname
    const cropname = req.body.cropname;

    const crop = Cropinfo.find({ crop_name: cropname });
    const companyid = req.currentUser.uid;

    function distance(farmerid) {
      const farmer = Farmer.find({ farmer_id: farmerid });
    }

    crop.sort((a, b) => distance(a.famerid) < distance(b.famerid));

    // cpmpany pincode check with all farmer pincode of that crop
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = companyRouter;

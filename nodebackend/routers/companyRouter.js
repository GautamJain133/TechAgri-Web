const express = require("express");
const auth = require("../middleware/user");
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

    const crop = await Cropinfo.find({ crop_name: cropname });
    const companyid = req.currentUser.uid;

    async function distance(farmerid) {
      const farmer = Farmer.find({ farmer_id: farmerid });
      const farmer_pincode = farmer.farmer_pincode;
      const company_pincode = req.currentUser.uid;

      // return dstance;

      return Math.abs(company_pincode - farmer_pincode);

      //"https://maps.googleapis.com/maps/api/distancematrix/xml?origins=" + Convert.ToString(origin) + "&destinations=" + Convert.ToString(destination) + "&key='MY key'"
    }

    crop.sort((a, b) => distance(a.famerid) < distance(b.famerid));

    // cpmpany pincode check with all farmer pincode of that crop
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

companyRouter.post("/highest-production", auth, async (req, res) => {
  try {
    console.log("hello paagal");
    const crop = await Cropinfo.find({ crop_name: req.body.cropname });

    let month = new Map();
    for (let i = 0; i < crop.length; i++) {
      month[crop.expected_harvest_month] += crop.expected_quantity_produce;
    }

    let mth;
    let qty = -1;

    for (let [key, value] of month) {
      if (value > qty) {
        qty = value;
        mth = key;
      }
    }

    res.json({ month: mth });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

companyRouter.post("/pest-filter", auth, async (req, res) => {
  try {
    //  select * from cropinfo where cropname = 'this' and  harvestmonth between this to this

    let pestname = req.body.pestname;

    // console.log(cropdata);
    res.json(Cropinfo);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = companyRouter;

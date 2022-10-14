const express = require("express");
const auth = require("../middleware/user");
const farmerRouter = express.Router();
const Cropinfo = require("../models/cropinfomodel");

farmerRouter.post("/crop-info", auth, async (req, res) => {
  try {
    let cropinfo = Cropinfo({
      farmer_id: req.currentUser.uid,
      sowing_month: req.body.sowing_month,
      sowing_year: req.body.sowing_year,
      crop_name: req.body.crop_name,
      pestiside_used: req.body.pesticide_used,
      fertilizer_used: req.body.fertilizer_used,
      expected_harvested_year: req.body.expected_harvested_year,
      expected_harvested_month: req.body.expected_harvested_month,
      expected_quantity_produce: req.body.expected_quantity_produce,
      soil_contained_nitrogen: req.body.soil_contained_nitrogen,
      soil_contained_phosphurus: req.body.soil_contained_phosphurus,
      soil_ph: req.body.soil_ph,
    });

    cropinfo = await cropinfo.save();

    res.json(cropinfo);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = farmerRouter;

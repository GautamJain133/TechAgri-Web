const express = require("express");
const cropRouter = express.Router();
const crops = require("../models/cropmodel");
const csvtojson = require("csvtojson");

cropRouter.post("/add", async (req, res) => {
  try {
    csvtojson()
      .fromFile("cropdata.csv")
      .then((csvdata) => {
        crops
          .insertMany(csvdata)
          .then(function () {
            console.log("data inserted");
            res.json("ok");
          })
          .catch(function (e) {
            console.log(e);
          });
      });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = cropRouter;

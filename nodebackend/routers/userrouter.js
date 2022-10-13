const express = require("express");
const auth = require("../middleware/user");
const userRouter = express.Router();
const User = require("../models/usermodel");

userRouter.post("/user", auth, async (req, res) => {
  try {
    console.log(req.currentUser);
    let user = User({
      username: req.currentUser.name,
      userid: req.currentUser.uid,
    });

    user = await user.save();

    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = userRouter;

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const userRouter = require("./routers/userRouter");
const cropRouter = require("./routers/cropRouter");
const farmerRouter = require("./routers/farmerrouter");
const companyRouter = require("./routers/companyRouter");
const PORT = 9000;
const db =
  "mongodb+srv://gautam:JB6Onx60hHqc6t6u@cluster0.004vsbm.mongodb.net/userdata?retryWrites=true&w=majority";

console.log(PORT);
const app = express();

app.use(express.json());
app.use(cors());

//app.use(auth);

//routers
app.use(userRouter);
app.use(cropRouter);
app.use(farmerRouter);
app.use(companyRouter);
const connection = mongoose
  .connect(db)
  .then((data) => {
    console.log(" mongodb connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, function () {
  console.log(`connectes at port ${PORT}`);
});

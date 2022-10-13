const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const userRouter = require("./routers/userRouter");
const PORT = 9000;
const db =
  "mongodb+srv://gautam:JB6Onx60hHqc6t6u@cluster0.004vsbm.mongodb.net/userdata?retryWrites=true&w=majority";

console.log(PORT);
const app = express();

// middlewares dnlkfsdnfds
app.use(express.json());
app.use(cors());

//app.use(auth);

//routers
app.use(userRouter);
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

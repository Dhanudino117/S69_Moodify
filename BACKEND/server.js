const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
let a = false;
const port = process.env.PORT;
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Mongodb is connected ");
    a = true;
  })
  .catch((err) => console.log("Error while connecting: ", err));

app.get("/", (req, res) => {
  // res.send("Hello, welcome to my ASAP Project");
  if (a) {
    res.send("Connected to DataBase");
  } else {
    res.send(`Error while connecting `);
  }
});
app.get("/ping", (req, res) => {
  res.json({ message: "Pong" });
});

app.listen(port, (req, res) => {
  console.log("Port is running on the LocalHost:", port);
});

const { create, update, read, Delete } = require("./userHandlres.js");
const express = require("express");
const route = express.Router();

route.get("/read", read);

route.post("/create", create);

route.put("/update", update);

route.delete("/delete", Delete);

module.exports = route;

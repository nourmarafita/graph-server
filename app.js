"use strict";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");
const port = process.env.PORT || 4001;
const {connect} = require("./config/mongodb");

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/graph", router);

connect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}`);
  });
});

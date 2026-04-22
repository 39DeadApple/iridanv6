const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/auth", require("./src/routes/auth.routes"));
app.use("/fuel-logs", require("./src/routes/fuelLog.routes"));

module.exports = app;
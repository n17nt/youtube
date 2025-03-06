const express = require("express");
let app = express();
const cors = require("cors");
const mongan = require("morgan");

const videoRouter = require("../routes/video.route");

app.use(cors());
app.use(mongan("dev"));

app.use(express.json());

app.use("/api/v1/video", videoRouter);
app.get("*", (req, res, next) => {
  res.send("salom");
});
module.exports = app;

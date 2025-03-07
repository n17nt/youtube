const express = require("express");
let app = express();
const cors = require("cors");
const mongan = require("morgan");

const videoRouter = require("../routes/video.route");

app.use(express.json()); // for json
app.use(express.urlencoded()); // for form data
app.use(express.urlencoded({ extended: true })); // for form data

app.use(cors());
app.use(mongan("dev"));

app.use("/nima", express.static("public"));
app.use("/api/v1/video", videoRouter);
app.get("*", (req, res, next) => {
  res.send("salom");
});
module.exports = app;

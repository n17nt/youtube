const { default: mongoose } = require("mongoose");

let videoSchema = new mongoose.Schema({
  title: { type: String },
  duration: { type: Number },
  category: { type: String },
  author: { type: String },
  banner: { type: String },
});
let video = mongoose.model("videos", videoSchema);

module.exports = video;

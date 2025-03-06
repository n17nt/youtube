let Video = require("../models/video.model");

let findAllVideo = async (req, res, next) => {
  let videos = await Video.find();
  res.status(200).json({ name: "video", videos });
};

let addVideo = async (req, res, next) => {
  let data = req.body;
  console.log(data);
  let video = await Video.create({ ...data, category: "Chotki" });
  //   let video = new Video();
  //   video.title = req.body.title;
  //   video.duration = req.body.duration;
  //   video.author = req.body.author;
  //   video.category = "Chotki";

  await video.save();

  // let videos = await Video.find();
  res.status(200).json({ name: "video", video });
};

let findVideoById = async (req, res, next) => {
  let id = req.params.id;
  let video = await Video.findById(id);
  res.status(200).json({ name: "video", video });
};

let updateVideoById = async (req, res, next) => {
  let id = req.params.id;
  let data = req.body;
  let video = await Video.findByIdAndUpdate(id, data, { new: true });
  res.status(200).json({ name: "video", video });
};

let deleteVideo = async (req, res, next) => {
  let id = req.params.id;

  await Video.findByIdAndDelete(id);
  res.status(204).json({ name: "video" });
};
module.exports = {
  findAllVideo,
  addVideo,
  findVideoById,
  updateVideoById,
  deleteVideo,
};

const express = require("express");
const {
  findAllVideo,
  addVideo,
  findVideoById,
  updateVideoById,
  deleteVideo,
} = require("../controller/video.controller");
const multer = require("multer");
let router = express.Router();
let path = require("path");

let storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    console.log(file);

    cb(
      null,
      Date.now() +
        "_" +
        Math.floor(Math.random() * 1500 + 1700) +
        "-" +
        "user" +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 200 },
  fileFilter: (req, file, cb) => {
    let extraname = path.extname(file.originalname);
    if ([".jpg", ".png"].includes(extraname)) {
      cb(null, true);
    } else {
      cb(new Error("it is not nice type"), false);
    }
  },
});

router.route("/").get(findAllVideo).post(upload.array("images"), addVideo);
router
  .route("/:id")
  .get(findVideoById)
  .patch(updateVideoById)
  .delete(deleteVideo);

module.exports = router;

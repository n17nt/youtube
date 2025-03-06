const express = require("express");
const {
  findAllVideo,
  addVideo,
  findVideoById,
  updateVideoById,
  deleteVideo,
} = require("../controller/video.controller");

let router = express.Router();

router.route("/").get(findAllVideo).post(addVideo);
router
  .route("/:id")
  .get(findVideoById)
  .patch(updateVideoById)
  .delete(deleteVideo);

module.exports = router;
